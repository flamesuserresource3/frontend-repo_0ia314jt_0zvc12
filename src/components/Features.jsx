import { CheckCircle, BarChart, Shield, Smartphone, Receipt } from "lucide-react";

const features = [
  {
    icon: Receipt,
    title: "Kasir Super Cepat",
    desc: "Proses transaksi tanpa antri dengan antarmuka yang intuitif dan dukungan barcode/QR.",
  },
  {
    icon: BarChart,
    title: "Laporan Real‑time",
    desc: "Pantau penjualan, margin, dan performa cabang kapan pun, di mana pun.",
  },
  {
    icon: Shield,
    title: "Keamanan Kelas Enterprise",
    desc: "Data terenkripsi, kontrol akses per peran, dan audit trail yang lengkap.",
  },
  {
    icon: Smartphone,
    title: "Multi‑Perangkat",
    desc: "Bekerja mulus di tablet, smartphone, dan desktop tanpa instalasi rumit.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            <CheckCircle size={14} /> Fitur Unggulan
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Semua yang Anda Butuhkan untuk Mengelola Bisnis
          </h2>
          <p className="mt-3 text-gray-600">
            Dari POS hingga inventori dan akuntansi — semuanya terhubung dan otomatis.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600">
                <Icon />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
