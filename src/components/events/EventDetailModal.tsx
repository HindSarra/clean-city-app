// src/components/events/EventDetailModal.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import type { Event } from "../../types/TypeEvent";
import { EventTagBadge } from "./EventTagBadge";
import { formatDate, getRemainingSlots } from "./eventUtils";

interface Props {
  event: Event;
  onClose: () => void;
}

export const EventDetailModal: React.FC<Props> = ({ event, onClose }) => {
  const isFull = getRemainingSlots(event.slotsTaken, event.slotsTotal) === 0;
  // Fermeture avec la touche Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-zinc-800 rounded-2xl w-full max-w-md shadow-xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.img}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <EventTagBadge tag={event.tag} />
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center text-lg leading-none transition-colors"
            aria-label="Fermer"
          >
            ×
          </button>
        </div>

        {/* Contenu */}
        <div className="p-6">
          <p className="text-xs text-primary font-semibold mb-1">
            📅 {formatDate(event.date)}
          </p>
          <h3 className="font-bold text-lg mb-1 dark:text-white">
            {event.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-4">
            📍 {event.location}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            {event.description}
          </p>

          {event.status === "upcoming" && (
            <>
              <div>
                👥 {event.slotsTaken} / {event.slotsTotal} participants
              </div>

              <div className="mt-4">
                {isFull ? (
                  <p className="text-center text-sm text-red-500 font-semibold py-3 bg-red-50 dark:bg-red-900/20 rounded-2xl">
                    Cet événement est complet
                  </p>
                ) : (
                  <Link
                    to="/signin"
                    className="block w-full btn btn-primary rounded-2xl text-white text-center py-3 text-sm font-semibold"
                  >
                    S'inscrire pour participer →
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
