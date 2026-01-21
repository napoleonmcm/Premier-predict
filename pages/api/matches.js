export default function handler(req, res) {
  res.json([
    { id: "1", home: "Arsenal", away: "Chelsea" },
    { id: "2", home: "Man City", away: "Liverpool" }
  ]);
}
