import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, Search, Clock, Eye, Heart, Share2, User, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

// All publication types combined
const semuaPublikasi = [
  // Postingan/Artikel
  { id: 1, type: 'Artikel', title: 'Program Pemberdayaan UMKM Resmi Diluncurkan di Jakarta', description: 'Mari ikut serta menyebarkan ilmu dengan mendukung program wakaf buku untuk anak-anak.', category: 'Berita', date: '15 Januari 2025', readTime: '5 menit', views: '1,234', likes: '50', image: '📚', author: 'Tim Redaksi' },
  { id: 2, type: 'Artikel', title: 'Keutamaan Sedekah di Hari Jumat', description: 'Rasulullah SAW menganjurkan umatnya untuk memperbanyak sedekah di hari Jumat.', category: 'Cerita', date: '12 Januari 2025', readTime: '4 menit', views: '987', likes: '42', image: '📖', author: 'Ustadz Faisal' },
  { id: 3, type: 'Artikel', title: 'Panduan Zakat Fitrah Lengkap', description: 'Pahami ketentuan zakat fitrah beserta nisab dan cara perhitungannya.', category: 'Postingan', date: '10 Januari 2025', readTime: '7 menit', views: '2,156', likes: '89', image: '📋', author: 'Dr. H. Ahmad' },

  // Kajian
  { id: 4, type: 'Kajian', title: 'Fikih Zakat: Panduan Lengkap', pemateri: 'Ustadz Dr. H. Mohamad Hidayat, M.A.', date: '15 Juli 2026', category: 'Kajian', image: '📖', duration: '45 menit', views: '567', likes: '34' },
  { id: 5, type: 'Kajian', title: 'Manajemen Masjid Modern', pemateri: 'Dr. H. Ahmad Dahlan, M.E.I.', date: '25 Juli 2026', category: 'Kajian', image: '🕌', duration: '60 menit', views: '432', likes: '28' },
  { id: 6, type: 'Kajian', title: 'Tafsir Al-Quran: Surat Al-Mulk', pemateri: 'KH. Drs. Hasan Basri, M.Ag.', date: '28 Juli 2026', category: 'Kajian', image: '📖', duration: '50 menit', views: '789', likes: '56' },

  // Acara & Donasi
  { id: 7, type: 'Acara', title: 'Seminar Ekonomi Syariah Nasional', description: 'Hadiri seminar ekonomi syariah dengan pembicara nasional.', date: '5 Agustus 2026', category: 'Acara', image: '🎯', lokasi: 'Jakarta Convention Center', readTime: '60 menit', views: '345', likes: '23' },
  { id: 8, type: 'Acara', title: 'Bakti Sosial Bersih-Bersih Masjid', description: 'Kegiatan gotong royong bersih-bersih masjid se-DKI Jakarta.', date: '10 Agustus 2026', category: 'Acara', image: '🤝', lokasi: 'Masjid Raya Jakarta', readTime: '45 menit', views: '234', likes: '18' },
  { id: 9, type: 'Donasi', title: 'Pembangunan Masjid di Daerah 3T', description: 'Bantu pembangunan masjid di daerah tertinggal, terdepan, terluar.', date: 'Berlangsung', category: 'Donasi', image: '🕌', target: 'Rp 500 Juta', terkumpul: 'Rp 325 Juta', percentage: 65, readTime: '5 menit', views: '1,876', likes: '92' },
  { id: 10, type: 'Donasi', title: 'Program Beasiswa Santri', description: 'Dukung pendidikan santri berprestasi dari keluarga kurang mampu.', date: 'Berlangsung', category: 'Donasi', image: '📚', target: 'Rp 250 Juta', terkumpul: 'Rp 180 Juta', percentage: 72, readTime: '4 menit', views: '1,543', likes: '78' },
];

const filterKategori = [
  { id: 'semua', label: 'Semua' },
  { id: 'berita', label: 'Berita' },
  { id: 'cerita', label: 'Cerita' },
  { id: 'postingan', label: 'Postingan' },
  { id: 'kajian', label: 'Kajian' },
  { id: 'donasi', label: 'Donasi' },
  { id: 'acara', label: 'Acara' },
  { id: 'wisata', label: 'Wisata' },
  { id: 'audio', label: 'Audio' },
];

function formatViews(views: string): string {
  const num = parseInt(views.replace(/,/g, ''));
  if (num >= 1000) return (num / 1000).toFixed(1) + 'rb';
  return views;
}

function getCategoryEmoji(category: string): string {
  switch (category) {
    case 'Berita': return '📰';
    case 'Cerita': return '📖';
    case 'Postingan': return '📝';
    case 'Kajian': return '🕌';
    case 'Donasi': return '🤲';
    case 'Acara': return '🎯';
    case 'Wisata': return '🌍';
    case 'Audio': return '🎧';
    default: return '📄';
  }
}

