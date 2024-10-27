import passport from "passport";

export const authorize =
  ({ isAdmin = false, isSuperAdmin = false }) =>
  (req, res, next) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    if (isSuperAdmin && req.user.role !== "superadmin") {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    if (
      isAdmin &&
      req.user.role !== "admin" &&
      req.user.role !== "superadmin"
    ) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    next();
  };

export const authenticate = (req, res, next) =>
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
    if (!user) {
      return res.status(400).json({
        message: info.message,
      });
    }

    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }
      next();
    });
  })(req, res, next);
