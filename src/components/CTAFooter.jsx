import { Zap } from "lucide-react";

export default function CTAFooter() {
  return (
    <section id="cta" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 p-10 text-white shadow-xl">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold leading-tight">Siap Mempercepat Pertumbuhan Bisnis Anda?</h3>
              <p className="mt-2 max-w-xl text-white/90">
                Bergabunglah dengan ribuan pemilik usaha yang sudah menikmati kemudahan mengelola toko
                dengan kasir all‑in‑one. Daftar sekarang dan nikmati uji coba gratis.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-indigo-700 shadow-md transition hover:bg-indigo-50"
                >
                  <Zap className="mr-2 h-4 w-4" /> Mulai Uji Coba Gratis
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-transparent px-5 py-3 text-white/90 transition hover:bg-white/10"
                >
                  Lihat Fitur Lengkap
                </a>
              </div>
              <p className="mt-3 text-xs text-white/70">Tanpa install rumit • Data aman • Bisa offline</p>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-extrabold">50k+</p>
                    <p className="text-xs text-white/80">Pengguna aktif</p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold">99.9%</p>
                    <p className="text-xs text-white/80">Uptime</p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold">4.9/5</p>
                    <p className="text-xs text-white/80">Rata-rata ulasan</p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-white/70">Dipercaya oleh brand ritel, kafe, restoran, dan grosir di seluruh Indonesia</p>
            </div>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} KasirOne. Semua hak dilindungi.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-gray-700">Fitur</a>
            <a href="#pricing" className="hover:text-gray-700">Harga</a>
            <a href="#" className="hover:text-gray-700">Kebijakan Privasi</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
