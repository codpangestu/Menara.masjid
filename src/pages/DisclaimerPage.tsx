import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  Scale,
  ShieldAlert,
  FileText,
  ExternalLink,
  ChevronRight,
  ServerOff,
  UserCheck,
  Copyright,
  Building2,
  Phone,
  Mail,
  ArrowRight,
  Info,
} from 'lucide-react';

const sections = [
  { id: 'pengenalan', title: '1. Pengenalan', icon: FileText },
  { id: 'tujuan-aplikasi', title: '2. Tujuan Aplikasi', icon: Info },
  { id: 'tanggung-jawab', title: '3. Tanggung Jawab Pengguna', icon: UserCheck },
  { id: 'ketersediaan', title: '4. Ketersediaan Aplikasi', icon: ServerOff },
  { id: 'tautan-eksternal', title: '5. Tautan Eksternal', icon: ExternalLink },
  { id: 'perubahan-ketentuan', title: '6. Perubahan Ketentuan', icon: Scale },
  { id: 'haki', title: '7. Hak Kekayaan Intelektual', icon: Copyright },
  { id: 'hukum-berlaku', title: '8. Hukum yang Berlaku', icon: ShieldAlert },
];

const highlights = [
  {
    icon: AlertTriangle,
    title: 'Pembatasan Tanggung Jawab',
    desc: 'Penggunaan informasi dan layanan platform menjadi tanggung jawab penuh masing-masing pengguna.',
  },
  {
    icon: Copyright,
    title: 'Hak Kekayaan Intelektual',
    desc: 'Dilindungi undang-undang hak cipta dan merek. Dilarang mendistribusikan tanpa izin tertulis.',
  },
  {
    icon: Scale,
    title: 'Kepatuhan Hukum',
    desc: 'Tunduk pada yurisdiksi dan hukum Republik Indonesia dengan penyelesaian musyawarah.',
  },
];

