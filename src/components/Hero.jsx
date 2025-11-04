import { Rocket, CreditCard } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Rocket size={14} />
              Peluncuran Fitur Baru: Multi-Outlet & Mode Offline
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Kasir All‑in‑One untuk <span className="text-indigo-600">Bisnis Modern</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Kelola penjualan, stok, cabang, dan laporan keuangan dari satu aplikasi
              yang cepat, aman, dan selalu sinkron di semua perangkat.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
              >
                Coba Gratis 14 Hari
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-700 transition hover:bg-gray-50"
              >
                <CreditCard className="mr-2 h-4 w-4" /> Lihat Cara Kerja
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Tidak perlu kartu kredit • Batalkan kapan saja
            </p>
          </div>

          <div className="relative">
            <div className="mx-auto w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-xl">
              <div className="aspect-[9/16] w-full rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-3">
                <div className="flex h-full w-full items-end justify-between rounded-lg bg-white/90 p-4 backdrop-blur">
                  <div>
                    <p className="text-xs text-gray-500">Hari ini</p>
                    <p className="text-2xl font-semibold text-gray-900">Rp 3.450.000</p>
                    <p className="text-xs text-emerald-600">+18% dari kemarin</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Transaksi</p>
                    <p className="text-2xl font-semibold text-gray-900">127</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg border border-gray-200 p-3">
                  <p className="text-xs text-gray-500">Stok Hampir Habis</p>
                  <p className="text-sm font-semibold text-gray-900">6 produk</p>
                </div>
                <div className="rounded-lg border border-gray-200 p-3">
                  <p className="text-xs text-gray-500">Pelanggan Baru</p>
                  <p className="text-sm font-semibold text-gray-900">32</p>
                </div>
                <div className="rounded-lg border border-gray-200 p-3">
                  <p className="text-xs text-gray-500">Outlet Aktif</p>
                  <p className="text-sm font-semibold text-gray-900">4</p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -left-10 -top-10 -z-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
