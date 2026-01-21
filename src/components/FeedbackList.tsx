'use client';
import { useEffect, useState } from 'react';

interface Feedback {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFeedbacks = async () => {
    try {
      const res = await fetch('/api/feedbacks');
      const data = await res.json();
      setFeedbacks(data);
    } catch (error) {
      console.error("Erro ao carregar feedbacks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  if (loading) return <p className="text-gray-400 animate-pulse">Carregando mensagens...</p>;
  
  if (feedbacks.length === 0) return <p className="text-gray-400">Nenhum feedback ainda. Seja o primeiro!</p>;

  return (
    <div className="grid gap-6">
      {feedbacks.map((item) => (
        <div 
          key={item.id} 
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-bold text-gray-800">{item.name}</h4>
            <span className="text-xs text-gray-400">
              {new Date(item.createdAt).toLocaleDateString('pt-BR')}
            </span>
          </div>
          <p className="text-gray-600 leading-relaxed">{item.message}</p>
        </div>
      ))}
    </div>
  );
}