export default function DisclaimerPage() {
  const [activeSection, setActiveSection] = useState('pengenalan');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden pt-12 pb-10 bg-gradient-to-b from-[#FFFBEB]/60 via-[#FAFAFA] to-[#FAFAFA]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#767676] mb-6">
            <Link to="/" className="hover:text-[#28A71A] transition-colors">
              Beranda
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#303030] font-medium">Disclaimer</span>
          </nav>

          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] text-[#92400E] text-xs sm:text-sm font-semibold mb-4 border border-[#FDE68A]">
              <AlertTriangle size={16} className="text-[#D97706]" />
              <span>Pernyataan Penyangkalan Resmi • Menara Masjid</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E293B] mb-4 leading-tight">
              Disclaimer <span className="text-[#28A71A]">Aplikasi</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#555555] text-base sm:text-lg leading-relaxed mb-6">
              Ketentuan dan pernyataan pelepasan tanggung jawab hukum dalam pengaksesan dan pemanfaatan sistem informasi serta layanan website Menara Masjid BAZNAS.
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#767676] pt-4 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                <span>Wajib dipahami oleh setiap pengunjung & pengguna</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 size={15} className="text-[#28A71A]" />
                <span>Badan Amil Zakat Nasional (BAZNAS RI)</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#28A71A] font-medium">
                <span>Domain resmi:</span>
                <a
                  href="https://menara.baznas.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#1C7712] inline-flex items-center gap-1"
                >
                  menara.baznas.go.id
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HIGHLIGHT CARDS */}
      {/* ========================================================= */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 shadow-sm border border-[#E2E8F0] hover:border-[#D97706]/40 hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FEF3C7] flex items-center justify-center flex-shrink-0 text-[#D97706]">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base text-[#1E293B] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* MAIN CONTENT AREA WITH SIDEBAR */}
      {/* ========================================================= */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* STICKY SIDEBAR (TOC) */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-4">
              {/* Table of contents card */}
              <div className="bg-white rounded-2xl p-5 border border-[#E8ECEF] shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F1F5F9]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                    Daftar Ketentuan
                  </span>
                  <span className="text-xs font-medium text-[#D97706] bg-[#FEF3C7] px-2 py-0.5 rounded-full">
                    8 Pasal
                  </span>
                </div>

                <nav className="space-y-1">
                  {sections.map((sec) => {
                    const Icon = sec.icon;
                    const isActive = activeSection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-200 ${
                          isActive
                            ? 'bg-[#FEF3C7] text-[#92400E] font-semibold shadow-xs'
                            : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#1E293B]'
                        }`}
                      >
                        <Icon
                          size={16}
                          className={`flex-shrink-0 ${
                            isActive ? 'text-[#D97706]' : 'text-[#94A3B8]'
                          }`}
                        />
                        <span className="truncate">{sec.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Legal Notice Box */}
              <div className="bg-white rounded-2xl p-5 border border-[#E8ECEF] shadow-sm">
                <div className="flex items-center gap-2.5 text-[#1E293B] font-semibold text-sm mb-2">
                  <Info size={18} className="text-[#28A71A]" />
                  <span>Kebijakan Terkait</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                  Pastikan Anda juga membaca pedoman perlindungan data dan privasi pada platform kami.
                </p>
                <div className="space-y-2">
                  <Link
                    to="/kebijakan-privasi"
                    className="w-full inline-flex items-center justify-between text-xs font-semibold bg-[#EAF6E8] text-[#1C7712] px-3.5 py-2.5 rounded-xl hover:bg-[#D7F0D3] transition-colors"
                  >
                    <span>Baca Kebijakan Privasi</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/syarat-ketentuan"
                    className="w-full inline-flex items-center justify-between text-xs font-semibold bg-[#F8FAFC] text-[#334155] px-3.5 py-2.5 rounded-xl hover:bg-[#E2E8F0] transition-colors"
                  >
                    <span>Syarat &amp; Ketentuan (Hak Cipta)</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Callout Info Box */}
              <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] rounded-2xl p-5 text-white shadow-md">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                  <Building2 size={20} className="text-white" />
                </div>
                <h4 className="font-semibold text-sm mb-1">Sekretariat BAZNAS RI</h4>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  Pertanyaan resmi seputar legalitas, kemitraan, atau tata kelola sistem MENARA:
                </p>
                <div className="space-y-2 text-xs text-white/90">
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-white/70" />
                    <span>0811 8882 1818</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="text-white/70" />
                    <span>baznas@baznas.go.id</span>
                  </div>
                </div>
                <Link
                  to="/kontak"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold bg-[#28A71A] text-white px-3.5 py-2 rounded-xl hover:bg-[#1C7712] transition-colors"
                >
                  Halaman Kontak
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </aside>

          {/* MAIN ARTICLES CONTENT */}
          <main className="lg:col-span-8 space-y-6">
            {/* 1. Pengenalan */}
            <div
              id="pengenalan"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] flex items-center justify-center text-[#D97706] flex-shrink-0 font-bold text-sm">
                  1
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#D97706] tracking-wider">
                    Ketentuan Pembuka
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    1. Pengenalan
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Halaman ini memuat disclaimer yang mengatur penggunaan aplikasi berbasis website yang disediakan oleh kami melalui situs resmi{' '}
                  <span className="font-semibold text-[#1E293B]">www.menara.baznas.go.id</span>.
                </p>
                <div className="p-4 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E] text-sm flex items-start gap-3">
                  <AlertTriangle size={18} className="text-[#D97706] flex-shrink-0 mt-0.5" />
                  <div>
                    Dengan mengakses dan menggunakan aplikasi ini, Anda dianggap telah membaca, memahami, dan menyetujui semua ketentuan dalam disclaimer ini. Jika Anda tidak setuju dengan ketentuan ini, diharapkan untuk tidak melanjutkan penggunaan aplikasi ini.
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Tujuan Aplikasi */}
            <div
              id="tujuan-aplikasi"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0 font-bold text-sm">
                  2
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Fungsi & Layanan
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    2. Tujuan Aplikasi
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Aplikasi ini disediakan untuk memberikan informasi, layanan, atau fungsi khusus kepada pengguna dalam mendukung digitalisasi masjid, musholla, UPZ, dan umat Islam.
                </p>
                <div className="bg-[#F8FAFC] border-l-4 border-[#28A71A] p-4 rounded-r-xl text-sm text-[#334155]">
                  Meskipun kami berupaya menyajikan informasi yang akurat dan up-to-date, kami tidak memberikan jaminan atas keakuratan, kelengkapan, atau keandalan informasi yang terkandung dalam aplikasi ini. Pengguna bertanggung jawab sepenuhnya atas penggunaan informasi yang ditemukan dalam aplikasi ini.
                </div>
              </div>
            </div>

            {/* 3. Tanggung Jawab Pengguna */}
            <div
              id="tanggung-jawab"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] flex items-center justify-center text-[#D97706] flex-shrink-0 font-bold text-sm">
                  3
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#D97706] tracking-wider">
                    Beban Tanggung Jawab
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    3. Tanggung Jawab Pengguna
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Penggunaan aplikasi ini sepenuhnya menjadi tanggung jawab pengguna.
                </p>
                <div className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Kami tidak bertanggung jawab atas kerugian, kerusakan, atau tuntutan yang timbul dari penggunaan aplikasi ini, termasuk namun tidak terbatas pada kesalahan, kehilangan data, gangguan, atau kerugian finansial yang mungkin timbul.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Ketersediaan Aplikasi */}
            <div
              id="ketersediaan"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0 font-bold text-sm">
                  4
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Sistem & Pemeliharaan
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    4. Ketersediaan Aplikasi
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Kami berupaya menjaga ketersediaan aplikasi ini sebaik mungkin. Namun, kami tidak memberikan jaminan bahwa aplikasi ini akan selalu tersedia tanpa gangguan atau kesalahan.
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Kami berhak untuk melakukan pemeliharaan, perbaikan, atau penghentian sementara atau permanen pada aplikasi ini tanpa pemberitahuan sebelumnya.
                </p>
              </div>
            </div>

            {/* 5. Tautan Eksternal */}
            <div
              id="tautan-eksternal"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] flex items-center justify-center text-[#D97706] flex-shrink-0 font-bold text-sm">
                  5
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#D97706] tracking-wider">
                    Pihak Ketiga
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    5. Tautan Eksternal
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Aplikasi ini mungkin menyediakan tautan ke situs web eksternal yang tidak dikendalikan atau dioperasikan oleh kami.
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Kami tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik lainnya yang ada di situs web eksternal tersebut. Penggunaan tautan eksternal dilakukan atas risiko pengguna sendiri.
                </p>
              </div>
            </div>

            {/* 6. Perubahan Ketentuan */}
            <div
              id="perubahan-ketentuan"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0 font-bold text-sm">
                  6
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Pembaruan Kebijakan
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    6. Perubahan Ketentuan
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Kami berhak untuk mengubah atau memperbarui ketentuan dalam disclaimer ini tanpa pemberitahuan sebelumnya.
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Disarankan bagi pengguna untuk secara berkala memeriksa halaman ini guna memahami ketentuan terbaru yang berlaku.
                </p>
              </div>
            </div>

            {/* 7. Hak Kekayaan Intelektual */}
            <div
              id="haki"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] flex items-center justify-center text-[#D97706] flex-shrink-0 font-bold text-sm">
                  7
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#D97706] tracking-wider">
                    HAKI & Hak Cipta
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    7. Hak Kekayaan Intelektual
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Aplikasi ini dilindungi oleh hak kekayaan intelektual, termasuk namun tidak terbatas pada hak cipta, merek dagang, atau paten.
                </p>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#334155]">
                  Pengguna tidak diizinkan untuk menggunakan, mendistribusikan, atau memodifikasi konten aplikasi ini tanpa izin tertulis dari pemilik hak.
                </div>
              </div>
            </div>

            {/* 8. Hukum yang Berlaku */}
            <div
              id="hukum-berlaku"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0 font-bold text-sm">
                  8
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Yurisdiksi Hukum
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    8. Hukum yang Berlaku
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Penggunaan aplikasi ini tunduk pada hukum yang berlaku di wilayah Negara Kesatuan Republik Indonesia. Segala sengketa atau perselisihan yang timbul terkait dengan penggunaan aplikasi ini akan diselesaikan secara damai dan bila perlu dapat dirujuk ke yurisdiksi yang berwenang.
                </p>
              </div>
            </div>

            {/* Penutup & Catatan Nasihat Hukum */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#FFFBEB] to-[#FEF3C7]/40 border border-[#FDE68A]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center flex-shrink-0">
                  <ShieldAlert size={22} />
                </div>
                <div className="space-y-2 text-sm text-[#78350F] leading-relaxed">
                  <h4 className="font-bold text-base text-[#92400E]">
                    Catatan Penting Penasihat Hukum
                  </h4>
                  <p>
                    Mohon dicatat bahwa disclaimer ini hanya bersifat informatif dan tidak menggantikan nasihat hukum yang profesional. Jika Anda memiliki pertanyaan atau kekhawatiran terkait penggunaan aplikasi ini, disarankan untuk mengonsultasikan dengan ahli hukum sebelum mengambil tindakan.
                  </p>
                  <p className="font-semibold pt-2 text-[#92400E]">
                    Terima kasih atas pengertian dan kerjasamanya.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#FDE68A] flex flex-wrap items-center justify-between gap-4">
                <Link
                  to="/kebijakan-privasi"
                  className="text-xs sm:text-sm text-[#28A71A] hover:underline font-semibold inline-flex items-center gap-1.5"
                >
                  Lihat Kebijakan Privasi
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/"
                  className="btn-primary-green text-xs sm:text-sm"
                >
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
