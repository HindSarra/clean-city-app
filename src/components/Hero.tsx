import { Link } from "react-router-dom";
import heroImg from "../assets/header-img.jpg";

function Hero() {
  return (
    <section className="relative h-screen w-full ">
      {/* Image */}

      <img
        src={heroImg}
        alt="CleanCity – action de nettoyage"
        className="absolute top-1/2 left-1/2 h-[80%] w-[90%] object-cover -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-lg"
      />
      {/* Overlay */}
      <div className="absolute top-1/2 left-1/2 h-[80%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gradient-to-t from-black/40 via-black/70 to-transparent" />
      {/* Contenu */}
      <div className="relative z-10 flex h-full items-center ">
        <div className="mx-auto max-w-screen-md px-6 text-white ">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Rejoins le mouvement <span className="text-primary">CleanCity</span>
          </h1>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-white/90">
            Ta ville, ta planète, ton impact. Ensemble, rendons nos espaces plus
            propres grâce à l’action collective.
          </p>

          <Link
            to="/clean-city-app/src/pages/authentification/SignUp.tsx"
            className="mt-8 inline-flex rounded-2xl bg-primary px-8 py-4 text-sm font-extrabold text-black shadow-lg hover:opacity-90"
          >
            Commencer
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
