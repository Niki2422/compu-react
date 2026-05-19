import { Router } from "express";
import {
  getProducts,
  getProduct,
  createNewProduct,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createNewProduct);

export default router;