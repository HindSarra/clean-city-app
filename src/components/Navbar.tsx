import { Link } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50">
      {/* bar de navigation*/}
      <div className=" mx-auto mt-4 w-[80%]  rounded-3xl bg-white/50 backdrop-blur-md shadow-sm ring-1 ring-black/2">
        <div className="mx-automax-w-screen-md px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo + nom de app web */}
            <Link to="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-2xl bg-primary grid place-items-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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

              <span className="font-extrabold tracking-tight">CleanCity</span>
            </Link>

            {/* Navigation desktop */}
            <div className="hidden md:flex items-center  gap-4 rounded-2xl bg-white/70 p-1  ring-1 ring-black/5">
              <Link
                to="/events"
                className="rounded-xl px-3 py-2 text-sm font-semibold text-[rgb(var(--text-secondary))] hover:bg-black/5"
              >
                Événements
              </Link>
              <Link
                to="/report"
                className="rounded-xl px-3 py-2 text-sm font-semibold text-[rgb(var(--text-secondary))] hover:bg-black/5"
              >
                Signaler un déchet
              </Link>
            </div>

            {/* action de menu deroulant  */}
            <div className="flex items-center gap-2">
              {/* Desktop */}
              <Link
                to="/signin"
                className="hidden md:inline-flex rounded-2xl bg-white px-4 py-2 text-sm font-semibold ring-1 ring-black/10 hover:bg-gray-50"
              >
                Se connecter
              </Link>
              <Link
                to="/signup"
                className="hidden md:inline-flex rounded-2xl bg-primary px-4 py-2 text-sm font-extrabold text-black shadow-md hover:opacity-90"
              >
                S’inscrire
              </Link>
              {/*  bouton menu */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-black/10"
                aria-label="Ouvrir le menu"
              >
                <div className="space-y-1">
                  <span className="block h-0.5 w-5 bg-black" />
                  <span className="block h-0.5 w-5 bg-black" />
                  <span className="block h-0.5 w-5 bg-black" />
                </div>
              </button>
            </div>
          </div>

          {/* Petit Ecran*/}
          {open && (
            <div className="md:hidden pb-4">
              <div className="mt-3 rounded-3xl bg-white/80 p-3 ring-1 ring-black/5">
                <div className="grid gap-2">
                  <Link
                    to="/events"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold bg-white/70 hover:bg-black/5"
                  >
                    Événements
                  </Link>
                  <Link
                    to="/report"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold bg-white/70 hover:bg-black/5"
                  >
                    Signaler un déchet
                  </Link>
                  <div className="h-px w-full bg-black/10" />
                  <Link
                    to="/signin"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold bg-white ring-1 ring-black/10"
                  >
                    Se connecter
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-extrabold bg-primary text-black shadow-md hover:opacity-90"
                  >
                    S’inscrire
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
