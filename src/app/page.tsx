import Image from "next/image";
import FeedbackForm from "@/components/FeedbackForm";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <FeedbackForm />
    </div>  
  );
}
