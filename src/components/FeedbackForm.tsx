"use client";
import { useState } from "react";
import {toast} from 'react-toastify'

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)

    const res = await fetch("/api/feedbacks", {
      method: "POST",
      body: JSON.stringify({ name: name, message: message }),
      headers: { "Content-Type": "application/json" },
    });
    
    if(res.ok){
    const duration = 4000;

    toast.success('Enviado com sucesso!', { duration });

    setTimeout(() => {
      window.location.reload();
    }, duration);

    setName('')
    setMessage('')
    }else{
      toast.error("Erro ao enviar Feedback")
    }
    setLoading(false)
  };
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 transition-all hover:shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-5">
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Como te chamam?"
          className="w-full bg-gray-200 p-4 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-700"
        />
        <textarea 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mande sua mensagem..."
          rows={4}
          className="w-full bg-gray-200 p-4 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-700 resize-none"
        />
        <button 
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all active:scale-95 disabled:opacity-50"
        >
          {loading ? 'Enviando...' : 'Enviar Feedback'}
        </button>
        <footer className="mt-auto pt-8 text-xs text-gray-300">
          Desenvolvido por Daniel Luiz (DL)
        </footer>
      </form>
    </div>
  );
}
