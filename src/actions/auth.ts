"use server";

import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { prisma } from "@/src/lib/prisma";
import { env } from "@/src/config/env";
import {
  RegisterSchema,
  type RegisterType,
  type LoginType,
} from "@/src/schemas/auth";
import { ConflictError, NotFoundError, AppError } from "@/src/utils/errors";
import { signIn } from "@/src/auth";
import { AuthError } from "next-auth";

export async function registerUser(userData: RegisterType) {
  try {
    // 1. Validate with the schema (specifically the body part)
    const result = RegisterSchema.safeParse({ body: userData });

    if (!result.success) {
      return {
        error: "Invalid registration data",
        details: result.error.flatten().fieldErrors,
      };
    }

    const { username, email, password } = userData;

    // 2. Verify if the username or email already exists
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

    // 3. Verify if the role exists
    const role = await prisma.role.findUnique({ where: { name: "user" } });
    if (!role) {
      throw new NotFoundError("Default role not found");
    }

    // 4. Hash the password
    const hashedPassword = await argon2.hash(password);

    // 5. Create the user
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

    // 6. Generate the token
    const token = jwt.sign(
      { id: newUser.id, role: newUser.role.name },
      env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { success: true, user: newUser, token };
  } catch (error: unknown) {
    console.error("Register error:", error);
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
    await signIn("credentials", {
      identifier: userData.identifier,
      password: userData.password,
      redirectTo: "/",
    });
  } catch (error: unknown) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error; // it must be thrown to let next-auth handle the redirect
  }
}