export default function PublicationMenu() {
  const [activeFilter, setActiveFilter] = useState('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const filtered = semuaPublikasi.filter((pub) => {
    const matchFilter = activeFilter === 'semua'
      ? true
      : pub.category.toLowerCase() === activeFilter || pub.type.toLowerCase() === activeFilter;
    if (!matchFilter) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      pub.title.toLowerCase().includes(q) ||
      ('description' in pub && (pub.description as string).toLowerCase().includes(q)) ||
      pub.category.toLowerCase().includes(q) ||
      pub.type.toLowerCase().includes(q) ||
      ('pemateri' in pub && ((pub as any).pemateri as string).toLowerCase().includes(q)) ||
      ('author' in pub && (pub as any).author?.toLowerCase().includes(q)) ||
      ('lokasi' in pub && (pub as any).lokasi?.toLowerCase().includes(q))
    );
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const pagedItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleFilterChange = (id: string) => {
    setActiveFilter(id);
    setCurrentPage(1);
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* ===== HERO ===== */}
      <section className="hero-section">
        <div className="badge-green mx-auto mb-6 w-fit">
          <Megaphone size={14} />
          <span>Publikasi</span>
        </div>
        <h1>
          Jelajah <span className="text-gradient-green">Publikasi</span>
        </h1>
        <p className="text-lg text-[#555] max-w-2xl mx-auto">
          Informasi, kajian, acara, dan donasi terbaru dari masjid-masjid di seluruh Indonesia
        </p>

        {/* Search Section - Filter Chips + Search */}
        <div className="mx-auto mt-8 w-full max-w-[1200px] flex items-center gap-4">
          {/* Filter Chips */}
          <div
            className="flex-1 flex flex-row items-center px-4 h-10 rounded-2xl bg-[#F0F4F8] overflow-x-auto gap-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {filterKategori.map((f) => (
              <button
                key={f.id}
                onClick={() => handleFilterChange(f.id)}
                className={`whitespace-nowrap text-sm font-medium transition-all px-4 py-1.5 rounded-full shrink-0 ${
                  activeFilter === f.id
                    ? 'bg-[#28A71A] text-white'
                    : 'text-[#737373] hover:text-[#555]'
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="flex items-center gap-2 px-4 h-10 rounded-2xl bg-white border border-[rgba(0,0,0,0.1)] min-w-[220px] shrink-0">
            <Search size={16} className="text-[#B0B0B0] shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Cari publikasi..."
              className="w-full text-sm text-[#303030] placeholder:text-[#B0B0B0] focus:outline-none bg-transparent"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            />
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="page-section pb-20">
        <div className="page-section-inner max-w-6xl">
          {/* Featured Card */}
          {pagedItems.length > 0 && (
            <div className="mb-8">
              <div className="bg-white border border-[rgba(0,0,0,0.08)] rounded-2xl overflow-hidden card-hover md:flex hover:shadow-lg transition-all">
                <div className="md:w-[400px] h-56 md:h-auto bg-gradient-to-br from-[#E6F9F0] to-[#EAF6E8] flex items-center justify-center text-7xl flex-shrink-0 relative overflow-hidden">
                  <span className="relative z-10">{pagedItems[0].image}</span>
                  {/* Type badge on image */}
                  <span className="absolute top-3 left-3 z-10 px-3 py-1 bg-[#28A71A]/90 text-white rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {pagedItems[0].type}
                  </span>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-medium text-[#888] flex items-center gap-1">
                        {getCategoryEmoji(pagedItems[0].category)} {pagedItems[0].category}
                      </span>
                      <span className="text-[#ddd]">|</span>
                      <span className="text-[11px] text-[#888]">{pagedItems[0].date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#303030] mb-3 leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {pagedItems[0].title}
                    </h3>
                    <p className="text-sm text-[#555] mb-4 leading-relaxed line-clamp-2">
                      {'description' in pagedItems[0]
                        ? pagedItems[0].description
                        : `Oleh: ${(pagedItems[0] as any).pemateri || ''}`}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(0,0,0,0.06)]">
                    <div className="flex items-center gap-4 text-xs text-[#555]">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {(pagedItems[0] as any).duration || (pagedItems[0] as any).readTime || '5 menit'}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye size={12} />
                        {formatViews(pagedItems[0].views)}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-xs text-[#555]">
                        <Heart size={12} />
                        {pagedItems[0].likes}
                      </span>
                      <Link
                        to={`/${pagedItems[0].type.toLowerCase()}/${pagedItems[0].id}`}
                        className="text-sm font-semibold text-[#28A71A] hover:text-[#1C7712] transition-colors"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        Baca Selengkapnya →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid Cards */}
          {pagedItems.length > 1 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pagedItems.slice(1).map((pub) => (
                <div
                  key={pub.id}
                  className="bg-white border border-[rgba(0,0,0,0.08)] rounded-2xl overflow-hidden card-hover group flex flex-col hover:shadow-lg transition-all"
                >
                  {/* Image */}
                  <div className="h-44 bg-gradient-to-br from-[#E6F9F0] to-[#EAF6E8] flex items-center justify-center text-5xl relative overflow-hidden">
                    <span className="relative z-10">{pub.image}</span>
                    {/* Type badge top-left */}
                    <span className="absolute top-3 left-3 z-10 px-2.5 py-0.5 bg-[#28A71A]/90 text-white rounded-full text-[9px] font-bold uppercase tracking-wider shadow-sm">
                      {pub.type}
                    </span>
                    {/* Category emoji decoration */}
                    <span className="absolute bottom-2 right-3 text-3xl opacity-20">
                      {getCategoryEmoji(pub.category)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Category + Date row */}
                    <div className="flex items-center gap-2 text-[10px] text-[#888] mb-2">
                      <span>{getCategoryEmoji(pub.category)} {pub.category}</span>
                      <span className="text-[#ddd]">|</span>
                      <span>{pub.date}</span>
                    </div>

                    <h3 className="text-sm font-bold text-[#303030] mb-2 leading-snug line-clamp-2 group-hover:text-[#28A71A] transition-colors">
                      {pub.title}
                    </h3>

                    {/* Description */}
                    {'description' in pub && (
                      <p className="text-xs text-[#666] line-clamp-2 mb-3 flex-1 leading-relaxed">
                        {pub.description}
                      </p>
                    )}
                    {(pub as any).pemateri && (
                      <p className="text-xs text-[#888] flex items-center gap-1.5 mb-2">
                        <User size={11} className="shrink-0" />
                        <span className="truncate">{(pub as any).pemateri}</span>
                      </p>
                    )}
                    {(pub as any).lokasi && (
                      <p className="text-xs text-[#888] flex items-center gap-1.5 mb-2">
                        <MapPin size={11} className="shrink-0" />
                        <span className="truncate">{(pub as any).lokasi}</span>
                      </p>
                    )}

                    {/* Donasi Progress */}
                    {(pub as any).percentage && (
                      <div className="mt-auto mb-2">
                        <div className="flex justify-between text-[10px] text-[#555] mb-1">
                          <span className="font-medium">{(pub as any).terkumpul}</span>
                          <span>Target: {(pub as any).target}</span>
                        </div>
                        <div className="w-full h-2 bg-[#F0F4F8] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#28A71A] to-[#6FC466] rounded-full transition-all duration-500"
                            style={{ width: `${(pub as any).percentage}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Footer metadata */}
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-[rgba(0,0,0,0.06)]">
                      <div className="flex items-center gap-3 text-[10px] text-[#555]">
                        <span className="flex items-center gap-1">
                          <Clock size={10} />
                          {(pub as any).duration || (pub as any).readTime || '5 menit'}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye size={10} />
                          {formatViews(pub.views)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-0.5 text-[10px] text-[#555]">
                          <Heart size={9} />
                          {pub.likes}
                        </span>
                        <button className="p-1 rounded-lg hover:bg-[#F0F4F8] text-[#888] hover:text-[#28A71A] transition-colors">
                          <Share2 size={10} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {pagedItems.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-base text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Belum ada publikasi untuk kategori ini
              </p>
              <button
                onClick={() => handleFilterChange('semua')}
                className="mt-4 text-sm font-semibold text-[#28A71A] hover:text-[#1C7712] transition-colors"
              >
                Lihat Semua Publikasi →
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  currentPage === 1
                    ? 'text-[#ccc] cursor-not-allowed'
                    : 'bg-white border border-[rgba(0,0,0,0.08)] text-[#555] hover:border-[#28A71A] hover:text-[#28A71A]'
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <ChevronLeft size={14} />
                Sebelumnya
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 rounded-xl text-xs font-semibold transition-all ${
                    page === currentPage
                      ? 'bg-[#28A71A] text-white shadow-sm shadow-[#28A71A]/20'
                      : 'bg-white border border-[rgba(0,0,0,0.08)] text-[#555] hover:border-[#28A71A] hover:text-[#28A71A]'
                  }`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  currentPage === totalPages
                    ? 'text-[#ccc] cursor-not-allowed'
                    : 'bg-white border border-[rgba(0,0,0,0.08)] text-[#555] hover:border-[#28A71A] hover:text-[#28A71A]'
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Selanjutnya
                <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
