import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const Env = {
  baseUrl: process.env.BASE_URL /* ?? "https://app.cymulate.com/cym"*/,
  email: process.env.MAIL ?? "",
  password: process.env.PASS ?? "",

  assertCreds() {
    if (!this.email || !this.password) {
      throw new Error("Environment variables MAIL and PASS must be set");
    }
  },
};
