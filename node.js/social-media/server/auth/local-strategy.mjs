import passport from "passport";
import { Strategy } from "passport-local";
import User from "../mongoose/schemas/user.mjs";
import { comparePasswords } from "../utils/bcrypt.mjs";

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).select("name surname email");
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default passport.use(
  new Strategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        if (!comparePasswords(password, user.password)) {
          return done(null, false, { message: "Invalid Credentials" });
        }

        return done(null, user);
      } catch (err) {
        done(null, false, { message: "Internal server error" });
      }
    }
  )
);
