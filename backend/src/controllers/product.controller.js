import {
  getAllProducts,
  getProductById,
  createProduct, // 👈 AGREGAR
} from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    console.log(error);
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
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const createNewProduct = async (req, res) => {
  try {
    const { name, price, description, stock, image, category_id } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: "Faltan datos obligatorios" });
    }

    const newProduct = await createProduct({
      name,
      price,
      description,
      stock,
      image,
      category_id,
    });

    res.status(201).json({
      message: "Producto creado",
      product: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};