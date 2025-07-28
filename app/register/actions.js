'use server';

import { connectToDb } from "@/lib/db";
import User from "@/models/user";

export async function registerUser({ email, password }) {
  try {
    await connectToDb();

    const userExists = await User.findOne({ email });
    if (userExists) return "User already exists";

    const newUser = new User({ email, password });
    await newUser.save();

    return "User registered successfully";
  } catch (error) {
    console.error("Registration error:", error);
    return "Something went wrong, please try again";
  }
}
