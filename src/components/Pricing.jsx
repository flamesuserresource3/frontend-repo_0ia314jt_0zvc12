import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Rp 99.000",
    period: "/bulan",
    highlight: "Cocok untuk UMKM",
    features: [
      "1 Outlet",
      "2 Perangkat",
      "Produk tak terbatas",
      "Laporan dasar",
      "Support via email",
    ],
    cta: "Mulai Gratis",
  },
  {
    name: "Pro",
    price: "Rp 249.000",
    period: "/bulan",
    highlight: "Terpopuler",
    features: [
      "Hingga 5 Outlet",
      "Perangkat tak terbatas",
      "Manajemen stok lanjutan",
      "Laporan real‑time",
      "Peran & izin karyawan",
      "Integrasi e‑wallet & kartu",
    ],
    cta: "Coba 14 Hari",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Hubungi Kami",
    period: "",
    highlight: "Skala besar",
    features: [
      "Outlet tak terbatas",
      "SLA & dukungan prioritas",
      "SSO & kontrol akses granular",
      "Integrasi akuntansi",
      "Pendampingan onboarding",
    ],
    cta: "Minta Demo",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Harga Transparan, Nilai Maksimal
          </h2>
          <p className="mt-3 text-gray-600">
            Mulai dari paket dasar hingga enterprise, pilih sesuai kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${
                plan.popular ? "border-indigo-600 shadow-xl" : "border-gray-200"
              } rounded-2xl border bg-white p-6 transition`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                  <p className="text-xs text-indigo-600">{plan.highlight}</p>
                </div>
                {plan.popular && (
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                    Rekomendasi
                  </span>
                )}
              </div>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-500">{plan.period}</span>
              </div>
              <ul className="mt-5 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-600" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 font-medium transition ${
                  plan.popular
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700"
                    : "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
