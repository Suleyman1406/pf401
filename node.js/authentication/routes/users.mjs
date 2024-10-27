import { Router } from "express";
import { authorize } from "../middlewares/user.mjs";
import User from "../mongoose/schemas/user.mjs";
import validateSchema from "../middlewares/validator.mjs";
import { findUserSchema, changeUserRoleSchema } from "../validation/users.mjs";

const router = Router();

router.get("/", authorize({ isAdmin: true }), async (req, res) => {
  const users = await User.find().select([
    "name",
    "surname",
    "email",
    "role",
    "isBlocked",
  ]);

  res.json({
    users: users.map((user) => ({
      ...user.toObject(),
      id: user._id,
      _id: undefined,
    })),
  });
});

router.patch(
  "/change-role/:id",
  authorize({ isSuperAdmin: true }),
  validateSchema(changeUserRoleSchema),
  async (req, res) => {
    const { id } = req.params;
    const { role } = req.body;

    const user = await User.findById(id).select([
      "role",
      "email",
      "name",
      "surname",
    ]);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.role === "superadmin") {
      return res
        .status(400)
        .json({ message: "You can't change superadmin role" });
    }

    if (user.role === role) {
      return res.status(400).json({ message: "User already has this role" });
    }

    user.role = role;
    await user.save();

    return res.json({ message: "Role changed successfully", user });
  }
);

router.post(
  "/block/:id",
  authorize({ isAdmin: true }),
  validateSchema(findUserSchema),
  async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id).select([
      "role",
      "email",
      "name",
      "surname",
      "isBlocked",
    ]);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    if (user.role === "superadmin") {
      return res.status(400).json({ message: "You can't block superadmin" });
    }
    if (user.role === "admin" && req.user?.role !== "superadmin") {
      return res.status(400).json({ message: "You can't block admin" });
    }
    if (user.isBlocked) {
      return res.status(400).json({ message: "User already blocked" });
    }
    user.isBlocked = true;
    await user.save();

    res.json({ message: "User blocked successfully", user });
  }
);
router.post(
  "/unblock/:id",
  authorize({ isAdmin: true }),
  validateSchema(findUserSchema),
  async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id).select([
      "role",
      "email",
      "name",
      "surname",
      "isBlocked",
    ]);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    if (user.role === "superadmin") {
      return res.status(400).json({ message: "You can't activate superadmin" });
    }
    if (user.role === "admin" && req.user?.role !== "superadmin") {
      return res.status(400).json({ message: "You can't activate admin" });
    }
    if (!user.isBlocked) {
      return res.status(400).json({ message: "User already active" });
    }
    user.isBlocked = false;
    await user.save();

    res.json({ message: "User activated successfully", user });
  }
);

router.delete(
  "/:id",
  authorize({ isSuperAdmin: true }),
  validateSchema(findUserSchema),
  async (req, res) => {
    try {
      const { id } = req.params;

      const user = await User.findById(id);
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      if (user.role === "superadmin") {
        return res.status(400).json({ message: "You can't delete superadmin" });
      }

      await user.deleteOne();

      res.send(user);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Something went wrong!" });
    }
  }
);

export default router;
