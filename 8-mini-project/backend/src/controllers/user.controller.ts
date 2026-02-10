import { Response } from "express";
import { User } from "../model/user.model.js";
import { Task } from "../model/task.model.js";
import { AuthRequest } from "../middleware/auth.middleware.js";

export const getAllUsers = async (req: AuthRequest, res: Response) => {
  try {
    // if (req.user.role !== "admin") {
    //   return res.status(403).json({ message: "Admin only" });
    // }

    const users = await User.findAll({
      attributes: { exclude: ["password"] },
      include: {
        model: Task,
        as: "tasks",
      },
    });

    res.json({
      data: users,
    });
  } catch (error) {
    console.error("Get users error:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

export const getUserById = async (req: AuthRequest, res: Response) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const { userId } = req.params;

    const user = await User.findByPk(Number(userId), {
      attributes: { exclude: ["password"] },
      include: {
        model: Task,
        as: "tasks",
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({ message: "Failed to fetch user" });
  }
};

export const deleteUser = async (req: AuthRequest, res: Response) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const { userId } = req.params;

    const user = await User.findByPk(Number(userId));
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.destroy();
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({ message: "Failed to delete user" });
  }
};
