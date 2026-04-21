// src/pages/public/Events.tsx
import { useEvents } from "../../hooks/useEvents";
import { useEventFilters } from "../../hooks/useEventFilters";
import { EventCarousel } from "../../components/events/EventCarousel";
import EventMap from "../../components/events/EventMap";
import type { EventTag } from "../../types/TypeEvent";
import { PastEventsSection } from "../../components/events/PastEventsSection";
import { Link } from "react-router-dom";

const ALL_TAGS: EventTag[] = ["NETTOYAGE", "PLANTATION", "VERDURE URBAINE"];
const TAG_LABELS: Record<EventTag, string> = {
  NETTOYAGE: "🧹 Nettoyage",
  PLANTATION: "🌱 Plantation",
  "VERDURE URBAINE": "🌿 Verdure urbaine",
};

export default function Events() {
  const { upcomingEvents, pastEvents, isLoading, isError, refetch } =
    useEvents();

  const {
    activeTags,
    searchCity,
    hasActiveFilters,
    filteredUpcoming,
    filteredCount,
    toggleTag,
    setSearchCity,
    reset,
  } = useEventFilters(upcomingEvents);

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <p className="text-gray-500 dark:text-gray-400">
          Impossible de charger les événements.
        </p>
        <button
          onClick={() => refetch()}
          className="px-6 py-2 bg-primary text-black font-bold rounded-2xl hover:opacity-90"
        >
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 pt-32 pb-16 space-y-12">
        {/* ── Section : Événements à venir ─────────────────── */}
        <section>
          <div className="mb-5">
            <h1 className="font-extrabold text-2xl dark:text-white">
              Événements à venir
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Rejoignez une action près de chez vous
            </p>
          </div>

          {/* Filtres — uniquement pour les événements à venir */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 ring-1 ring-black/5 dark:ring-white/10 space-y-4 mb-6">
            {/* Recherche ville */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                📍
              </span>
              <input
                type="text"
                placeholder="Rechercher une ville..."
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="w-full pl-8 pr-4 py-2.5 text-sm rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-800 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              {searchCity && (
                <button
                  onClick={() => setSearchCity("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none"
                >
                  ×
                </button>
              )}
            </div>

            {/* Pills tags */}
            <div className="flex flex-wrap gap-2 items-center">
              {ALL_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors ${
                    activeTags.includes(tag)
                      ? "bg-primary text-black border-primary"
                      : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700"
                  }`}
                >
                  {TAG_LABELS[tag]}
                </button>
              ))}

              {hasActiveFilters && (
                <button
                  onClick={reset}
                  className="ml-auto text-xs text-gray-400 hover:text-primary transition-colors font-semibold"
                >
                  Réinitialiser ×
                </button>
              )}
            </div>
          </div>

          {/* Compteur résultats */}
          {!isLoading && hasActiveFilters && (
            <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">
              {filteredCount} événement{filteredCount !== 1 ? "s" : ""} trouvé
              {filteredCount !== 1 ? "s" : ""}
            </p>
          )}

          {filteredUpcoming.length === 0 && !isLoading ? (
            <p className="text-gray-400 text-sm py-6 text-center">
              Aucun événement à venir ne correspond aux filtres.
            </p>
          ) : (
            <EventCarousel events={filteredUpcoming} isLoading={isLoading} />
          )}
        </section>

        {/* ── Carte des événements à venir ──────────────────── */}
        <section>
          <div className="mb-5">
            <h2 className="font-extrabold text-2xl dark:text-white">
              Événements près de chez vous
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Découvrez les actions sur la carte
            </p>
          </div>
          <EventMap events={upcomingEvents} isLoading={isLoading} />
        </section>

        <hr className="border-gray-200 dark:border-zinc-800" />

        {/* ── Événements passés — Avant / Après ────────────── */}
        <PastEventsSection events={pastEvents} isLoading={isLoading} />

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="text-center space-y-4 pt-4">
          <h2 className="font-extrabold text-2xl dark:text-white">
            Prêt à agir ?
          </h2>
          <Link
            to="/signin"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-black font-extrabold rounded-2xl hover:opacity-90 transition text-sm"
          >
            Rejoindre la communauté »
          </Link>
        </section>
      </div>
    </main>
  );
}
