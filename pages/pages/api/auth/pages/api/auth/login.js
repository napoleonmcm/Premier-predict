import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { dbPromise } from "../../../lib/db";

export default async function handler(req, res) {
  const { email, password } = req.body;
  const db = await dbPromise;

  const user = await db.get(
    "SELECT * FROM users WHERE email = ?",
    email
  );

  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ error: "Invalid password" });
  }

  const token = jwt.sign({ id: user.id }, "secret");

  res.json({ token });
}
