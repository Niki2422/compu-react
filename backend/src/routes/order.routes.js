import { Router } from "express";
import { createOrder } from "../controllers/order.controller.js";
import { authRequired } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authRequired, createOrder);

export default router;