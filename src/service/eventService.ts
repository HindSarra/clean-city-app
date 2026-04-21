// src/hooks/eventService.ts
import axios from "axios";
import type { Event } from "../types/TypeEvent";
import { mockEvents } from "../data/mockEvents";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "/api",
  timeout: 8000,
  headers: { "Content-Type": "application/json" },
});

export const eventService = {
  getAll: async (): Promise<Event[]> => {
    // ✅ Mode mock actif — décommenter quand l'API est prête :
    // const { data } = await apiClient.get<Event[]>("/events");
    // return data;

    await new Promise((r) => setTimeout(r, 600)); // simule le réseau
    return mockEvents;
  },
};
