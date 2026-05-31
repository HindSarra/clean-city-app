import type { Report } from "../../types/TypeReport";

interface Props {
  // Données prêtes à afficher — tri et slice faits dans useReportPage
  reports: Report[];
  // Callback déclenché au clic sur une carte (ex: ouvrir un drawer)
  onSelect: (id: string) => void;
}

export default function ReportFeed({ reports, onSelect }: Props) {
  return (
    <div className="mb-10">
      {/* En-tête avec compteur */}
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
          Derniers signalements
        </h2>
        {/* Badge affichant le nombre de cartes visibles */}
        <span className="text-xs text-gray-400 border border-gray-200 dark:border-zinc-700 px-2.5 py-0.5 rounded-full">
          {reports.length}
        </span>
        <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-800" />
      </div>

      {/* État vide — affiché si aucun signalement disponible */}
      {reports.length === 0 && (
        <p className="text-sm text-gray-400 text-center py-8">
          Aucun signalement récent.
        </p>
      )}

      {/* Grille responsive : 1 col mobile, 2 tablette, 3 desktop */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {reports.map((r) => (
          <button
            key={r.id}
            onClick={() => onSelect(r.id)}
            className="text-left bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:-translate-y-0.5 hover:shadow-sm transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
          >
            {/* Image optionnelle — lazy loading pour les performances */}
            {r.image && (
              <img
                src={r.image}
                alt={r.title}
                className="w-full h-28 object-cover"
                loading="lazy"
              />
            )}
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white leading-snug mb-1">
                {r.title}
              </h3>
              {/* line-clamp-2 : tronque à 2 lignes pour homogénéiser les cartes */}
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-3">
                {r.description}
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 dark:border-zinc-800 pt-2 text-[11px] text-gray-400">
                <span>{r.location}</span>
                <span>
                  {new Date(r.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
