import heroImg from "../../assets/header-img.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      {/* HERO FULLSCREEN */}
      <section className="relative h-screen w-full">
        {/* Image */}
        <img
          src={heroImg}
          alt="CleanCity – action de nettoyage"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Contenu */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-screen-md px-6 text-white">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Rejoins le mouvement{" "}
              <span className="text-primary">CleanCity</span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg text-white/90">
              Ta ville, ta planète, ton impact. Ensemble, rendons nos espaces
              plus propres grâce à l’action collective.
            </p>

            <Link
              to="/signup"
              className="mt-8 inline-flex rounded-2xl bg-primary px-8 py-4 text-sm font-extrabold text-black shadow-lg hover:opacity-90"
            >
              Commencer
            </Link>
          </div>
        </div>
      </section>

      {/* SECTIONS APRÈS LE HERO */}
      <section className="py-16">{/* impact, stats, etc */}</section>
    </main>
  );
}
