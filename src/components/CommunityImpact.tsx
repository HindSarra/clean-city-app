const stats = [
  { label: "Déchets collectés", value: "500 kg", trend: "+12%" },
  { label: "Événements réalisés", value: "120", trend: "+5%" },
  { label: "Membres actifs", value: "2 482", trend: "+18% ce mois" },
];

function CommunityImpact() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Label uppercase centré */}
      <p className="text-center text-[10px] sm:text-xl font-bold tracking-widest text-primary uppercase mb-6 sm:mb-8">
        Notre impact communautaire
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-zinc-800 rounded-2xl p-5 sm:p-6 shadow-sm ring-1 ring-black/5 dark:ring-white/10 flex flex-col gap-1"
          >
            <p className="mt-2 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">
              {stat.label}
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold dark:text-white">
              {stat.value}
            </p>
            <span className="text-green-500 text-xs sm:text-sm font-semibold">
              ↑ {stat.trend}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CommunityImpact;
