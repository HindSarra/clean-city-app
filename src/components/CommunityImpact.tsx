function CommunityImpact() {
  return (
    <section className="py-16 px-5 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-10">
        Notre impact communautaire
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white rounded-xl p-6 w-full sm:w-[200px] shadow-md">
          <h3 className="text-sm text-gray-500 mb-2">Déchets collectés</h3>
          <p className="text-2xl font-bold">500 kg</p>
          <span className="text-green-500 text-sm">+12%</span>
        </div>

        <div className="bg-white rounded-xl p-6 w-full sm:w-[200px] shadow-md">
          <h3 className="text-sm text-gray-500 mb-2">Événements réalisés</h3>
          <p className="text-2xl font-bold">120</p>
          <span className="text-green-500 text-sm">+5%</span>
        </div>

        <div className="bg-white rounded-xl p-6 w-full sm:w-[200px] shadow-md">
          <h3 className="text-sm text-gray-500 mb-2">Membres actifs</h3>
          <p className="text-2xl font-bold">325</p>
          <span className="text-green-500 text-sm">+18% ce mois</span>
        </div>
      </div>
    </section>
  );
}
export default CommunityImpact;
