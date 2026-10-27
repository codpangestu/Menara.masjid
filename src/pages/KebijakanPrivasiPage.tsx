import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Lock,
  FileText,
  Scale,
  EyeOff,
  UserCheck,
  AlertTriangle,
  HelpCircle,
  Building2,
  Mail,
  Phone,
  ArrowRight,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

const sections = [
  {
    id: 'pendahuluan',
    title: '1. Pendahuluan & Komitmen Privasi',
    icon: ShieldCheck,
  },
  {
    id: 'ruang-lingkup',
    title: '2. Ruang Lingkup & Pengikatan Ketentuan',
    icon: FileText,
  },
  {
    id: 'kewajiban-pengelola',
    title: '3. Kewajiban Pengelola Menjaga Data',
    icon: Lock,
  },
  {
    id: 'tanggung-jawab',
    title: '4. Batasan Tanggung Jawab Pengelola',
    icon: UserCheck,
  },
  {
    id: 'pertukaran-data',
    title: '5. Pertukaran Data Antar Pengguna',
    icon: EyeOff,
  },
  {
    id: 'perubahan-kebijakan',
    title: '6. Hak Perubahan Ketentuan',
    icon: Scale,
  },
  {
    id: 'kontak-bantuan',
    title: '7. Bantuan & Kontak BAZNAS',
    icon: HelpCircle,
  },
];

const highlights = [
  {
    icon: Lock,
    title: 'Kerahasiaan Terjaga',
    desc: 'Data pengguna tidak dipublikasikan atau diberikan kepada pihak ketiga tanpa izin tertulis.',
  },
  {
    icon: Scale,
    title: 'Kepatuhan Hukum',
    desc: 'Tunduk pada peraturan perundang-undangan Republik Indonesia dan ketetapan resmi BAZNAS.',
  },
  {
    icon: UserCheck,
    title: 'Tanggung Jawab Jelas',
    desc: 'Pengelola bertanggung jawab atas data resmi yang diserahkan untuk fasilitas & layanan sistem.',
  },
];

