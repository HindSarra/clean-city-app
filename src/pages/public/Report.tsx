import ReportMap from "../../components/report/ReportMap";
import ReportFeed from "../../components/report/ReportFeed";
import ReportFormPanel from "../../components/report/ReportPanelForm";
import { useReportPage } from "../../hooks/useReport";
import { useAuth } from "../../hooks/useAuth";

export default function ReportPage() {
  const { reports, latestReports, isLoading, handleSelectReport } =
    useReportPage();

  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 mt-20">
      <ReportMap reports={reports} isLoading={isLoading} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-7 space-y-6">
        <ReportFeed reports={latestReports} onSelect={handleSelectReport} />

        {/* ✅ onSubmit supprimé car inutilisé dans ce flow */}
        <ReportFormPanel user={user} />
      </div>
    </div>
  );
}
