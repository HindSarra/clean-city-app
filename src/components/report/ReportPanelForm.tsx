import { useNavigate } from "react-router-dom";

interface Props {
  // null si l'utilisateur n'est pas connecté
  user: { id: string; name: string } | null;
}

export default function ReportFormPanel({ user }: Props) {
  const navigate = useNavigate();

  // ----- Utilisateur connecté -----
  if (user) {
    return (
      <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 text-center">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Signaler un dépôt de déchets
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Aidez à rendre votre ville plus propre en signalant les zones
          polluées. Chaque signalement compte 🌱
        </p>
        <div className="mt-5 space-y-3">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Bonjour {user.name}, prêt à faire un signalement ? 👇
          </p>
          <div className="flex justify-center">
            {/* Redirige vers le formulaire complet (ReportForm) */}
            <button
              onClick={() => navigate("/report/new")}
              className="bg-primary hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Faire un signalement
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            🚀 Rejoignez les citoyens qui agissent déjà pour leur environnement
          </p>
        </div>
      </div>
    );
  }

  // ----- Utilisateur non connecté -----
  return (
    <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 text-center">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        Signaler un dépôt de déchets
      </h2>
      <p className="text-sm text-gray-500 mt-2">
        Aidez à rendre votre ville plus propre en signalant les zones polluées.
        Chaque signalement compte 🌱
      </p>
      <div className="mt-5 space-y-3">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Pour faire votre 1er signalement, pensez à vous inscrire ou vous
          connecter 👇
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => navigate("/SignIn")}
            className="bg-primary hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Se connecter
          </button>
          <button
            onClick={() => navigate("/SignUp")}
            className="border border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-300 px-5 py-2 rounded-full text-sm font-medium transition-colors"
          >
            S'inscrire
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          🚀 Rejoignez les citoyens qui agissent déjà pour leur environnement
        </p>
      </div>
    </div>
  );
}
