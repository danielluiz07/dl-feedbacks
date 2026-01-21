import FeedbackForm from "@/components/FeedbackForm";
import FeedbackList from "@/components/FeedbackList";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">

      <aside className="w-full md:w-96 bg-white p-8 md:h-screen md:sticky md:top-0 border-r border-gray-200 flex flex-col justify-center">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-black text-blue-600 tracking-tight">dl-feedbacks</h1>
          <p className="text-gray-400 mt-2 font-medium">Deixe aqui seu feedback</p>
        </div>
        
        <FeedbackForm />
      </aside>

      <main className="flex-1 p-8 md:p-16">
        <header className="mb-12">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            Mensagens Recentes
            <span className="bg-blue-100 text-blue-600 text-xs py-1 px-3 rounded-full">Novo</span>
          </h2>
        </header>

        <div className="grid gap-6">
           <FeedbackList />
        </div>
      </main>

    </div>
  )
}
