import { Router } from "express";
import { getAllUsers, getUserById, deleteUser } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", authMiddleware, getAllUsers);
router.get("/:userId", authMiddleware, getUserById);
router.delete("/:userId", authMiddleware, deleteUser);

export default router;
