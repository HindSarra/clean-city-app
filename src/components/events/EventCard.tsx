// src/components/events/EventCard.tsx

import React from "react";
import { Link } from "react-router-dom";
import type { Event } from "../../types/TypeEvent";
import { EventTagBadge } from "./EventTagBadge";
import { formatDate, getRemainingSlots } from "./eventUtils";

// Props du composant : un événement + une fonction pour afficher les détails
interface Props {
  event: Event;
  onDetails: () => void;
}

// Composant principal qui affiche une carte d'événement
export const EventCard: React.FC<Props> = ({ event, onDetails }) => {
  // Vérifie si l'événement est terminé
  const isPast = event.status === "past";

  // Calcule le nombre de places restantes
  const remaining = getRemainingSlots(event.slotsTaken, event.slotsTotal);

  // Vérifie si l'événement est complet
  const isFull = remaining === 0;

  // Pourcentage de remplissage (utilisé pour la barre de progression)
  const fillPct = Math.round((event.slotsTaken / event.slotsTotal) * 100);

  return (
    // Carte globale
    <article className="group w-full sm:min-w-[280px] sm:max-w-[280px] lg:min-w-0 lg:max-w-none bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 hover:border-gray-200 dark:hover:border-zinc-700 hover:shadow-lg transition-all duration-200 flex flex-col">
      {/* ================= IMAGE ================= */}
      <div className="relative h-40 overflow-hidden">
        {/* Image de l'événement */}
        <img
          src={event.img}
          alt={event.title}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            isPast ? "opacity-60 grayscale-[20%]" : "" // effet visuel si événement passé
          }`}
        />

        {/* Overlay gradient pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Badge du type d'événement (tag) */}
        <div className="absolute top-2.5 left-2.5">
          <EventTagBadge tag={event.tag} />
        </div>

        {/* Badge statut : terminé */}
        {isPast && (
          <span className="absolute top-2.5 right-2.5 text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/60 text-white backdrop-blur-sm">
            Terminé
          </span>
        )}

        {/* Badge statut : complet */}
        {!isPast && isFull && (
          <span className="absolute top-2.5 right-2.5 text-[10px] font-bold px-2 py-0.5 rounded-md bg-red-500 text-white">
            Complet
          </span>
        )}

        {/* Date affichée en bas de l'image */}
        <p className="absolute bottom-2.5 left-2.5 text-white text-[11px] font-semibold drop-shadow-sm">
          📅 {formatDate(event.date)}
        </p>
      </div>

      {/* ================= CONTENU ================= */}
      <div className="p-4 flex flex-col flex-1 gap-1">
        {/* Titre de l'événement */}
        <h3 className="font-bold text-sm text-gray-900 dark:text-white leading-snug line-clamp-1">
          {event.title}
        </h3>

        {/* Localisation */}
        <p className="text-xs text-gray-400 dark:text-gray-500">
          📍 {event.location}
        </p>

        {/* Description (limitée à 2 lignes) */}
        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-1 flex-1 leading-relaxed">
          {event.description}
        </p>

        {/* ================= PROGRESSION DES PLACES ================= */}
        {!isPast && (
          <div className="mt-3 space-y-1">
            {/* Texte : inscrits + places restantes */}
            <div className="flex justify-between text-[10px] text-gray-400 dark:text-gray-500">
              <span>{event.slotsTaken} inscrits</span>
              <span>{remaining > 0 ? `${remaining} places` : "Complet"}</span>
            </div>

            {/* Barre de progression */}
            <div className="h-1 w-full bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${
                  isFull
                    ? "bg-red-400" // complet
                    : fillPct > 70
                      ? "bg-amber-400" // presque complet
                      : "bg-primary" // normal
                }`}
                style={{ width: `${fillPct}%` }} // largeur dynamique
              />
            </div>
          </div>
        )}

        {/* Nombre de participants si événement passé */}
        {isPast && (
          <p className="mt-2 text-[11px] text-gray-400 dark:text-gray-500">
            👥 {event.slotsTaken} participants
          </p>
        )}

        {/* ================= ACTIONS ================= */}
        <div className="flex gap-2 mt-3">
          {/* Cas 1 : événement terminé */}
          {isPast ? (
            <button
              type="button"
              onClick={onDetails}
              className="flex-1 py-2 rounded-xl border border-gray-200 dark:border-zinc-700 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
            >
              Voir le bilan
            </button>
          ) : /* Cas 2 : événement complet */
          isFull ? (
            <>
              {/* Bouton désactivé */}
              <span className="flex-1 text-center py-2 rounded-xl text-xs font-semibold bg-gray-50 dark:bg-zinc-800 text-gray-400 dark:text-gray-500 border border-gray-100 dark:border-zinc-800">
                Complet
              </span>

              {/* Bouton détails */}
              <button
                type="button"
                onClick={onDetails}
                className="flex-1 py-2 rounded-xl border border-gray-200 dark:border-zinc-700 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Détails
              </button>
            </>
          ) : (
            /* Cas 3 : événement disponible */
            <>
              {/* Bouton participation (redirige vers connexion) */}
              <Link
                to="/signin"
                className="flex-1 text-center py-2 rounded-xl bg-primary text-black text-xs font-extrabold hover:opacity-90 transition-opacity"
              >
                Participer →
              </Link>

              {/* Bouton détails */}
              <button
                type="button"
                onClick={onDetails}
                className="flex-1 py-2 rounded-xl border border-gray-200 dark:border-zinc-700 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Détails
              </button>
            </>
          )}
        </div>
      </div>
    </article>
  );
};
