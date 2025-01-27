import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    guestId: number;
  }

  interface Session {
    user: User;
  }
}
