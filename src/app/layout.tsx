import {ToastContainer} from 'react-toastify'
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}> 
        {children}
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
