import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";
import orderRoutes from "./routes/order.routes.js";

dotenv.config();

const app = express(); // ✅ PRIMERO se crea

// middlewares
app.use(cors());
app.use(express.json());

// rutas (DESPUÉS de crear app)
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// test
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

export default app;