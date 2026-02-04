import { Router } from "express";
import auth from "../middlewares/auth.middleware.js";
import {
  createProduct,
  getProducts,
} from "../controllers/product.controller.js";

const router = Router();

router.post("/", auth, createProduct);
router.get("/", auth, getProducts);

export default router;
