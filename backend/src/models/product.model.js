import { pool } from "../config/db.js";

export const getAllProducts = async () => {
  const [rows] = await pool.query("SELECT * FROM products");
  return rows;
};

export const getProductById = async (id) => {
  const [rows] = await pool.query(
    "SELECT * FROM products WHERE id = ?",
    [id]
  );
  return rows[0];
};

export const createProduct = async (product) => {
  const { name, price, description, stock, image, category_id } = product;

  const [result] = await pool.query(
    `INSERT INTO products (name, price, description, stock, image, category_id)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [name, price, description, stock, image, category_id]
  );

  return {
    id: result.insertId,
    ...product,
  };
};