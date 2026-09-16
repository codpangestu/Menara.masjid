import { contentApi } from './api';
import type {
  ApiResponse,
  ContentItem,
  Kajian,
  Acara,
  Donasi,
} from '../types';

export const contentService = {
  // Home
  getHome: async () => {
    const response = await contentApi.get<ApiResponse<any>>('/api/v1/home');
    return response.data;
  },

  // Informasi
  getInformasi: async () => {
    const response = await contentApi.get<ApiResponse<ContentItem[]>>('/api/v1/informasi');
    return response.data;
  },

  getInformasiBySlug: async (slug: string) => {
    const response = await contentApi.get<ApiResponse<ContentItem>>(`/api/v1/informasi/${slug}`);
    return response.data;
  },

  // Kajian
  getKajian: async () => {
    const response = await contentApi.get<ApiResponse<Kajian[]>>('/api/v1/kajian');
    return response.data;
  },

  getKajianBySlug: async (slug: string) => {
    const response = await contentApi.get<ApiResponse<Kajian>>(`/api/v1/kajian/${slug}`);
    return response.data;
  },

  // Acara
  getAcara: async () => {
    const response = await contentApi.get<ApiResponse<Acara[]>>('/api/v1/acara');
    return response.data;
  },

  getAcaraBySlug: async (slug: string) => {
    const response = await contentApi.get<ApiResponse<Acara>>(`/api/v1/acara/${slug}`);
    return response.data;
  },

  // Cerita
  getCerita: async () => {
    const response = await contentApi.get<ApiResponse<ContentItem[]>>('/api/v1/cerita');
    return response.data;
  },

  // Donasi
  getDonasi: async () => {
    const response = await contentApi.get<ApiResponse<Donasi[]>>('/api/v1/donasi');
    return response.data;
  },

  getDonasiBySlug: async (slug: string) => {
    const response = await contentApi.get<ApiResponse<Donasi>>(`/api/v1/donasi/${slug}`);
    return response.data;
  },

  // Postingan
  getPostingan: async () => {
    const response = await contentApi.get<ApiResponse<ContentItem[]>>('/api/v1/postingan');
    return response.data;
  },

  // Inspirasi
  getInspirasi: async () => {
    const response = await contentApi.get<ApiResponse<ContentItem[]>>('/api/v1/inspirasi');
    return response.data;
  },

  // Info Ayat
  getInfoAyat: async () => {
    const response = await contentApi.get<ApiResponse<ContentItem[]>>('/api/v1/infoayat');
    return response.data;
  },

  // Info Doa
  getInfoDoa: async () => {
    const response = await contentApi.get<ApiResponse<ContentItem[]>>('/api/v1/infodoa');
    return response.data;
  },

  // Pengumuman
  getPengumuman: async () => {
    const response = await contentApi.get<ApiResponse<ContentItem[]>>('/api/v1/pengumuman');
    return response.data;
  },
};
