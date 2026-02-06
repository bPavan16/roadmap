import { Router } from "express";
import { auth } from "../middleware/auth.middleware.js";
import {
  createTask,
  getTasks,
  completeTask,
} from "../controllers/task.controller.js";
import { isAdmin } from "../middleware/role.middleware.js";

const router = Router();

router.post("/", auth, isAdmin, createTask);

router.get("/", auth, getTasks);

router.patch("/:taskId/complete", auth, completeTask);

export default router;
