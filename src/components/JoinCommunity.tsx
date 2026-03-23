import { Link } from "react-router-dom";

function JoinCommunity() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
      <div
        className="
        mx-auto w-full
        max-w-sm sm:max-w-md md:max-w-lg
        bg-green-50 dark:bg-zinc-800
        rounded-2xl sm:rounded-3xl
        p-6 sm:p-8 md:p-10
        text-center
        ring-1 ring-green-200 dark:ring-white/10
        shadow-sm
      "
      >
        <div
          className="
          mx-auto
          h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18
          rounded-full bg-primary
          flex items-center justify-center
          shadow-lg
        "
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            className="sm:w-7 sm:h-7"
          >
            <circle cx="12" cy="8" r="4" stroke="black" strokeWidth="2" />
            <path
              d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M19 11v6M16 14h6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Titre */}
        <h2
          className="
          mt-4 sm:mt-5
          text-xl sm:text-2xl md:text-3xl
          font-extrabold leading-snug
          text-zinc-900 dark:text-white
        "
        >
          Prêt à faire la <br className="hidden sm:block" />
          différence ?
        </h2>

        {/* Description */}
        <p
          className="
          mt-2.5 sm:mt-3
          text-xs sm:text-sm md:text-base
          text-gray-500 dark:text-gray-400
          leading-relaxed
          max-w-xs sm:max-w-sm mx-auto
        "
        >
          Rejoins 2 000+ voisins qui nettoient déjà leurs quartiers.
          L'inscription prend 1 minute.
        </p>

        {/* Bouton Call to action */}
        <Link
          to="/signup"
          className="
            mt-5 sm:mt-6 block w-full
            rounded-full bg-primary
            px-8 py-3.5 sm:py-4
            text-sm sm:text-base
            font-extrabold text-black
            shadow-md hover:opacity-90 active:scale-95
            transition-all duration-150
          "
        >
          S'inscrire pour participer
        </Link>

        {/* Sous-texte */}
        <p
          className="
          mt-3
          text-[9px] sm:text-[10px]
          tracking-widest uppercase
          text-gray-400 dark:text-gray-500
          font-semibold
        "
        >
          Gratuit • Récompenses incluses
        </p>
      </div>
    </section>
  );
}

export default JoinCommunity;
