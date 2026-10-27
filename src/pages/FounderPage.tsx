import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Briefcase,
  Building2,
  Sparkles,
  ChevronRight,
  Quote,
  ArrowRight,
  Code2,
  Heart,
  Layers,
  CheckCircle2,
} from 'lucide-react';

const karierList = [
  {
    title: 'IT BAZNAS Republik Indonesia',
    desc: 'Amil BAZNAS RI sejak tahun 2017',
    icon: Building2,
    badge: '2017 - Sekarang',
    highlight: true,
  },
  {
    title: 'Founder Aplikasi Menara Masjid',
    desc: 'Penggagas, arsitek sistem, dan inisiator digitalisasi masjid nasional',
    icon: Sparkles,
    badge: 'Inisiator',
    highlight: true,
  },
  {
    title: 'Dosen Sistem & Teknologi Informasi',
    desc: 'Universitas Darunnajah, mendidik generasi talenta teknologi masa depan',
    icon: GraduationCap,
    badge: 'Akademisi',
    highlight: false,
  },
  {
    title: 'Pengurus Dewan Masjid Indonesia (DMI) Kota Bekasi',
    desc: 'Ketua Bidang Pengembangan Sarana, aktif mengabdi dan berkontribusi',
    icon: Layers,
    badge: 'Menjabat sejak 2020',
    highlight: false,
  },
  {
    title: 'Pemuda Aktif Kemasjidan',
    desc: 'Pelopor gerakan pemuda dalam memakmurkan dan memodernisasi masjid',
    icon: Heart,
    badge: 'Aktivis Masjid',
    highlight: false,
  },
];

const pendidikanList = [
  {
    jenjang: 'S-3',
    jurusan: 'Informatika',
    status: 'Sedang ditempuh / Kandidat Doktor',
    active: true,
  },
  {
    jenjang: 'S-2',
    jurusan: 'Ilmu Komputer',
    status: 'Magister Komputer (M.Kom.)',
    active: false,
  },
  {
    jenjang: 'S-1',
    jurusan: 'Sistem Informasi',
    status: 'Sarjana Komputer (S.Kom.)',
    active: false,
  },
  {
    jenjang: 'D-3',
    jurusan: 'Manajemen Informatika',
    status: 'Ahli Madya Komputer (A.Md.Kom.)',
    active: false,
  },
];

const timeline = [
  {
    date: '23 Februari 2020',
    title: 'Langkah Pertama — Amal Jariyah',
    description:
      'Perjalanan bermula dari perenungan mendalam seorang Romadhona yang kagum atas keikhlasan para pewakaf tanah dan harta untuk rumah Allah. Karena keterbatasan finansial, beliau bertekad mewakafkan keahlian perangkat lunak sebagai amal jariyah. Aplikasi pertama dirancang dengan nama Aplikasi Masjid dan melayani 1 masjid perintis.',
  },
  {
    date: '2020 — 2023',
    title: 'Istiqomah & Transformasi Menara Masjid',
    description:
      'Melalui konsistensi (istiqomah) dan semangat Lillahita\'ala, sistem terus dikembangkan dan disempurnakan hingga bertransformasi menjadi Aplikasi Menara Masjid—platform digital nasional yang memfasilitasi setiap masjid di Indonesia memiliki website mandiri dan manajemen modern yang akuntabel.',
  },
  {
    date: 'Fase Reborn',
    title: 'Redesign Reborn & Sinergi Kampus',
    description:
      'Aplikasi mengalami pembaruan dan arsitektur ulang (redesign reborn) menggunakan bahasa pemrograman modern oleh Akbar Pangestu, mahasiswa Program Studi Sistem dan Teknologi Informasi Universitas Darunnajah, di bawah bimbingan langsung founder.',
  },
];

