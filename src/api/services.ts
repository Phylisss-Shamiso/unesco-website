// Service layer - currently returns mock data
// Replace with apiClient calls when Django backend is ready
import {
  newsItems, events, programmes, publications, mediaItems, sectors,
  type NewsItem, type EventItem, type Programme, type Publication, type MediaItem, type Sector,
} from "./mockData";

// Simulate network delay
const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export const newsService = {
  getAll: async (): Promise<NewsItem[]> => { await delay(); return newsItems; },
  getById: async (id: number): Promise<NewsItem | undefined> => { await delay(); return newsItems.find((n) => n.id === id); },
};

export const eventsService = {
  getAll: async (): Promise<EventItem[]> => { await delay(); return events; },
  getById: async (id: number): Promise<EventItem | undefined> => { await delay(); return events.find((e) => e.id === id); },
};

export const programmesService = {
  getAll: async (): Promise<Programme[]> => { await delay(); return programmes; },
  getByStatus: async (status: string): Promise<Programme[]> => { await delay(); return programmes.filter((p) => p.status === status); },
};

export const publicationsService = {
  getAll: async (): Promise<Publication[]> => { await delay(); return publications; },
  getByCategory: async (cat: string): Promise<Publication[]> => { await delay(); return publications.filter((p) => p.category === cat); },
};

export const mediaService = {
  getAll: async (): Promise<MediaItem[]> => { await delay(); return mediaItems; },
};

export const sectorsService = {
  getAll: async (): Promise<Sector[]> => { await delay(); return sectors; },
};
