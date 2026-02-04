import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { getAllUsers, getUserById ,deleteUserById,updateUserById} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protect,getAllUsers);
router.get("/id/:id", protect,getUserById);
router.put("/id/:id", protect,updateUserById);
router.delete("/id/:id", protect,deleteUserById);


export default router;
