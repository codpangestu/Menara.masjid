import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Copyright,
  Users,
  Code2,
  GraduationCap,
  Building2,
  FileText,
  AlertTriangle,
  ChevronRight,
  Mail,
  Phone,
  ArrowRight,
  Lock,
  RefreshCw,
  Layers,
  Scale,
  School,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  Home,
} from 'lucide-react';

const sections = [
  { id: 'identitas-atribusi', title: '1. Identitas & Atribusi Pengembangan', icon: Users },
  { id: 'ruang-lingkup-haki', title: '2. Ruang Lingkup Hak Cipta', icon: Copyright },
  { id: 'tujuan-penggunaan', title: '3. Tujuan & Ruang Lingkup Penggunaan', icon: Layers },
  { id: 'ketentuan-penggunaan', title: '4. Ketentuan Penggunaan', icon: FileText },
  { id: 'data-keamanan', title: '5. Data, Privasi & Keamanan Informasi', icon: Lock },
  { id: 'pembaruan-kolaborasi', title: '6. Pengembangan & Kolaborasi', icon: RefreshCw },
  { id: 'batasan-tanggung-jawab', title: '7. Batasan Tanggung Jawab', icon: AlertTriangle },
  { id: 'lisensi-pihak-ketiga', title: '8. Lisensi & Komponen Pihak Ketiga', icon: Code2 },
  { id: 'perubahan-ketentuan', title: '9. Perubahan Ketentuan', icon: Scale },
  { id: 'kontak-izin', title: '10. Kontak & Permohonan Izin', icon: HelpCircle },
  { id: 'informasi-pengembangan', title: '11. Informasi Pengembangan', icon: Sparkles },
];

const highlights = [
  {
    icon: GraduationCap,
    title: 'Sinergi Akademisi & Praktisi',
    desc: 'Kolaborasi riset dan teknologi antara dosen dan mahasiswa Program Studi STI Universitas Darunnajah bersama BAZNAS RI.',
  },
  {
    icon: Copyright,
    title: 'Perlindungan Hak Cipta',
    desc: 'Konsep, arsitektur, UI/UX, dan kode sumber dilindungi undang-undang hak cipta dan peraturan kekayaan intelektual.',
  },
  {
    icon: Layers,
    title: 'Multi-Platform Terpadu',
    desc: 'Mencakup kesinambungan inovasi digital untuk Menara Masjid, UPZ Desa, dan UPZ Sekolah.',
  },
];

