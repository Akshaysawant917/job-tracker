"use server";

import { connectToDb } from "@/lib/db";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function loginUser({ email, password }) {
  try {
    await connectToDb();

    const user = await User.findOne({ email });
    if (!user) return { message: "User not found" };

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return { message: "Invalid credentials" };

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return { token, message: "Login successful" };
  } catch (error) {
    console.error("Login error:", error);
    return { message: "Server error" };
  }
}
