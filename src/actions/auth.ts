"use server";

import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { prisma } from "@/src/lib/prisma";
import { env } from "@/src/config/env";
import {
  RegisterSchema,
  LoginSchema,
  type RegisterType,
  type LoginType,
} from "@/src/schemas/auth";
import {
  ConflictError,
  NotFoundError,
  UnauthorizedError,
  AppError,
} from "@/src/utils/errors";

export async function registerUser(userData: RegisterType) {
  try {
    // 1. Validar con el esquema (específicamente la parte del body)
    const result = RegisterSchema.safeParse({ body: userData });

    if (!result.success) {
      return {
        error: "Invalid registration data",
        details: result.error.flatten().fieldErrors,
      };
    }

    const { username, email, password } = userData;

    // 2. Lógica reutilizada de AuthService: Verificar si el usuario o email ya existen
    const existingUsername = await prisma.user.findUnique({
      where: { username },
    });
    if (existingUsername) {
      throw new ConflictError("Username already in use");
    }

    const existingEmail = await prisma.user.findUnique({
      where: { email },
    });
    if (existingEmail) {
      throw new ConflictError("Email already in use");
    }

    // 3. Verificar si el rol existe (reutilizado)
    const role = await prisma.role.findUnique({ where: { name: "user" } });
    if (!role) {
      throw new NotFoundError("Default role not found");
    }

    // 4. Hash de contraseña con Argon2 (reutilizado)
    const hashedPassword = await argon2.hash(password);

    // 5. Crear el usuario (reutilizado)
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        role: { connect: { id: role.id } },
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: {
          select: {
            name: true,
          },
        },
        createdAt: true,
      },
    });

    // 6. Generar token (reutilizado)
    const token = jwt.sign(
      { id: newUser.id, role: newUser.role.name },
      env.JWT_SECRET,
      { expiresIn: "1h" } // Ampliamos a 1h para mejor UX
    );

    return { success: true, user: newUser, token };
  } catch (error: unknown) {
    console.error("Error en registro:", error);
    if (error instanceof AppError) {
      return { error: error.message, status: error.statusCode };
    }
    return {
      error: error instanceof Error ? error.message : "Unknown error",
      status: 500,
    };
  }
}

export async function loginUser(userData: LoginType) {
  try {
    // 1. Validar datos
    const result = LoginSchema.safeParse({ body: userData });
    if (!result.success) {
      return { error: "Invalid login credentials" };
    }

    const { identifier, password } = userData;

    // 2. Buscar usuario por username o email (reutilizado)
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ username: identifier }, { email: identifier }],
      },
      include: { role: true },
    });

    if (!user) {
      throw new UnauthorizedError("Invalid credentials");
    }

    // 3. Verificar contraseña (reutilizado)
    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) {
      throw new UnauthorizedError("Invalid credentials");
    }

    // 4. Quitar el password de la respuesta
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _password, ...userWithoutPassword } = user;

    // 5. Generar token (reutilizado)
    const token = jwt.sign(
      { id: user.id, role: user.role.name },
      env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return {
      success: true,
      user: userWithoutPassword,
      token,
    };
  } catch (error: unknown) {
    console.error("Error en login:", error);
    if (error instanceof AppError) {
      return { error: error.message, status: error.statusCode };
    }
    return {
      error: error instanceof Error ? error.message : "Unknown error",
      status: 401,
    };
  }
}
