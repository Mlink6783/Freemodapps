import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMod } from "../api";

export default function ModDetail() {
  const { id } = useParams();
  const [mod, setMod] = useState(null);

  useEffect(() => {
    getMod(id).then(res => setMod(res.data));
  }, [id]);

  if (!mod) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img src={mod.image} alt={mod.title} className="w-full rounded mb-4" />
      <h1 className="text-2xl font-bold">{mod.title}</h1>
      <p className="text-gray-600">{mod.description}</p>
      <a href={mod.teraboxLink} target="_blank" rel="noopener noreferrer"
         className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        👉 Download from Terabox
      </a>
    </div>
  );
}