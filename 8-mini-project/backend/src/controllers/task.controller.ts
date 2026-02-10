import { Response } from "express";
import { Task } from "../model/task.model.js";
import { User } from "../model/user.model.js";
import { AuthRequest } from "../middleware/auth.middleware.js";

export const createTask = async (req: AuthRequest, res: Response) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const { title, description, userId } = req.body;

    if (!title || !userId) {
      return res.status(400).json({ message: "Title and userId are required" });
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const task = await Task.create({
      title,
      description,
      assignedToId: userId,
    });

    res.status(201).json(task);
  } catch (error) {
    console.error("Create task error:", error);
    res.status(500).json({ message: "Failed to create task" });
  }
};

export const getTasks = async (req: AuthRequest, res: Response) => {
  try {
    if (req.user.role === "admin") {
      const tasks = await Task.findAll({
        include: {
          model: User,
          as: "assignedTo",
          attributes: ["id", "name", "email"],
        },
      });
      return res.json(tasks);
    }

    const tasks = await Task.findAll({
      where: { assignedToId: req.user.id },
    });
    res.json(tasks);
  } catch (error) {
    console.error("Get tasks error:", error);
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

export const completeTask = async (req: AuthRequest, res: Response) => {
  try {
    if (req.user.role !== "user") {
      return res.status(403).json({ message: "Users only" });
    }

    const { taskId } = req.params;

    const task = await Task.findOne({
      where: {
        id: Number(taskId),
        assignedToId: req.user.id,
      },
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found or not assigned to you" });
    }

    task.isCompleted = true;
    await task.save();

    res.json({ message: "Task marked as completed", task });
  } catch (error) {
    console.error("Complete task error:", error);
    res.status(500).json({ message: "Failed to complete task" });
  }
};

export const updateTask = async (req: any, res: Response) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  const { taskId } = req.params;
  const { title, description, userId } = req.body;

    const task = await Task.findByPk(Number(taskId));
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (userId) {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  }

  if (title) task.title = title;
  if (description) task.description = description;

  await task.save();

  res.json(task);
};

export const deleteTask = async (req: AuthRequest, res: Response) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const { taskId } = req.params;

    const task = await Task.findByPk(Number(taskId));
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.destroy();

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Delete task error:", error);
    res.status(500).json({ message: "Failed to delete task" });
  }
};
