// src/components/events/EventCarousel.tsx
import React, { useRef, useState } from "react";
import type { Event } from "../../types/TypeEvent";
import { EventCard } from "./EventCard";
import { EventDetailModal } from "./EventDetailModal";

interface Props {
  events: Event[];
  isLoading?: boolean;
}

const SkeletonCard = () => (
  <div className="flex-shrink-0 w-[280px] h-[380px] bg-white dark:bg-zinc-900 rounded-2xl animate-pulse border border-gray-100 dark:border-zinc-800" />
);

export const EventCarousel: React.FC<Props> = ({
  events,
  isLoading = false,
}) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 300 : -300,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Flèches */}
      <div className="flex justify-end gap-2 mb-3">
        <button
          onClick={() => scroll("left")}
          aria-label="Précédent"
          className="w-8 h-8 rounded-full border border-gray-200 dark:border-zinc-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-zinc-800 transition-colors text-sm"
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Suivant"
          className="w-8 h-8 rounded-full border border-gray-200 dark:border-zinc-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-zinc-800 transition-colors text-sm"
        >
          →
        </button>
      </div>

      {/* Scroll horizontal — une seule logique, pas de mix flex/grid responsive */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
          : events.map((event) => (
              <div
                key={event.id}
                className="snap-start flex-shrink-0 w-[280px]"
              >
                <EventCard
                  event={event}
                  onDetails={() => setSelectedEvent(event)}
                />
              </div>
            ))}
      </div>

      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
};
