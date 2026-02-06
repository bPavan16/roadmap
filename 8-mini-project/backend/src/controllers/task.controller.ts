import { Request, Response } from "express";
import { Task } from "../model/task.model.js";
import { User } from "../model/user.model.js";

export const createTask = async (req: any, res: Response) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  const { title, description, userId } = req.body;

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
};

export const getTasks = async (req: any, res: Response) => {
  // Get all for admin
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

  // get only his for user
  const tasks = await Task.findAll({
    where: { assignedToId: req.user.id },
  });

  res.json(tasks);
};

export const completeTask = async (req: any, res: Response) => {
  if (req.user.role !== "user") {
    return res.status(403).json({ message: "Users only" });
  }

  const { taskId } = req.params;

  const task = await Task.findOne({
    where: {
      id: taskId,
      assignedToId: req.user.id,
    },
  });

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.isCompleted = true;
  await task.save();

  res.json({ message: "Task marked as completed" });
};
