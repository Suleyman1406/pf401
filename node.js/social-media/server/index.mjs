import cookieParser from "cookie-parser";
import session from "express-session";
import url from "url";
import passport from "passport";
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import authRouter from "./routes/auth.mjs";
import postRouter from "./routes/post.mjs";
import "./auth/local-strategy.mjs";
import commentRouter from "./routes/comment.mjs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/auth", authRouter);
app.use("/posts", postRouter);
app.use(
  "/posts/:id/comments",
  (req, _, next) => {
    req.postId = req.params.id;
    next();
  },
  commentRouter
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

async function connecToDb() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kqwzu.mongodb.net/social-media?retryWrites=true&w=majority&appName=Cluster0`
  );
}
connecToDb()
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));