export default function SyaratKetentuanPage() {
  const [activeSection, setActiveSection] = useState('identitas-atribusi');

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
      <section className="relative overflow-hidden pt-12 pb-10 bg-gradient-to-b from-[#EAF6E8]/70 via-[#FAFAFA] to-[#FAFAFA]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#767676] mb-6">
            <Link to="/" className="hover:text-[#28A71A] transition-colors">
              Beranda
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#303030] font-medium">Syarat & Ketentuan</span>
          </nav>

          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F9F0] text-[#006844] text-xs sm:text-sm font-semibold mb-4 border border-[#BDEBD3]">
              <Scale size={16} className="text-[#28A71A]" />
              <span>Ketentuan Resmi • Hak Cipta & Ketentuan Penggunaan</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E293B] mb-4 leading-tight">
              Hak Cipta & <span className="text-[#28A71A]">Ketentuan Penggunaan</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#555555] text-base sm:text-lg leading-relaxed mb-6">
              Halaman ini memuat informasi mengenai hak cipta, atribusi pengembangan, ketentuan penggunaan, perlindungan data, serta tanggung jawab pengguna terhadap platform digital yang dikembangkan untuk mendukung digitalisasi tata kelola kelembagaan dan filantropi Islam.
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#767676] pt-4 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#28A71A]" />
                <span>&copy; 2026 — Hak Cipta Dilindungi Sesuai Ketentuan yang Berlaku</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={15} className="text-[#28A71A]" />
                <span>Universitas Darunnajah &amp; BAZNAS RI</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#28A71A] font-medium">
                <Layers size={14} />
                <span>Menara Masjid | UPZ Desa | UPZ Sekolah</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HIGHLIGHT CARDS (Clean spacing, no overlapping) */}
      {/* ========================================================= */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 shadow-sm border border-[#E2E8F0] hover:border-[#28A71A]/40 hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EAF6E8] flex items-center justify-center flex-shrink-0 text-[#28A71A]">
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
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                  <span className="text-xs font-medium text-[#28A71A] bg-[#EAF6E8] px-2 py-0.5 rounded-full">
                    11 Poin
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
                            ? 'bg-[#EAF6E8] text-[#1C7712] font-semibold shadow-xs'
                            : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#1E293B]'
                        }`}
                      >
                        <Icon
                          size={16}
                          className={`flex-shrink-0 ${
                            isActive ? 'text-[#28A71A]' : 'text-[#94A3B8]'
                          }`}
                        />
                        <span className="truncate">{sec.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Related Policies Box */}
              <div className="bg-white rounded-2xl p-5 border border-[#E8ECEF] shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-[#1E293B] font-semibold text-sm">
                  <FileText size={17} className="text-[#28A71A]" />
                  <span>Kebijakan Terkait</span>
                </div>
                <div className="space-y-2">
                  <Link
                    to="/kebijakan-privasi"
                    className="w-full flex items-center justify-between text-xs font-medium bg-[#F8FAFC] text-[#334155] p-3 rounded-xl hover:bg-[#EAF6E8] hover:text-[#1C7712] transition-colors"
                  >
                    <span>Kebijakan Privasi</span>
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    to="/disclaimer"
                    className="w-full flex items-center justify-between text-xs font-medium bg-[#F8FAFC] text-[#334155] p-3 rounded-xl hover:bg-[#FEF3C7] hover:text-[#92400E] transition-colors"
                  >
                    <span>Disclaimer Aplikasi</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Callout Box */}
              <div className="bg-gradient-to-br from-[#1C7712] to-[#28A71A] rounded-2xl p-5 text-white shadow-md">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-3">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <h4 className="font-semibold text-sm mb-1">Kolaborasi &amp; Riset</h4>
                <p className="text-xs text-white/90 leading-relaxed mb-4">
                  Inisiatif pengembangan teknologi tata kelola filantropi Islam Universitas Darunnajah bersama BAZNAS RI.
                </p>
                <Link
                  to="/kontak"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white text-[#1C7712] px-3.5 py-2 rounded-xl hover:bg-[#F0FDF4] transition-colors"
                >
                  Hubungi Tim Pengembang
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </aside>

          {/* MAIN ARTICLES CONTENT */}
          <main className="lg:col-span-8 space-y-8">
            {/* 1. Identitas dan Atribusi Pengembangan */}
            <div
              id="identitas-atribusi"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0 font-bold text-sm">
                  1
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Atribusi Karya
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    1. Identitas dan Atribusi Pengembangan
                  </h2>
                </div>
              </div>

              {/* Founder Profile Card */}
              <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-[#F0FDF4] via-white to-[#F8FAFC] border border-[#BBF7D0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#28A71A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <GraduationCap size={24} />
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#166534] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full inline-block">
                      Founder &amp; Inisiator
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#1E293B]">
                      M. Romadhona Kusuma, A.Md.Kom., S.Kom., M.Kom.
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      <strong>Profesi:</strong> Dosen Program Studi Sistem dan Teknologi Informasi, <em>Universitas Darunnajah</em>, serta praktisi teknologi informasi dan amil BAZNAS Republik Indonesia.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tim Reborn Cards */}
              <div className="mb-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Tim Reborn, Pengembangan Ulang, dan Penyempurnaan Aplikasi:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E2E8F0] text-[#334155] flex items-center justify-center font-bold text-sm">
                      AP
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm text-[#1E293B]">Akbar Pangestu</h5>
                      <p className="text-xs text-[#64748B]">Mahasiswa Prodi STI, Universitas Darunnajah</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E2E8F0] text-[#334155] flex items-center justify-center font-bold text-sm">
                      AF
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm text-[#1E293B]">Ari Fujiono</h5>
                      <p className="text-xs text-[#64748B]">Mahasiswa Prodi STI, Universitas Darunnajah</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Platform ini merupakan bagian dari inisiatif digital yang digagas oleh <strong>M. Romadhona Kusuma</strong>. Dalam tahap pengembangan selanjutnya, aplikasi mengalami proses reborn, pembaruan, dan penyempurnaan teknologi melalui kolaborasi yang melibatkan <strong>Akbar Pangestu</strong> dan <strong>Ari Fujiono</strong>.
                </p>
                <div className="bg-[#F8FAFC] border-l-4 border-[#28A71A] p-4 rounded-r-xl text-sm text-[#334155]">
                  Kolaborasi ini mencerminkan sinergi antara dosen dan mahasiswa dalam menghadirkan solusi digital yang mendukung digitalisasi tata kelola zakat, infak, dan sedekah (ZIS).
                </div>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Atribusi ini diberikan untuk menjelaskan peran masing-masing pihak dalam perjalanan pengembangan aplikasi. Hak atas konsep, kode sumber, desain, dokumentasi, dan komponen lainnya mengikuti kontribusi masing-masing pihak, perjanjian yang berlaku, serta ketentuan peraturan perundang-undangan.
                </p>
              </div>
            </div>

            {/* 2. Ruang Lingkup Hak Cipta */}
            <div
              id="ruang-lingkup-haki"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0 font-bold text-sm">
                  2
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Kekayaan Intelektual
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    2. Ruang Lingkup Hak Cipta
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-4">
                Hak cipta dapat mencakup berbagai komponen karya dalam platform, antara lain:
              </p>

              <div className="grid grid-cols-1 gap-3 mb-5">
                {[
                  'Konsep, rancangan, dan dokumentasi pengembangan yang merupakan karya orisinal.',
                  'Desain antarmuka pengguna (UI/UX) dan elemen visual yang dibuat secara mandiri.',
                  'Kode sumber, struktur program, modul, dan implementasi perangkat lunak.',
                  'Dokumentasi teknis, panduan penggunaan, dan materi pendukung.',
                  'Konten, ilustrasi, serta elemen digital lainnya sesuai kepemilikan dan lisensinya.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <CheckCircle2 size={17} className="text-[#28A71A] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#334155] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Perlindungan terhadap setiap komponen mengikuti ketentuan hak cipta dan kekayaan intelektual yang berlaku. Komponen pihak ketiga, termasuk pustaka open-source, tetap tunduk pada lisensi masing-masing.
              </p>
            </div>

            {/* 3. Tujuan dan Ruang Lingkup Penggunaan */}
            <div
              id="tujuan-penggunaan"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0 font-bold text-sm">
                  3
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Ekosistem Platform
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    3. Tujuan dan Ruang Lingkup Penggunaan
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-5">
                Platform ini dikembangkan untuk mendukung pemanfaatan teknologi informasi dalam pengelolaan administrasi, pencatatan, dokumentasi, pelaporan, dan penyampaian informasi kelembagaan. Penerapannya dapat disesuaikan dengan kebutuhan masing-masing platform, termasuk:
              </p>

              {/* 3 Platform Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                <div className="p-4 rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#28A71A] text-white flex items-center justify-center font-bold text-xs">
                    <Home size={16} />
                  </div>
                  <h4 className="font-bold text-sm text-[#166534]">a. Aplikasi Menara Masjid</h4>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    Mendukung digitalisasi administrasi dan pengelolaan kegiatan masjid serta Unit Pengumpul Zakat (UPZ) Masjid.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-[#FED7AA] bg-[#FFF7ED] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#EA580C] text-white flex items-center justify-center font-bold text-xs">
                    <Building2 size={16} />
                  </div>
                  <h4 className="font-bold text-sm text-[#9A3412]">b. Aplikasi UPZ Desa</h4>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    Mendukung administrasi, pencatatan, pelaporan, dan penyediaan informasi kelembagaan UPZ di tingkat desa.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-[#BFDBFE] bg-[#EFF6FF] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs">
                    <School size={16} />
                  </div>
                  <h4 className="font-bold text-sm text-[#1E40AF]">c. Aplikasi UPZ Sekolah</h4>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    Mendukung digitalisasi administrasi dan pengelolaan kegiatan UPZ di lingkungan pendidikan.
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#475569] leading-relaxed">
                <p>
                  Ketiga platform tersebut merupakan bagian dari kesinambungan inovasi digital melalui pendekatan replikasi, adaptasi, dan penyempurnaan teknologi sesuai kebutuhan masing-masing lembaga.
                </p>
                <div className="p-3.5 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E]">
                  <strong>Tanggung Jawab Lembaga:</strong> Setiap lembaga pengguna bertanggung jawab memastikan bahwa pemanfaatan aplikasi sesuai dengan kewenangan, kebijakan internal, dan ketentuan yang berlaku.
                </div>
              </div>
            </div>

            {/* 4. Ketentuan Penggunaan */}
            <div
              id="ketentuan-penggunaan"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0 font-bold text-sm">
                  4
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Kepatuhan Pengguna
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    4. Ketentuan Penggunaan
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-4">
                Pengguna wajib menggunakan platform secara bertanggung jawab dan <strong>tidak diperkenankan untuk:</strong>
              </p>

              <div className="space-y-3 mb-5">
                {[
                  'Menggandakan, menjual, mendistribusikan, atau mengomersialkan komponen aplikasi yang dilindungi tanpa izin atau dasar lisensi yang sah.',
                  'Menghapus atau mengubah atribusi pencipta, pemberitahuan hak cipta, maupun informasi lisensi tanpa kewenangan.',
                  'Menggunakan aplikasi untuk penipuan, akses tanpa izin, manipulasi data, atau tindakan yang melanggar hukum.',
                  'Melakukan modifikasi, rekayasa balik (reverse engineering), atau pembuatan karya turunan yang melanggar hak pemilik maupun ketentuan lisensi.',
                  'Menggunakan data yang diperoleh melalui platform untuk tujuan yang tidak sah atau di luar kewenangan.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FEF2F2] border border-[#FEE2E2]">
                    <span className="w-5 h-5 rounded-full bg-[#EF4444] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      ✕
                    </span>
                    <span className="text-xs sm:text-sm text-[#991B1B] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Penggunaan, modifikasi, pengembangan turunan, dan distribusi lebih lanjut harus mengikuti izin pemegang hak dan ketentuan lisensi yang berlaku.
              </p>
            </div>

            {/* 5. Data, Privasi, dan Keamanan Informasi */}
            <div
              id="data-keamanan"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0 font-bold text-sm">
                  5
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Perlindungan Data
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    5. Data, Privasi, dan Keamanan Informasi
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-4">
                Data yang dimasukkan ke dalam platform, termasuk data kelembagaan, transaksi, laporan, dan data pribadi, harus dikelola sesuai ketentuan perlindungan data serta peraturan perundang-undangan yang berlaku.
              </p>

              <p className="text-xs sm:text-sm font-semibold text-[#1E293B] mb-3">
                Pengelola platform dan lembaga pengguna bertanggung jawab sesuai peran dan kewenangannya untuk:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {[
                  'Menjaga kerahasiaan dan keamanan informasi.',
                  'Memastikan penggunaan data memiliki dasar yang sah.',
                  'Membatasi akses berdasarkan kebutuhan dan kewenangan pengguna.',
                  'Menjaga keakuratan pencatatan serta pelaporan.',
                  'Mencegah akses, pengungkapan, atau pemanfaatan data tanpa izin.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <ShieldCheck size={16} className="text-[#28A71A] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-[#334155] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-xs sm:text-sm text-[#166534]">
                Pengguna wajib menjaga kerahasiaan akun dan kredensial akses. Informasi pribadi maupun data transaksi tidak boleh disebarluaskan tanpa dasar yang sah.
              </div>
            </div>

            {/* 6. Pengembangan, Pembaruan, dan Kolaborasi */}
            <div
              id="pembaruan-kolaborasi"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0 font-bold text-sm">
                  6
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Siklus Pembaruan
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    6. Pengembangan, Pembaruan, dan Kolaborasi
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Platform dapat mengalami pembaruan, redesign, reborn, penambahan fitur, perubahan teknologi, dan penyesuaian sistem sesuai kebutuhan operasional.
                </p>
                <p>
                  Pengembangan tersebut dapat melibatkan founder, mahasiswa, pengembang, kontributor, maupun mitra lainnya. Setiap kontribusi perlu diakui secara proporsional, sedangkan kepemilikan atas hasil pengembangan mengikuti perjanjian, kontribusi masing-masing pihak, dan ketentuan hukum yang berlaku.
                </p>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs sm:text-sm text-[#64748B]">
                  Penggunaan kembali kode sumber, desain, modul, atau komponen aplikasi pada platform lain tidak secara otomatis memberikan hak untuk menyalin atau mendistribusikan seluruh komponen tersebut tanpa izin atau dasar lisensi yang sesuai.
                </div>
              </div>
            </div>

            {/* 7. Batasan Tanggung Jawab */}
            <div
              id="batasan-tanggung-jawab"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0 font-bold text-sm">
                  7
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Pelepasan Tanggung Jawab
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    7. Batasan Tanggung Jawab
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Platform disediakan sebagai sarana pendukung digitalisasi kelembagaan. Upaya dilakukan untuk menjaga keandalan, keamanan, dan ketersediaan sistem, tetapi gangguan teknis, kesalahan perangkat lunak, atau kendala layanan tetap mungkin terjadi.
                </p>
                <div className="p-4 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-xs sm:text-sm text-[#92400E]">
                  Pengelola platform tidak serta-merta menggantikan kewenangan lembaga dalam melakukan verifikasi, pengesahan transaksi, validasi laporan, maupun pengambilan keputusan operasional.
                </div>
                <p>
                  Setiap lembaga pengguna tetap bertanggung jawab atas kebenaran data yang dimasukkan, validitas transaksi, pengesahan laporan, dan kepatuhan terhadap prosedur kelembagaan serta ketentuan yang berlaku.
                </p>
                <p className="text-xs sm:text-sm text-[#64748B] italic">
                  *Ketentuan ini tidak menghapus tanggung jawab yang tidak dapat dikesampingkan berdasarkan hukum.
                </p>
              </div>
            </div>

            {/* 8. Lisensi dan Komponen Pihak Ketiga */}
            <div
              id="lisensi-pihak-ketiga"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0 font-bold text-sm">
                  8
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Open Source &amp; Third-Party
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    8. Lisensi dan Komponen Pihak Ketiga
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Sebagian komponen platform dapat menggunakan perangkat lunak, pustaka, layanan, atau sumber daya pihak ketiga. Penggunaannya tunduk pada ketentuan lisensi dan persyaratan layanan masing-masing penyedia.
                </p>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Tidak ada bagian dalam halaman ini yang dimaksudkan untuk mengalihkan hak milik pihak ketiga kepada founder, pengembang, atau pengguna platform.
                </p>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs sm:text-sm text-[#334155]">
                  Permohonan penggunaan ulang, integrasi, modifikasi, maupun distribusi komponen tertentu dapat diajukan kepada pihak yang berwenang sesuai kepemilikan dan lisensinya.
                </div>
              </div>
            </div>

            {/* 9. Perubahan Ketentuan */}
            <div
              id="perubahan-ketentuan"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0 font-bold text-sm">
                  9
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Pembaruan Berkala
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    9. Perubahan Ketentuan
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Ketentuan hak cipta dan penggunaan ini dapat diperbarui apabila terdapat perubahan teknologi, kebijakan pengembangan, kebutuhan kelembagaan, atau peraturan perundang-undangan.
                </p>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Versi terbaru akan dipublikasikan melalui halaman ini. Apabila terdapat perjanjian khusus yang sah antara pihak terkait, ketentuan dalam perjanjian tersebut berlaku sesuai ruang lingkupnya.
                </p>
              </div>
            </div>

            {/* 10. Kontak dan Permohonan Izin */}
            <div
              id="kontak-izin"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0 font-bold text-sm">
                  10
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Layanan Resmi
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    10. Kontak dan Permohonan Izin
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-4">
                Untuk keperluan berikut:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  'Permohonan izin penggunaan atau pengembangan lebih lanjut.',
                  'Kerja sama teknologi dan integrasi sistem.',
                  'Pelaporan dugaan pelanggaran hak cipta.',
                  'Pertanyaan mengenai atribusi dan lisensi.',
                  'Permintaan informasi terkait pengembangan aplikasi.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <CheckCircle2 size={16} className="text-[#28A71A] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-[#334155] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mb-5">
                Silakan menghubungi pengelola resmi melalui kanal kontak yang tersedia pada website atau aplikasi terkait:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="flex items-center gap-2 text-[#28A71A] font-semibold text-sm mb-1">
                    <Building2 size={16} />
                    <span>Lembaga &amp; Kampus</span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Universitas Darunnajah • Prodi STI<br />
                    BAZNAS Republik Indonesia
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="flex items-center gap-2 text-[#28A71A] font-semibold text-sm mb-1">
                    <Mail size={16} />
                    <span>Saluran Kontak</span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Email: <span className="font-medium text-[#1E293B]">baznas@baznas.go.id</span><br />
                    <span className="inline-flex items-center gap-1">
                      <Phone size={12} className="text-[#28A71A]" />
                      Call Center: <span className="font-medium text-[#1E293B]">0811 8882 1818</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* 11. INFORMASI PENGEMBANGAN (Banner Lengkap) */}
            <div
              id="informasi-pengembangan"
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] text-white shadow-xl scroll-mt-28 border border-[#334155]"
            >
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#4ADE80] mb-3">
                <Sparkles size={16} />
                <span>INFORMASI PENGEMBANGAN RESMI</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                Inisiatif Digitalisasi Tata Kelola Filantropi Islam
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6 pt-6 border-t border-white/10 text-xs sm:text-sm">
                <div>
                  <span className="text-white/60 block mb-1 text-xs uppercase font-semibold">
                    Founder &amp; Inisiator
                  </span>
                  <p className="font-bold text-white text-base">
                    M. Romadhona Kusuma, A.Md.Kom., S.Kom., M.Kom.
                  </p>
                  <p className="text-white/75 text-xs mt-1">
                    Dosen Program Studi Sistem dan Teknologi Informasi, Universitas Darunnajah
                  </p>
                </div>

                <div>
                  <span className="text-white/60 block mb-1 text-xs uppercase font-semibold">
                    Tim Reborn &amp; Penyempurnaan Aplikasi
                  </span>
                  <ul className="space-y-1 font-medium text-white/90">
                    <li>• <span className="font-bold text-white">Akbar Pangestu</span> — Mahasiswa Prodi STI, Univ. Darunnajah</li>
                    <li>• <span className="font-bold text-white">Ari Fujiono</span> — Mahasiswa Prodi STI, Univ. Darunnajah</li>
                  </ul>
                </div>

                <div>
                  <span className="text-white/60 block mb-1 text-xs uppercase font-semibold">
                    Platform Terkait
                  </span>
                  <p className="font-semibold text-white">
                    Menara Masjid | UPZ Desa | UPZ Sekolah
                  </p>
                </div>

                <div>
                  <span className="text-white/60 block mb-1 text-xs uppercase font-semibold">
                    Tahun Pengembangan &amp; Hak Cipta
                  </span>
                  <p className="font-semibold text-white">
                    Tahun 2026 • © 2026 Hak Cipta Dilindungi
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs text-white/85 leading-relaxed">
                Dikembangkan dengan semangat kolaborasi, inovasi, dan pemanfaatan teknologi untuk mendukung pelayanan masyarakat serta digitalisasi tata kelola kelembagaan yang transparan dan akuntabel.
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <Link
                  to="/kebijakan-privasi"
                  className="text-xs sm:text-sm text-[#4ADE80] hover:underline font-semibold inline-flex items-center gap-1.5"
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
