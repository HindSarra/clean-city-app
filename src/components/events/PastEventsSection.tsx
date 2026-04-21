import React from "react";
import type { Event } from "../../types/TypeEvent";
import { formatDate } from "./eventUtils";
import { EventTagBadge } from "./EventTagBadge";

interface Props {
  events: Event[];
  isLoading?: boolean;
}

// ── Skeleton ────────────────────────────────────────
const SkeletonHighlight = () => (
  <div className="w-full rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 animate-pulse">
    <div className="h-64 sm:h-80 bg-gray-200 dark:bg-zinc-800" />
    <div className="p-5 space-y-3 bg-white dark:bg-zinc-900">
      <div className="h-3 w-32 bg-gray-200 dark:bg-zinc-800 rounded" />
      <div className="h-4 w-48 bg-gray-200 dark:bg-zinc-800 rounded" />
      <div className="h-3 w-full bg-gray-200 dark:bg-zinc-800 rounded" />
      <div className="flex gap-6 pt-2">
        <div className="h-3 w-24 bg-gray-200 dark:bg-zinc-800 rounded" />
        <div className="h-3 w-24 bg-gray-200 dark:bg-zinc-800 rounded" />
      </div>
    </div>
  </div>
);

// ── SECTION PRINCIPALE ───────────────────────────────
export const PastEventsSection: React.FC<Props> = ({
  events,
  isLoading = false,
}) => {
  // 🔄 Loading
  if (isLoading) {
    return (
      <section>
        <div className="mb-5">
          <h2 className="font-extrabold text-2xl dark:text-white">
            Événements passés
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Retour sur nos actions — avant et après
          </p>
        </div>
        <SkeletonHighlight />
      </section>
    );
  }

  // 📭 Aucun event
  if (!events || events.length === 0) {
    return (
      <section>
        <h2 className="font-extrabold text-2xl dark:text-white">
          Événements passés
        </h2>
        <p className="text-gray-400 text-sm py-6 text-center">
          Aucun événement passé.
        </p>
      </section>
    );
  }

  // 🎯 On récupère UNIQUEMENT evt-005
  const featured = events.find((e) => e.id === "evt-005");

  // ⚠️ Sécurité
  if (!featured) {
    return (
      <section>
        <h2 className="font-extrabold text-2xl dark:text-white">
          Événements passés
        </h2>
        <p className="text-gray-400 text-sm py-6 text-center">
          Événement introuvable.
        </p>
      </section>
    );
  }

  // ✅ Affichage d’un seul event
  return (
    <section>
      <div className="mb-5">
        <h2 className="font-extrabold text-2xl dark:text-white">
          Événements passés
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Retour sur nos actions — avant et après
        </p>
      </div>

      <PastEventHighlight event={featured} />
    </section>
  );
};

// ── CARD AVANT / APRÈS ───────────────────────────────
interface HighlightProps {
  event: Event;
}

const PastEventHighlight: React.FC<HighlightProps> = ({ event }) => {
  const fallback = "/placeholder.jpg";

  const imgBefore = event.imgBefore ?? event.img ?? fallback;
  const imgAfter = event.imgAfter ?? event.img ?? fallback;

  const participation =
    event.slotsTotal > 0
      ? Math.round((event.slotsTaken / event.slotsTotal) * 100)
      : 0;

  return (
    <article className="w-full bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-sm">
      {/* ── Images avant / après ── */}
      <div className="relative w-full h-64 sm:h-80 grid grid-cols-2">
        {/* AVANT */}
        <div className="relative overflow-hidden">
          <img
            src={imgBefore}
            alt={`${event.title} — avant`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
          <span className="absolute top-3 left-3 text-[11px] font-extrabold px-2.5 py-1 rounded-md bg-black/65 text-white tracking-widest uppercase backdrop-blur-sm">
            Avant
          </span>
        </div>

        {/* APRÈS */}
        <div className="relative overflow-hidden">
          <img
            src={imgAfter}
            alt={`${event.title} — après`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute top-3 left-3 text-[11px] font-extrabold px-2.5 py-1 rounded-md bg-primary/95 text-black tracking-widest uppercase">
            Après
          </span>
        </div>

        {/* Séparateur */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/90 shadow-lg z-10" />

        {/* Tag */}
        <div className="absolute bottom-3 right-3 z-10">
          <EventTagBadge tag={event.tag} />
        </div>

        {/* Dégradé bas */}
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/30 to-transparent z-[5]" />
      </div>

      {/* ── Contenu ── */}
      <div className="p-5">
        <p className="text-[11px] text-gray-400 dark:text-gray-500 font-medium mb-0.5">
          {formatDate(event.date)} · {event.location}
        </p>
        <h3 className="font-bold text-base text-gray-900 dark:text-white leading-snug">
          {event.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-2 line-clamp-2">
          {event.description}
        </p>

        {/* ── Stats ── */}
        <div className="flex items-center gap-6 pt-4 mt-3 border-t border-gray-100 dark:border-zinc-800 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-lg">🗑️</span>
            <div>
              <p className="text-sm font-extrabold text-gray-900 dark:text-white leading-none">
                {event.kgCollected ?? "—"} kg
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                déchets collectés
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">👥</span>
            <div>
              <p className="text-sm font-extrabold text-gray-900 dark:text-white leading-none">
                {event.slotsTaken} bénévoles
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                participants
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">✅</span>
            <div>
              <p className="text-sm font-extrabold text-gray-900 dark:text-white leading-none">
                {participation}%
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                participation
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
