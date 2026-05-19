import { useState } from "react";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
    category_id: 1,
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ ESTA ES LA FUNCIÓN QUE TE FALTABA
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("price", Number(form.price));
      formData.append("description", form.description);
      formData.append("stock", Number(form.stock));
      formData.append("category_id", form.category_id);

      // 👇 IMPORTANTE: mandar la imagen
      if (file) {
        formData.append("image", file);
      }

      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: formData, // ❗ NO headers
      });

      const data = await res.json();

      console.log(data);

      alert("✅ Producto creado");

      // limpiar form
      setForm({
        name: "",
        price: "",
        description: "",
        stock: "",
        category_id: 1,
      });

      setFile(null);

    } catch (error) {
      console.error(error);
      alert("❌ Error al crear producto");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Crear Producto</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} />
        <input name="price" placeholder="Precio" value={form.price} onChange={handleChange} />
        <input name="description" placeholder="Descripción" value={form.description} onChange={handleChange} />
        <input name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} />

        {/* 👇 ahora sí funciona */}
        <input type="file" onChange={handleFileChange} />

        <button type="submit">Crear producto</button>
      </form>
    </div>
  );
};

export default AddProduct;