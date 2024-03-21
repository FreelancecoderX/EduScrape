import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <div className="mb-8 sm:mb-4">
        <Header />
    </div>
    <div className="flex flex-col sm:gap-4 gap-2">
      <Hero />
    </div>
    <div className="mt-4 sm:mt-2">
        <Footer />
      </div>
    </>
  );
}
