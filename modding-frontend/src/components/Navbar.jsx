import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">Modding Hub</Link>
        <Link to="/add" className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">+ Add Mod</Link>
      </div>
    </nav>
  );
}