import { pool } from "../config/db.js";

export const createOrder = async (req, res) => {
  const userId = req.user.id;
  const { items } = req.body;

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    let total = 0;

    for (let item of items) {
      const [product] = await connection.query(
        "SELECT * FROM products WHERE id = ?",
        [item.product_id]
      );

      const prod = product[0];

      if (prod.stock < item.quantity) {
        throw new Error("Stock insuficiente");
      }

      total += prod.price * item.quantity;
    }

    const [orderResult] = await connection.query(
      "INSERT INTO orders (user_id, total) VALUES (?, ?)",
      [userId, total]
    );

    const orderId = orderResult.insertId;

    for (let item of items) {
      const [product] = await connection.query(
        "SELECT * FROM products WHERE id = ?",
        [item.product_id]
      );

      const prod = product[0];

      await connection.query(
        "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
        [orderId, item.product_id, item.quantity, prod.price]
      );

      await connection.query(
        "UPDATE products SET stock = stock - ? WHERE id = ?",
        [item.quantity, item.product_id]
      );
    }

    await connection.commit();

    res.json({ message: "Pedido creado" });

  } catch (error) {
    await connection.rollback();
    res.status(500).json({ message: error.message });
  } finally {
    connection.release();
  }
};