export default function KebijakanPrivasiPage() {
  const [activeSection, setActiveSection] = useState('pendahuluan');

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
            <span className="text-[#303030] font-medium">Kebijakan Privasi</span>
          </nav>

          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F9F0] text-[#006844] text-xs sm:text-sm font-semibold mb-4 border border-[#BDEBD3]">
              <ShieldCheck size={16} className="text-[#28A71A]" />
              <span>Kebijakan Resmi Menara Masjid • BAZNAS RI</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E293B] mb-4 leading-tight">
              Kebijakan <span className="text-[#28A71A]">Privasi</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#555555] text-base sm:text-lg leading-relaxed mb-6">
              Pedoman perlindungan data dan privasi pengguna dalam pemanfaatan fasilitas, fitur, jasa, dan layanan platform digital Menara Masjid BAZNAS.
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#767676] pt-4 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#28A71A]" />
                <span>Berlaku untuk seluruh Pengguna Situs</span>
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
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* STICKY SIDEBAR (TOC) */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-4">
              {/* Table of contents card */}
              <div className="bg-white rounded-2xl p-5 border border-[#E8ECEF] shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F1F5F9]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                    Daftar Isi Kebijakan
                  </span>
                  <span className="text-xs font-medium text-[#28A71A] bg-[#EAF6E8] px-2 py-0.5 rounded-full">
                    7 Poin
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

              {/* Related Policy Box */}
              <div className="bg-white rounded-2xl p-5 border border-[#E8ECEF] shadow-sm">
                <div className="flex items-center gap-2.5 text-[#1E293B] font-semibold text-sm mb-2">
                  <FileText size={18} className="text-[#D97706]" />
                  <span>Kebijakan Terkait</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                  Baca ketentuan pembatasan tanggung jawab dan hak kekayaan intelektual platform.
                </p>
                <div className="space-y-2">
                  <Link
                    to="/disclaimer"
                    className="w-full inline-flex items-center justify-between text-xs font-semibold bg-[#FEF3C7] text-[#92400E] px-3.5 py-2.5 rounded-xl hover:bg-[#FDE68A] transition-colors"
                  >
                    <span>Baca Disclaimer Aplikasi</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/syarat-ketentuan"
                    className="w-full inline-flex items-center justify-between text-xs font-semibold bg-[#EAF6E8] text-[#166534] px-3.5 py-2.5 rounded-xl hover:bg-[#DCFCE7] transition-colors"
                  >
                    <span>Syarat &amp; Ketentuan (Hak Cipta)</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Callout Info Box */}
              <div className="bg-gradient-to-br from-[#1C7712] to-[#28A71A] rounded-2xl p-5 text-white shadow-md">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-3">
                  <Building2 size={20} className="text-white" />
                </div>
                <h4 className="font-semibold text-sm mb-1">Pusat Layanan BAZNAS RI</h4>
                <p className="text-xs text-white/85 leading-relaxed mb-4">
                  Perlu penjelasan lebih lanjut mengenai kebijakan data Anda di Menara Masjid?
                </p>
                <div className="space-y-2 text-xs text-white/95">
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-white/80" />
                    <span>0811 8882 1818</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="text-white/80" />
                    <span>baznas@baznas.go.id</span>
                  </div>
                </div>
                <Link
                  to="/kontak"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold bg-white text-[#1C7712] px-3.5 py-2 rounded-xl hover:bg-[#F0FDF4] transition-colors"
                >
                  Hubungi Kontak Resmi
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </aside>

          {/* MAIN ARTICLES CONTENT */}
          <main className="lg:col-span-8 space-y-8">
            {/* Introductory Card */}
            <div
              id="pendahuluan"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Pernyataan Pembuka
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    1. Pendahuluan & Komitmen Privasi
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Terima kasih telah mengakses aplikasi <strong>Menara Masjid</strong> yaitu website{' '}
                  <a
                    href="https://menara.baznas.go.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#28A71A] font-semibold underline hover:text-[#1C7712]"
                  >
                    www.menara.baznas.go.id
                  </a>
                  . Kami sangat menghormati kenyamanan privasi Anda dan berkomitmen melindungi informasi pribadi Anda sebaik-baiknya.
                </p>
                <div className="bg-[#F8FAFC] border-l-4 border-[#28A71A] p-4 rounded-r-xl text-sm text-[#334155]">
                  <p className="font-medium text-[#1E293B] mb-1">
                    Prinsip Perlindungan Privasi Menara Masjid:
                  </p>
                  <p>
                    Setiap data yang dipercayakan kepada pengelola sistem diperlakukan dengan penuh integritas, tata kelola yang aman, serta pemanfaatan yang semata-mata ditujukan untuk kemaslahatan masjid, musholla, UPZ, dan umat.
                  </p>
                </div>
              </div>
            </div>

            {/* Clause 2: Ruang Lingkup */}
            <div
              id="ruang-lingkup"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Ketentuan Mengikat
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    2. Ruang Lingkup & Ketentuan Data Pengguna
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Ketentuan-ketentuan yang ada dalam halaman ini mengatur hal-hal menyangkut data-data para Pengguna Situs yang diberikan oleh para Pengguna Situs kepada Pengelola Situs dalam rangka pemanfaatan fasilitas, fitur, jasa, dan/atau layanan yang ditawarkan oleh Pengelola Situs melalui Situs{' '}
                  <span className="font-semibold text-[#1E293B]">www.menara.baznas.go.id</span>.
                </p>
                <div className="p-4 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E] text-sm flex items-start gap-3">
                  <AlertTriangle size={18} className="text-[#D97706] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block mb-0.5">Sifat Ketentuan:</strong>
                    Ketentuan-ketentuan menyangkut data mengikat seluruh Pengguna Situs tanpa terkecuali untuk tunduk dan patuh atas ketentuan-ketentuan yang telah ditetapkan Pengelola Situs.
                  </div>
                </div>
              </div>
            </div>

            {/* Clause 3: Kewajiban Pengelola (Poin 1.a & 1.b) */}
            <div
              id="kewajiban-pengelola"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0">
                  <Lock size={20} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Kewajiban Pengelola
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    3. Kewajiban Pengelola Menjaga Kerahasiaan Data
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-5">
                Atas data-data yang diberikan oleh para Pengguna Situs kepada Pengelola Situs sebagai pemenuhan syarat atas pemanfaatan fasilitas, fitur, jasa, dan/atau layanan yang ditawarkan oleh Pengelola Situs, maka Pengelola Situs berkewajiban untuk:
              </p>

              <div className="space-y-4">
                {/* 1.a */}
                <div className="p-5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#28A71A]/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#28A71A] text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      a
                    </span>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-[#1E293B] mb-1.5">
                        Menjaga Kerahasiaan Data Non-Publik
                      </h4>
                      <p className="text-sm text-[#475569] leading-relaxed">
                        Menjaga kerahasiaan data-data para Pengguna yang tidak dapat ditampilkan dalam Situs dan/atau diberikan kepada pihak-pihak tertentu atas penggunaan jasa atau layanan Situs selama tidak ada perjanjian tertulis terlebih dahulu kepada Pengguna.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 1.b */}
                <div className="p-5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#28A71A]/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#28A71A] text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      b
                    </span>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-[#1E293B] mb-1.5">
                        Pengecualian Berdasarkan Ketentuan Hukum yang Sah
                      </h4>
                      <p className="text-sm text-[#475569] leading-relaxed">
                        Kerahasiaan data Pengguna yang wajib dijaga oleh Pengelola Situs menjadi tidak berlaku apabila Pengelola Situs dipaksa oleh ketentuan hukum yang berlaku, perintah pengadilan, dan/atau perintah dari aparat/instansi yang berwenang, untuk membuka data-data milik Pengguna tersebut.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clause 4: Batasan Tanggung Jawab (Poin 2) */}
            <div
              id="tanggung-jawab"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0">
                  <UserCheck size={20} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Ketentuan Butir 2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    4. Batasan Tanggung Jawab Atas Data yang Diberikan
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Pengelola Situs hanya bertanggung jawab atas data yang diberikan Pengguna Situs kepada Pengelola Situs sebagaimana yang telah ditentukan pada ketentuan sebelumnya.
                </p>
                <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-[#166534] text-sm">
                  Pengguna bertanggung jawab untuk memastikan bahwa informasi dan data yang diserahkan secara resmi melalui formulir pendaftaran, pengajuan masjid, atau pengelolaan kas UPZ adalah akurat, sah, dan dapat dipertanggungjawabkan.
                </div>
              </div>
            </div>

            {/* Clause 5: Pertukaran Data Antar Pengguna (Poin 3) */}
            <div
              id="pertukaran-data"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0">
                  <EyeOff size={20} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Ketentuan Butir 3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    5. Pertukaran Data Mandiri Antar Pengguna
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Pengelola Situs tidak bertanggung jawab atas pemberian atau pertukaran data yang dilakukan sendiri antar Pengguna Situs.
                </p>
                <p className="text-xs sm:text-sm text-[#64748B] italic">
                  *Segala bentuk komunikasi, transaksi langsung, atau penyerahan informasi pribadi antar sesama pengguna di luar jalur resmi sistem yang diawasi oleh pengelola menjadi tanggung jawab pribadi masing-masing pihak.
                </p>
              </div>
            </div>

            {/* Clause 6: Hak Perubahan Ketentuan (Poin 4) */}
            <div
              id="perubahan-kebijakan"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0">
                  <Scale size={20} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Ketentuan Butir 4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    6. Hak Perubahan Ketentuan Kebijakan
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Pengelola berhak untuk mengubah ketentuan menyangkut data-data para Pengguna Situs tanpa pemberitahuan terlebih dahulu dengan tanpa mengabaikan hak para Pengguna Situs untuk dijaga kerahasiaan datanya sebagaimana yang telah ditentukan dalam butir sebelumnya.
                </p>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Perubahan akan dipublikasikan secara langsung pada laman Kebijakan Privasi ini agar seluruh pengguna dapat senantiasa memantau tata kelola perlindungan data yang terbaru.
                </p>
              </div>
            </div>

            {/* Clause 7: Bantuan & Kontak BAZNAS */}
            <div
              id="kontak-bantuan"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECEF] shadow-xs scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] flex-shrink-0">
                  <HelpCircle size={20} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-[#28A71A] tracking-wider">
                    Informasi Kontak
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    7. Pertanyaan & Layanan Informasi
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                Apabila Anda memiliki pertanyaan, klarifikasi, atau memerlukan informasi lebih lanjut mengenai Kebijakan Privasi ini, silakan menghubungi kami melalui saluran resmi berikut:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="flex items-center gap-2.5 text-[#28A71A] font-semibold text-sm mb-1">
                    <Building2 size={16} />
                    <span>Badan Amil Zakat Nasional (BAZNAS)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Jl. Matraman Raya No.134, Kebon Manggis, Kec. Matraman, Kota Jakarta Timur, DKI Jakarta 13150
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="flex items-center gap-2.5 text-[#28A71A] font-semibold text-sm mb-1">
                    <Mail size={16} />
                    <span>Layanan Kontak & Email</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Email: <span className="font-medium text-[#1E293B]">baznas@baznas.go.id</span><br />
                    Call Center / WhatsApp: <span className="font-medium text-[#1E293B]">0811 8882 1818</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between gap-4">
                <Link
                  to="/tentang"
                  className="text-xs sm:text-sm text-[#28A71A] hover:underline font-semibold inline-flex items-center gap-1.5"
                >
                  Tentang Menara Masjid
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
