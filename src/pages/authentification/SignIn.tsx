import { Link } from "react-router-dom";
import heroImg from "../../assets/header-img.jpg";

export default function SignIn() {
  return (
    <div className="relative h-full w-full">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img src={heroImg} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-main px-4">
        {/* Card */}
        <div className="w-full max-w-sm sm:max-w-md bg-card backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl">
          <div className="p-6 sm:p-8 text-main">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              Connexion
            </h2>
            <p className="text-center text-sm text-main/60 mb-6">
              Bon retour 👋
            </p>

            {/* Form */}
            <form className="space-y-4">
              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-main/40 border border-white/5
                focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
                placeholder:text-main/40  transition-all duration-200"
                />
              </div>

              {/* Password */}
              <div>
                <input
                  type="password"
                  placeholder="Mot de passe"
                  className="w-full px-4 py-3 rounded-lg bg-main/40 border border-white/10 
                focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
                placeholder:text-main/40 transition"
                />
              </div>

              {/* Forgot password */}
              <div className="text-right">
                <a
                  href="#"
                  className="text-xs text-main/50 hover:text-primary transition"
                >
                  Mot de passe oublié ?
                </a>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary hover:bg-primary-dark 
              text-black font-semibold transition-all duration-200 active:scale-[0.98]"
              >
                Se connecter
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-xs text-main/40">OU</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            {/* Signup */}
            <p className="text-center text-sm text-main/60">
              Pas encore de compte ?{" "}
              <Link
                to="/signup"
                className="text-primary font-semibold hover:underline"
              >
                S'inscrire
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
