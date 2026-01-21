import bcrypt from "bcryptjs";
import { dbPromise } from "../../../lib/db";

export default async function handler(req, res) {
  const { email, password } = req.body;
  const db = await dbPromise;

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.run(
    "INSERT INTO users (email, password) VALUES (?, ?)",
    email,
    hashedPassword
  );

  res.json({ success: true });
}
