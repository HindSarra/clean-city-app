// Définition des initiatives
const initiatives = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=70",
    tag: "NETTOYAGE",
    title: "Opération Sauvetage du Littoral",
    location: "Marseille",
    slots: "8 places restantes",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=70",
    tag: "VERDURE URBAINE",
    title: "Parc de la ramée",
    location: "Toulouse",
    slots: "45 places restantes",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=70",
    tag: "PLANTATION",
    title: "Forêt Urbaine Solidaire",
    location: "Lyon",
    slots: "12 places restantes",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=70",
    tag: "NETTOYAGE",
    title: "Nettoyage des Berges",
    location: "Bordeaux",
    slots: "5 places restantes",
  },
];

// Couleurs des badges selon le tag
const tagColors: Record<string, string> = {
  NETTOYAGE: "bg-green-100 text-green-800",
  PLANTATION: "bg-yellow-100 text-yellow-800",
  "VERDURE URBAINE": "bg-blue-100 text-blue-800",
};

function Initiatives() {
  return (
    <section className="py-10 px-4 md:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-extrabold dark:text-white">
          Dernières initiatives
        </h2>
        <a
          href="/events"
          className="text-sm font-semibold text-primary hover:underline"
        >
          Voir tout
        </a>
      </div>

      {/* Carrousel scrollable */}
      <div className="max-w-screen-lg mx-auto">
        <div className="flex gap-4 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          {initiatives.map((item) => (
            <div
              key={item.id}
              className="snap-start flex-shrink-0 w-[260px] sm:w-[280px] bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 dark:ring-white/10 cursor-pointer hover:shadow-md transition-shadow"
            >
              {/* Image + badges */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-1 rounded-lg ${
                      tagColors[item.tag] ?? "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Contenu texte */}
              <div className="p-4">
                <h3 className="font-bold text-sm leading-snug dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                  <span>📍</span> {item.location}
                </p>
                <p className="text-xs font-bold text-primary mt-3">
                  {item.slots}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Initiatives;
