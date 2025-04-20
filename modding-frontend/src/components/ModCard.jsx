import { Link } from "react-router-dom";

export default function ModCard({ mod }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <img src={mod.image} alt={mod.title} className="rounded w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-bold">{mod.title}</h2>
      <p className="text-sm text-gray-600">{mod.category}</p>
      <Link to={`/mod/${mod._id}`} className="text-blue-600 mt-2 inline-block">View Details</Link>
    </div>
  );
}