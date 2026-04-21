import { Link } from "react-router-dom";

export function Footer() {
  return (
    // footer
    <footer className=" border-t border-black/5 dark:border-white/10 py-8 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-screen-md mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="h-7 w-7 rounded-xl bg-primary grid place-items-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 4C13 4 6 8 6 15c0 3.5 2.5 5 6 5 7 0 8-7 8-16Z"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M6 20c1-4 5-7 10-9"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="font-extrabold text-sm dark:text-white">
            CleanCity
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 dark:text-gray-400 mb-4">
          © {new Date().getFullYear()} CleanCity. Tous droits réservés.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            to="/events"
            className="text-xs text-gray-400 dark:text-gray-300 hover:text-primary transition-colors"
          >
            Événements
          </Link>
          <Link
            to="/report"
            className="text-xs text-gray-400 dark:text-gray-300 hover:text-primary transition-colors"
          >
            Signaler un déchet
          </Link>
        </div>
      </div>
    </footer>
  );
}
