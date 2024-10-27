import { matchedData } from "express-validator";
import { Router } from "express";
import crypto from "crypto";

import User from "../mongoose/schemas/user.mjs";
import { authenticate, authorize } from "../middlewares/user.mjs";
import validateSchema from "../middlewares/validator.mjs";
import {
  forgotPasswordSchema,
  registerSchema,
  resetPasswordSchema,
} from "../validation/auth.mjs";
import { hashPassword } from "../utils/bcrypt.mjs";
import { transporter } from "../utils/mail.mjs";

const authRouter = Router();

authRouter.post(
  "/register",
  validateSchema(registerSchema),
  async (req, res) => {
    try {
      const { name, surname, email, password } = matchedData(req);

      const alreadyExist = await User.findOne({ email });

      if (alreadyExist) {
        return res.status(400).json({ message: "User already exists" });
      }

      const user = new User({
        name,
        surname,
        email,
        password: hashPassword(password),
      });
      await user.save();

      return res.status(201).json({ message: "Registered Successfully" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);
authRouter.post("/login", authenticate, async (_, res) => {
  return res.status(200).json({ message: "Logged in successfully" });
});
authRouter.get("/current-user", authorize, (req, res) => {
  return res.status(200).json(req.user);
});
authRouter.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({
        message: "Something went wrong",
      });
    }

    res.json({
      message: "Logout successful",
    });
  });
});
authRouter.post(
  "/forgot-password",
  validateSchema(forgotPasswordSchema),
  async (req, res) => {
    try {
      const { email } = matchedData(req);
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const token = crypto.randomBytes(20).toString("hex");

      user.resetPasswordToken = token;
      user.resetPasswordTokenExpires = Date.now() + 3600000;
      await user.save();
      transporter.sendMail({
        from: '"Authentication 👻" <dadasovsuleyman126@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Reset Your Password", // Subject line
        html: `
        <h1>Reset Your Password</h1>
        <p>Click <a href="http://localhost:5173/reset-password/${token}">here</a> to reset your password</p>
        <p>If you didn't request this, please ignore this email</p>
        <p>Your token will expire in 1 hour</p>
        <p>Your token is: ${token}</p>
      `,
      });

      res.json({ message: "Email sent" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);
authRouter.post(
  "/reset-password",
  validateSchema(resetPasswordSchema),
  async (req, res) => {
    try {
      const { token, password } = matchedData(req);
      const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordTokenExpires: { $gt: Date.now() },
      });

      if (!user) {
        return res.status(400).json({ message: "Invalid or expired token" });
      }

      user.password = hashPassword(password);
      user.resetPasswordToken = null;
      user.resetPasswordTokenExpires = null;
      await user.save();

      return res.status(200).json({ message: "Password reset successfully" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);

export default authRouter;
