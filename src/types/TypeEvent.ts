// src/types/TypeEvent.ts

export type EventTag = "NETTOYAGE" | "PLANTATION" | "VERDURE URBAINE";
export type EventStatus = "upcoming" | "past";

export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  img: string;
  tag: EventTag;
  position?: [number, number];
  slotsTotal: number;
  slotsTaken: number;
  imgBefore?: string;
  imgAfter?: string;
  status: EventStatus;
  kgCollected?: number; // kg de déchets collectés
}
