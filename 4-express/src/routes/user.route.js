import express from "express";

import { getAllUsers, getUserById } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/id/:id", getUserById);
router.put("id/:id", updateUserById);
router.delete("id/:id", deleteUserById);

export default router;
