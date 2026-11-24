import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Custom App component wrapping all pages with persistent Navbar and Footer
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar />
      <main className="grow max-w-5xl w-full mx-auto px-4 py-8">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
