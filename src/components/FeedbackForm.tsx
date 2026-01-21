"use client";

import { useState } from "react";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/feedbacks", {
      method: "POST",
      body: JSON.stringify({ name, message }),
      headers: { "Content-Type": "application/json" },
    });
    setName("");
    setMessage("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 bg-gray-600 rounded-lg"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Seu nome"
        className="p-2 border rounded"
        required
      />
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Deixe seu Feedback"
        className="p-2 border rounded"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Enviar Feedback
      </button>
    </form>
  );
}
