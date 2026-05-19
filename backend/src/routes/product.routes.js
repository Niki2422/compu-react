import { Router } from "express";
import upload from "../middlewares/upload.js";
import {
  getProducts,
  getProduct,
  createNewProduct,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createNewProduct);
router.post("/", upload.single("image"), createNewProduct);

export default router;