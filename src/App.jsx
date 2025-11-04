import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import CTAFooter from "./components/CTAFooter";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600" />
            <span className="text-lg font-semibold">KasirOne</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-gray-600 sm:flex">
            <a href="#features" className="hover:text-gray-900">Fitur</a>
            <a href="#pricing" className="hover:text-gray-900">Harga</a>
            <a href="#cta" className="hover:text-gray-900">Hubungi</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden text-sm text-gray-600 hover:text-gray-900 sm:inline">
              Masuk
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Daftar Gratis
            </a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTAFooter />
      </main>
    </div>
  );
}

export default App;
