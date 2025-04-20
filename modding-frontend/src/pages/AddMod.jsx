import { useState } from "react";
import { addMod } from "../api";

export default function AddMod() {
  const [form, setForm] = useState({ title: "", description: "", category: "", image: "", teraboxLink: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addMod(form);
    alert("Mod added!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4">
      {["title", "description", "category", "image", "teraboxLink"].map(field => (
        <input key={field} name={field} onChange={handleChange} placeholder={field}
               className="block w-full mb-2 p-2 border rounded" required />
      ))}
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Mod</button>
    </form>
  );
}