export default function FounderPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden pt-12 pb-12 bg-gradient-to-b from-[#EAF6E8]/70 via-[#FAFAFA] to-[#FAFAFA]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#767676] mb-6">
            <Link to="/" className="hover:text-[#28A71A] transition-colors">
              Beranda
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#303030] font-medium">Founder</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F9F0] text-[#006844] text-xs sm:text-sm font-semibold border border-[#BDEBD3]">
                <Sparkles size={16} className="text-[#28A71A]" />
                <span>Founder &amp; Inisiator Aplikasi Menara Masjid</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E293B] leading-tight">
                M. Romadhona <span className="text-[#28A71A]">Kusuma</span>
              </h1>

              <p className="text-sm sm:text-base font-semibold text-[#166534]">
                A.Md.Kom., S.Kom., M.Kom.
              </p>

              <p className="text-[#555555] text-base sm:text-lg leading-relaxed">
                Seorang inovator yang berfokus pada solusi teknologi berdampak luas untuk Indonesia dan dunia, mendedikasikan keahlian rekayasa perangkat lunak sebagai amal jariyah bagi umat Islam dan kemakmuran masjid.
              </p>

              {/* Quote Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs relative">
                <Quote size={28} className="text-[#28A71A]/20 absolute top-3 right-3" />
                <p className="text-xs sm:text-sm italic text-[#334155] leading-relaxed mb-2 font-medium">
                  &ldquo;Sebaik-baiknya manusia adalah yang paling bermanfaat untuk orang lain.&rdquo;
                </p>
                <span className="text-xs text-[#64748B] font-semibold block">
                  — HR. Ahmad, Ath-Thabrani (Prinsip Hidup Founder)
                </span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#EAF6E8] text-[#166534] border border-[#BBF7D0]">
                  Logo Design By &copy; Romadhona
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]">
                  Amil BAZNAS RI sejak 2017
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]">
                  Dosen STI Univ. Darunnajah
                </span>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#1C7712] via-[#28A71A] to-[#166534] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center text-white mb-5 backdrop-blur-sm">
                  <GraduationCap size={32} />
                </div>

                <span className="text-xs uppercase tracking-wider text-white/70 font-bold block mb-1">
                  Profil Singkat
                </span>
                <h3 className="text-xl font-bold mb-2">Muhammad Romadhona Kusuma</h3>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6">
                  Praktisi TI, pendidik, dan pegiat kemasjidan yang merintis ekosistem digitalisasi masjid modern berbasis web dan keterbukaan tata kelola keuangan ZISWAF.
                </p>

                <div className="space-y-3 border-t border-white/20 pt-4 text-xs">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-white/70">Mulai Dikembangkan</span>
                    <span className="font-semibold">23 Februari 2020</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-white/70">Afiliasi Lembaga</span>
                    <span className="font-semibold">BAZNAS RI &amp; Univ. Darunnajah</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-white/70">Desain Logo</span>
                    <span className="font-semibold">&copy; Romadhona</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SEJARAH BERDIRINYA APLIKASI */}
      {/* ========================================================= */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8ECEF] shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#28A71A] bg-[#EAF6E8] px-3 py-1 rounded-full inline-block mb-3">
              Kilas Balik Inovasi
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E293B]">
              Sejarah Berdirinya Aplikasi Menara Masjid
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Kisah dedikasi dan perjalanan panjang mewujudkan digitalisasi masjid dari satu rumah ibadah hingga berskala nasional.
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#28A71A]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-[#28A71A] text-white font-bold text-xs flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-[#166534] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-[#1E293B] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#EAEAEA] flex items-center gap-2 text-xs font-medium text-[#28A71A]">
                  <CheckCircle2 size={14} />
                  <span>Fase Tercapai</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* RIWAYAT KARIER & PENDIDIKAN */}
      {/* ========================================================= */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Riwayat Karier & Organisasi */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8ECEF] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] text-[#28A71A] flex items-center justify-center">
                <Briefcase size={20} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#28A71A]">
                  Pengalaman &amp; Pengabdian
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                  Riwayat Karier &amp; Organisasi
                </h2>
              </div>
            </div>

            <div className="space-y-3.5">
              {karierList.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                      item.highlight
                        ? 'bg-[#F0FDF4]/70 border-[#BBF7D0]'
                        : 'bg-[#F8FAFC] border-[#E2E8F0]'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        item.highlight
                          ? 'bg-[#28A71A] text-white'
                          : 'bg-[#E2E8F0] text-[#334155]'
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <h4 className="font-bold text-sm sm:text-base text-[#1E293B]">
                          {item.title}
                        </h4>
                        <span className="text-[11px] font-semibold text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Riwayat Pendidikan */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8ECEF] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6E8] text-[#28A71A] flex items-center justify-center">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#28A71A]">
                    Latar Belakang Akademis
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                    Riwayat Pendidikan
                  </h2>
                </div>
              </div>

              <div className="space-y-3">
                {pendidikanList.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border transition-all ${
                      item.active
                        ? 'bg-[#F0FDF4] border-[#86EFAC]'
                        : 'bg-[#F8FAFC] border-[#E2E8F0]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                          item.active
                            ? 'bg-[#28A71A] text-white'
                            : 'bg-[#E2E8F0] text-[#334155]'
                        }`}
                      >
                        {item.jenjang}
                      </span>
                      {item.active && (
                        <span className="text-[10px] font-semibold text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
                          Sedang Ditempuh
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-sm text-[#1E293B]">
                      {item.jurusan}
                    </h4>
                    <p className="text-xs text-[#64748B] mt-0.5">{item.status}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reborn Contributor Box */}
            <div className="mt-6 pt-5 border-t border-[#EAEAEA] rounded-2xl bg-[#F8FAFC] p-4 border">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#1E293B] mb-1.5">
                <Code2 size={16} className="text-[#28A71A]" />
                <span>Tim Reborn &amp; Redesign Aplikasi</span>
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Aplikasi didesain ulang menggunakan bahasa pemrograman terbaru oleh{' '}
                <strong className="text-[#1E293B]">Akbar Pangestu</strong>, mahasiswa Program Studi Sistem dan Teknologi Informasi Universitas Darunnajah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BOTTOM CTA / NAVIGATION */}
      {/* ========================================================= */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#1C7712] to-[#28A71A] p-6 sm:p-10 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Pelajari Lebih Lanjut Tentang Menara Masjid
            </h3>
            <p className="text-xs sm:text-sm text-white/85 max-w-xl leading-relaxed">
              Ketahui visi, misi, dan landasan hukum perlindungan hak cipta serta ketentuan penggunaan platform.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/tentang"
              className="text-xs sm:text-sm font-semibold bg-white text-[#1C7712] px-4 py-2.5 rounded-full hover:bg-[#F0FDF4] transition-colors"
            >
              Tentang Kami
            </Link>
            <Link
              to="/syarat-ketentuan"
              className="text-xs sm:text-sm font-semibold bg-white/20 text-white px-4 py-2.5 rounded-full hover:bg-white/30 transition-colors inline-flex items-center gap-1.5"
            >
              Syarat &amp; Ketentuan
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
