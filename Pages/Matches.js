import { useEffect, useState } from "react";

export default function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("/api/matches")
      .then(res => res.json())
      .then(setMatches);
  }, []);

  return (
    <div>
      <h2>Upcoming Matches</h2>

      {matches.map(m => (
        <div key={m.id}>
          <strong>{m.home} vs {m.away}</strong>
          <br />
          <button>Home Win</button>
          <button>Draw</button>
          <button>Away Win</button>
        </div>
      ))}
    </div>
  );
}
