import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="leading-normal tracking-normal m-0 p-0 border-box top-0 min-h-screen items-center">
      <div className="w-full items-center font-mono text-sm">
        <div className="mb-4 sm:mb-8">
          <Header />
        </div>
        <div className="flex flex-col sm:gap-2 gap-4">
          <Hero />
        </div>
        <div className="mt-2 bottom-0 sm:mt-4">
          <Footer />
        </div>
      </div>
    </main>
  );
}
