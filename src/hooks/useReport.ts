import { mockReport } from "../data/mockReport";
import type { Report } from "../types/TypeReport";

// Type de retour explicite pour éviter les surprises TypeScript
interface UseReportPageReturn {
  reports: Report[]; // Tous les signalements (pour la carte)
  latestReports: Report[]; // 3 derniers triés par date (pour le feed)
  isLoading: boolean; // À passer à ReportMap pour le skeleton
  error: string | null; // À gérer dans ReportPage si besoin
  handleSelectReport: (id: string) => void;
}

export function useReportPage(): UseReportPageReturn {
  // Tri par date décroissante + slice ici, pas dans le composant
  // → ReportFeed reçoit des données prêtes à afficher
  const latestReports = [...mockReport]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const handleSelectReport = (id: string) => {
    // TODO : navigate(`/report/${id}`) ou ouvrir un drawer de détail
    console.log("Signalement sélectionné :", id);
  };

  return {
    reports: mockReport,
    latestReports,
    isLoading: false, // TODO : passer à true pendant le fetch API
    error: null, // TODO : capturer l'erreur du fetch API
    handleSelectReport,
  };
}
