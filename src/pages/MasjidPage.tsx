import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ChevronRight, Star, Users, Share2, Filter } from 'lucide-react';

interface MasjidItem {
  id: string;
  name: string;
  city: string;
  province: string;
  description: string;
  type: 'Masjid' | 'Musholla';
  capacity: string;
  image: string;
  fasilitas: string[];
}

const featuredMasjids: MasjidItem[] = [
  {
    id: 'M001',
    name: 'Masjid Istiqlal',
    city: 'Jakarta Pusat',
    province: 'DKI Jakarta',
    description: 'Masjid nasional terbesar di Indonesia dengan arsitektur megah',
    type: 'Masjid',
    capacity: '200.000',
    image: '🕌',
    fasilitas: ['AC', 'Parkir Luas', 'Perpustakaan', 'Taman'],
  },
  {
    id: 'M002',
    name: 'Masjid Raya Al-Markaz',
    city: 'Makassar',
    province: 'Sulawesi Selatan',
    description: 'Masjid kebanggaan masyarakat Makassar di kawasan Indonesia Timur',
    type: 'Masjid',
    capacity: '50.000',
    image: '🕌',
    fasilitas: ['AC', 'Parkir Luas', 'Taman'],
  },
  {
    id: 'M003',
    name: 'Masjid Raya Baiturrahman',
    city: 'Banda Aceh',
    province: 'Aceh',
    description: 'Masjid bersejarah dengan arsitektur megah bergaya Mughal',
    type: 'Masjid',
    capacity: '30.000',
    image: '🕌',
    fasilitas: ['Taman', 'Museum', 'Parkir Luas'],
  },
  {
    id: 'M004',
    name: 'Musholla At-Taqwa',
    city: 'Bandung',
    province: 'Jawa Barat',
    description: 'Musholla lingkungan yang nyaman dan bersih',
    type: 'Musholla',
    capacity: '500',
    image: '🕌',
    fasilitas: ['AC', 'Tempat Wudhu', 'Parkir'],
  },
  {
    id: 'M005',
    name: 'Masjid Al-Akbar',
    city: 'Surabaya',
    province: 'Jawa Timur',
    description: 'Masjid dengan kubah megah ciri khas Surabaya',
    type: 'Masjid',
    capacity: '60.000',
    image: '🕌',
    fasilitas: ['AC', 'Taman', 'Parkir Luas', 'Perpustakaan'],
  },
  {
    id: 'M006',
    name: 'Musholla Al-Hidayah',
    city: 'Yogyakarta',
    province: 'DI Yogyakarta',
    description: 'Musholla sederhana untuk kegiatan keagamaan warga',
    type: 'Musholla',
    capacity: '300',
    image: '🕌',
    fasilitas: ['Tempat Wudhu', 'Parkir'],
  },
];

const regions = [
  { name: 'Aceh', count: 120 },
  { name: 'Sumatera Utara', count: 200 },
  { name: 'DKI Jakarta', count: 350 },
  { name: 'Jawa Barat', count: 400 },
  { name: 'Jawa Tengah', count: 380 },
  { name: 'Jawa Timur', count: 420 },
  { name: 'Sulawesi Selatan', count: 160 },
  { name: 'Kalimantan Timur', count: 90 },
];

type FilterType = 'Semua' | 'Masjid' | 'Musholla';

