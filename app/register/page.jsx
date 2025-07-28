'use client';

import { useState, useTransition } from "react";
import { registerUser } from "./actions";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e) => {
    e.preventDefault();
    startTransition(async () => {
      const message = await registerUser({ email, password });
      setMsg(message);
    });
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        /><br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        /><br />
        <button type="submit" disabled={isPending}>
          {isPending ? "Registering..." : "Register"}
        </button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
