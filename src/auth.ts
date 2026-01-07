import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/src/schemas/auth";
import { prisma } from "@/src/lib/prisma";
import argon2 from "argon2";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        // Validamos con el schema de Zod que definiste
        const validatedFields = LoginSchema.safeParse({ body: credentials });

        if (validatedFields.success) {
          const { identifier, password } = validatedFields.data.body;

          const user = await prisma.user.findFirst({
            where: {
              OR: [{ email: identifier }, { username: identifier }],
            },
            include: { role: true },
          });

          if (!user) return null;

          const passwordsMatch = await argon2.verify(user.password, password);

          if (passwordsMatch) {
            return {
              id: user.id.toString(),
              name: user.username,
              email: user.email,
              role: user.role.name,
            };
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
});