export default function MasjidPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('Semua');

  const filteredMasjids = featuredMasjids.filter((m) => {
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'Semua' || m.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleShare = (masjid: MasjidItem) => {
    const shareData = {
      title: masjid.name,
      text: `${masjid.name} - ${masjid.city}, ${masjid.province}`,
      url: `${window.location.origin}/masjid/${masjid.id}`,
    };
    if (typeof navigator.share === 'function') {
      navigator.share(shareData).catch(() => {});
    } else {
      navigator.clipboard?.writeText(shareData.url).catch(() => {});
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section pb-6">
        <div className="badge-green mx-auto mb-6 w-fit">
          <MapPin size={14} />
          <span>Peta Sebaran</span>
        </div>
        <h1>
          Cari <span className="text-gradient-green">Masjid</span> & Musholla{' '}
          <span className="text-gradient-green">Seluruh Indonesia</span>
        </h1>
        <p className="text-lg text-[#555] max-w-2xl mx-auto mt-3">
          Temukan informasi lengkap masjid dan musholla di berbagai wilayah Indonesia
        </p>

        {/* Search Container */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-sm p-6">
            {/* Filter Buttons */}
            <div className="flex items-center gap-2 mb-4">
              <Filter size={14} className="text-[#555]" />
              {(['Semua', 'Masjid', 'Musholla'] as FilterType[]).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeFilter === filter
                      ? 'bg-[#28A71A] text-white shadow-sm shadow-[#28A71A]/20'
                      : 'bg-[#F0F4F8] text-[#555] hover:bg-[#E6F9F0] hover:text-[#28A71A]'
                  }`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="flex items-center bg-[#F0F4F8] rounded-xl px-4 py-3">
              <Search size={18} className="text-[#B0B0B0] mr-3 flex-shrink-0" />
              <input
                type="text"
                placeholder="Cari nama masjid atau kota..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm text-[#303030] placeholder:text-[#B0B0B0] focus:outline-none bg-transparent"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              />
              <span className="text-[11px] text-[#B0B0B0] flex-shrink-0 ml-2 hidden sm:inline">
                {filteredMasjids.length} ditemukan
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED MASJIDS ===== */}
      <section className="page-section pt-4">
        <div className="page-section-inner max-w-6xl">
          <div className="text-center mb-10">
            <div className="badge-green mx-auto mb-4 w-fit">
              <Star size={14} />
              <span>Unggulan</span>
            </div>
            <h2 className="section-title">
              Masjid & Musholla <span className="text-gradient-green">Unggulan</span>
            </h2>
            <p className="text-base text-[#555] mt-3">
              Terdaftar dan terverifikasi di platform MENARA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMasjids.map((masjid) => (
              <div
                key={masjid.id}
                className="bg-white border border-[rgba(0,0,0,0.08)] rounded-2xl overflow-hidden card-hover group transition-all hover:shadow-lg hover:border-[#28A71A]/20"
              >
                {/* Image */}
                <div className="relative h-44 bg-gradient-to-br from-[#E6F9F0] to-[#EAF6E8] flex items-center justify-center overflow-hidden">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{masjid.image}</span>
                  
                  {/* Type Badge */}
                  <span
                    className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide ${
                      masjid.type === 'Masjid'
                        ? 'bg-[#28A71A]/90 text-white'
                        : 'bg-[#FF8C00]/90 text-white'
                    }`}
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {masjid.type}
                  </span>

                  {/* Capacity Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-medium text-[#555] shadow-sm">
                    <Users size={10} />
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{masjid.capacity}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Location */}
                  <div className="flex items-center gap-1 text-[11px] text-[#888] mb-1.5">
                    <MapPin size={11} />
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {masjid.city}, {masjid.province}
                    </span>
                  </div>

                  {/* Name */}
                  <h3
                    className="text-base font-bold text-[#303030] mb-1.5 group-hover:text-[#28A71A] transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {masjid.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-xs text-[#666] mb-3 line-clamp-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {masjid.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {masjid.fasilitas.map((f, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium text-[#555] bg-[#F0F4F8] px-2 py-0.5 rounded-md"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2 border-t border-[rgba(0,0,0,0.04)]">
                    <Link
                      to={`/masjid/${masjid.id}`}
                      className="flex-1 text-center text-xs font-semibold text-white bg-[#28A71A] hover:bg-[#1f8a13] px-4 py-2 rounded-xl transition-colors"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Lihat Profil
                    </Link>
                    <button
                      onClick={() => handleShare(masjid)}
                      className="flex items-center justify-center gap-1.5 text-xs font-medium text-[#555] bg-[#F0F4F8] hover:bg-[#E6F9F0] hover:text-[#28A71A] px-3 py-2 rounded-xl transition-all"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      <Share2 size={12} />
                      <span className="hidden sm:inline">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredMasjids.length === 0 && (
            <div className="text-center py-12">
              <div className="text-5xl mb-4 opacity-30">🕌</div>
              <p
                className="text-sm text-[#888]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Tidak ada masjid atau musholla yang ditemukan
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ===== REGIONS ===== */}
      <section className="page-section">
        <div className="page-section-inner max-w-6xl">
          <div className="text-center mb-10">
            <div className="badge-green mx-auto mb-4 w-fit">
              <MapPin size={14} />
              <span>Wilayah</span>
            </div>
            <h2 className="section-title">
              Jelajahi Berdasarkan <span className="text-gradient-green">Wilayah</span>
            </h2>
            <p className="text-base text-[#555] mt-3">
              Temukan masjid di provinsi Anda
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {regions.map((region, index) => (
              <button
                key={index}
                className="group flex items-center justify-between p-4 rounded-xl bg-white border border-[rgba(0,0,0,0.08)] hover:border-[#28A71A]/30 hover:shadow-md transition-all text-left card-hover"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F9F0] flex items-center justify-center text-[#28A71A] font-bold text-sm shrink-0">
                    {region.name.charAt(0)}
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-[#303030] group-hover:text-[#28A71A] transition-colors text-sm"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {region.name}
                    </h4>
                    <p
                      className="text-xs text-[#888] mt-0.5"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {region.count.toLocaleString('id-ID')} Masjid
                    </p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-[#ccc] group-hover:text-[#28A71A] transition-colors shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAGINATION ===== */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2">
            <button className="w-9 h-9 rounded-xl bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center text-[#888] hover:border-[#28A71A] hover:text-[#28A71A] transition-all text-sm font-medium">
              <ChevronRight size={14} className="rotate-180" />
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-9 h-9 rounded-xl text-xs font-semibold transition-all ${
                  page === 1
                    ? 'bg-[#28A71A] text-white shadow-sm shadow-[#28A71A]/20'
                    : 'bg-white border border-[rgba(0,0,0,0.08)] text-[#555] hover:border-[#28A71A] hover:text-[#28A71A]'
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {page}
              </button>
            ))}
            <button className="w-9 h-9 rounded-xl bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center text-[#888] hover:border-[#28A71A] hover:text-[#28A71A] transition-all text-sm font-medium">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
