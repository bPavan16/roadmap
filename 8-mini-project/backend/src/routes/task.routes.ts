import { Router } from "express";
import {
  createTask,
  getTasks,
  completeTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getTasks);
router.patch("/:taskId/complete", authMiddleware, completeTask);
router.put("/:taskId", authMiddleware, updateTask);
router.delete("/:taskId", authMiddleware, deleteTask);

export default router;