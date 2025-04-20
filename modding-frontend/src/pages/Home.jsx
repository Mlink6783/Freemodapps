import { useEffect, useState } from "react";
import { getMods } from "../api";
import ModCard from "../components/ModCard";

export default function Home() {
  const [mods, setMods] = useState([]);

  useEffect(() => {
    getMods().then(res => setMods(res.data));
  }, []);

  return (
    <div className="p-4 grid md:grid-cols-3 gap-4">
      {mods.map(mod => <ModCard key={mod._id} mod={mod} />)}
    </div>
  );
}