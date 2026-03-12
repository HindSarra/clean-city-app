export function Footer() {
  {
    // Footer
  }
  return (
    <footer className="mt-24">
      <div className="max-auto">
        <div className="bg-gradient-to-b from-black/[0.04] to-black/[0.02] shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
          <div className="mx-auto w-[80%] max-w-6xl py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* texte gauche  */}
            <div>
              <div className="font-extrabold  tracking-tight text-gray-900">
                CleanCity
              </div>
              <p className="mt-2 max-w-sm text-sm text-gray-600">
                Plateforme citoyenne pour signaler les déchets et agir
                localement.
              </p>
            </div>
            {/* texte droite  */}
            <div className="text-sm text-gray-700">
              <span className="font-semibold">Contact :</span>{" "}
              <a
                href="mailto:contact@cleancity.fr"
                className="underline underline-offset-4 hover:text-gray-900"
              >
                contact@cleancity.fr
              </a>
            </div>
          </div>
          <div className="pb-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} CleanCity
          </div>
        </div>
      </div>
    </footer>
  );
}
// import "./Footer.css";
// import logo from "../../assets/logo-cleancity.png";

// function Footer() {
//   return (
//     <footer className="footer">
//       <img src={logo} alt="CleanCity logo" />

//       <p>© 2024 CleanCity. Tous droits réservés.</p>

//       <div className="links">
//         <a href="#">Confidentialité</a>
//         <a href="#">Conditions</a>
//         <a href="#">Contact</a>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
