import { Link } from "react-router-dom";
import heroImg from "../assets/header-img.jpg";

function Hero() {
  return (
    <section className="relative h-screen w-full">
      <img
        src={heroImg}
        alt="CleanCity – action de nettoyage"
        className="absolute top-1/2 left-1/2 h-[85%] w-[92%] md:w-[80%] object-cover -translate-x-1/2 -translate-y-1/2 rounded-3xl shadow-xl"
      />

      <div className="absolute top-1/2 left-1/2 h-[85%] w-[92%] md:w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="relative z-10 flex h-full items-end justify-center pb-16 md:pb-24">
        <div className="text-center text-white px-6 max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Rejoins le mouvement
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/85">
            Ta ville, ta planète, ton impact. Aide-nous à garder notre
            communauté propre et durable grâce à l'action collective.
          </p>
          <Link
            to="/signup"
            className="mt-8 inline-flex rounded-full bg-primary px-10 py-4 text-base font-extrabold text-black shadow-xl hover:opacity-90 transition-opacity"
          >
            Commencer
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
