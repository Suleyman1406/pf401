import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "dadasovsuleyman126@gmail.com",
    pass: process.env.NODEMAILER_EMAIL_AUTH_PASS,
  },
});
