import {
  getAllProducts,
  getProductById,
} from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
  console.log(error); // 👈 CLAVE
  res.status(500).json({ message: error.message });
    }
};

export const getProduct = async (req, res) => {
  try {
    const product = await getProductById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(product);
  } catch (error) {
  console.log(error); // 👈 CLAVE
  res.status(500).json({ message: error.message });
    }
};