import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Globe, Users, Building2 } from 'lucide-react';

// Mock data — will be replaced with API call
const masjidData: Record<string, {
  id: string;
  name: string;
  city: string;
  province: string;
  description: string;
  fullDescription: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  fasilitas: string[];
  pengurus: { nama: string; jabatan: string }[];
}> = {
  'M001': {
    id: 'M001',
    name: 'Masjid Istiqlal',
    city: 'Jakarta Pusat',
    province: 'DKI Jakarta',
    description: 'Masjid nasional terbesar di Indonesia',
    fullDescription: 'Masjid Istiqlal adalah masjid nasional negara Republik Indonesia yang terletak di pusat ibu kota Jakarta. Masjid ini merupakan masjid terbesar di Asia Tenggara dan menjadi simbol toleransi beragama serta kebanggaan bangsa Indonesia.',
    address: 'Jl. Taman Wijaya Kusuma, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat',
    phone: '(021) 3811779',
    email: 'info@istiqlal.or.id',
    website: 'www.istiqlal.or.id',
    fasilitas: ['Taman', 'Parkir Luas', 'Perpustakaan', 'Kantin', 'Ruang Serbaguna', 'Tempat Wudhu Luas', 'Lift'],
    pengurus: [
      { nama: 'Prof. Dr. H. Nasaruddin Umar', jabatan: 'Ketua Umum' },
      { nama: 'Dr. H. KH. Ahmad Muhajir', jabatan: 'Sekretaris' },
      { nama: 'H. M. Yusuf', jabatan: 'Bendahara' },
    ],
  },
  'M002': {
    id: 'M002',
    name: 'Masjid Raya Al-Markaz',
    city: 'Makassar',
    province: 'Sulawesi Selatan',
    description: 'Masjid kebanggaan masyarakat Makassar',
    fullDescription: 'Masjid Raya Al-Markaz Al-Islami Makassar adalah salah satu masjid terbesar dan termegah di kawasan Indonesia Timur.',
    address: 'Jl. Masjid Raya No. 1, Makassar',
    phone: '(0411) 123456',
    email: 'info@almarkaz.or.id',
    website: 'www.almarkaz.or.id',
    fasilitas: ['Taman', 'Parkir Luas', 'Perpustakaan', 'Kantin', 'Ruang Serbaguna', 'Tempat Wudhu Luas'],
    pengurus: [
      { nama: 'Dr. H. M. Arifin', jabatan: 'Ketua' },
      { nama: 'H. A. Rahman', jabatan: 'Sekretaris' },
    ],
  },
  'M003': {
    id: 'M003',
    name: 'Masjid Raya Baiturrahman',
    city: 'Banda Aceh',
    province: 'Aceh',
    description: 'Masjid bersejarah dengan arsitektur megah',
    fullDescription: 'Masjid Raya Baiturrahman adalah masjid bersejarah yang menjadi ikon Kota Banda Aceh. Dengan arsitektur megah bergaya Mughal dan Aceh.',
    address: 'Jl. Muhammad Jam No. 1, Banda Aceh',
    phone: '(0651) 23456',
    email: 'info@baiturrahman.or.id',
    website: 'www.baiturrahman.or.id',
    fasilitas: ['Taman', 'Parkir Luas', 'Museum', 'Perpustakaan', 'Tempat Wudhu Luas'],
    pengurus: [
      { nama: 'H. M. Jamil', jabatan: 'Ketua' },
      { nama: 'Drs. H. T. Zulkarnain', jabatan: 'Sekretaris' },
      { nama: 'H. Nurdin AR', jabatan: 'Bendahara' },
    ],
  },
};

export default function MasjidDetailPage() {
  const { id } = useParams<{ id: string }>();
  const masjid = id ? masjidData[id] : undefined;

  if (!masjid) {
    return (
      <div className="bg-[#FAFAFA] min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-xl font-semibold text-[#303030] mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Masjid Tidak Ditemukan</h2>
          <p className="text-sm text-[#555] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Masjid yang Anda cari tidak tersedia.</p>
          <Link to="/masjid" className="btn-primary-green">
            Kembali ke Daftar Masjid
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="page-section">
        <div className="page-section-inner max-w-4xl">
          {/* Back Button */}
          <Link
            to="/masjid"
            className="inline-flex items-center gap-2 text-sm text-[#555] hover:text-[#28A71A] transition-colors mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <ArrowLeft size={16} />
            Kembali ke Daftar Masjid
          </Link>

          {/* Header Card */}
          <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-2xl overflow-hidden mb-6 card-hover">
            <div className="h-64 bg-gradient-to-br from-[#E6F9F0] to-[#EAF6E8] flex items-center justify-center relative">
              <span className="text-8xl">{masjid.image}</span>
            </div>
            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-semibold text-[#303030] mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {masjid.name}
              </h1>
              <div className="flex items-center gap-2 text-sm text-[#555] mb-4">
                <MapPin size={16} className="text-[#28A71A]" />
                {masjid.city}, {masjid.province}
              </div>
              <p className="text-base text-[#303030] leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {masjid.fullDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Informasi Kontak */}
            <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-2xl p-6">
              <div className="badge-green mb-4 w-fit">
                <MapPin size={14} />
                <span>Informasi Kontak</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#28A71A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Alamat</p>
                    <p className="text-sm text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{masjid.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-[#28A71A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Telepon</p>
                    <p className="text-sm text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{masjid.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-[#28A71A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Email</p>
                    <p className="text-sm text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{masjid.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe size={16} className="text-[#28A71A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Website</p>
                    <p className="text-sm text-[#28A71A] hover:underline cursor-pointer" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{masjid.website}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fasilitas */}
            <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-2xl p-6">
              <div className="badge-green mb-4 w-fit">
                <Building2 size={14} />
                <span>Fasilitas</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {masjid.fasilitas.map((fas, i) => (
                  <span key={i} className="badge-sm">{fas}</span>
                ))}
              </div>
            </div>

            {/* Pengurus */}
            <div className="md:col-span-2 bg-white border border-[rgba(0,0,0,0.1)] rounded-2xl p-6">
              <div className="badge-green mb-4 w-fit">
                <Users size={14} />
                <span>Pengurus Masjid</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {masjid.pengurus.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-[#FAFAFA] rounded-xl border border-[rgba(0,0,0,0.04)]">
                    <div className="w-10 h-10 rounded-full bg-[#EAF6E8] flex items-center justify-center text-[#28A71A] font-semibold text-sm flex-shrink-0">
                      {p.nama.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{p.nama}</p>
                      <p className="text-xs text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{p.jabatan}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
