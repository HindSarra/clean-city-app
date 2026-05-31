import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Report } from "../../types/TypeReport";

interface Props {
  reports: Report[];
  isLoading?: boolean; // Affiche un skeleton pendant le chargement API
}

// Icône personnalisée via divIcon pour éviter le bug Leaflet/Vite
// (les icônes PNG par défaut de Leaflet cassent avec les bundlers modernes)
const pinIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width:20px;
      height:20px;
      border-radius:50%;
      background:#3B6D11;
      border:3px solid white;
      box-shadow:0 2px 8px rgba(0,0,0,.25)
    "></div>
  `,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

// Calcule la moyenne géographique des positions pour centrer la carte
// Évite de coder en dur Paris ou une ville fixe
function computeCenter(reports: Report[]): [number, number] {
  if (!reports.length) return [46.2276, 2.2137]; // Centre France par défaut
  const avg = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;
  return [
    avg(reports.map((r) => r.position[0])),
    avg(reports.map((r) => r.position[1])),
  ];
}

export default function ReportMap({ reports, isLoading }: Props) {
  // ----- État de chargement -----
  if (isLoading) {
    return (
      <section className="max-w-5xl mx-auto px-4 pt-8 pb-8">
        <div className="h-[600px] w-full rounded-xl bg-gray-100 dark:bg-zinc-800 animate-pulse flex items-center justify-center">
          <p className="text-gray-400 text-sm">Chargement de la carte…</p>
        </div>
      </section>
    );
  }

  const center = computeCenter(reports);

  return (
    <section>
      {/* pt-8 (pas pt-16) : ReportPage a déjà mt-20 sur le conteneur parent */}
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-8 space-y-6">
        <div>
          <h2 className="text-3xl font-black">Carte des signalements</h2>
          <p className="text-gray-500 mt-2">
            Découvrez les déchets autour de vous
          </p>
        </div>

        {/* position: relative nécessaire pour l'overlay "état vide" */}
        <div className="relative inset-0 z-0">
          <MapContainer
            center={center}
            zoom={reports.length === 1 ? 14 : 6} // Zoom adapté si un seul point
            className="h-[600px] w-full rounded-xl"
          >
            {/* Fond de carte CartoDB Light — sobre et moderne */}
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

            {/* Marqueurs — filtrés pour exclure les reports sans position */}
            {reports
              .filter((r) => r.position)
              .map((r) => (
                <Marker key={r.id} position={r.position} icon={pinIcon}>
                  <Popup maxWidth={220}>
                    {r.image && (
                      <img
                        src={r.image}
                        alt={r.title}
                        style={{
                          width: "100%",
                          height: "100px",
                          objectFit: "cover",
                          borderRadius: "6px",
                          marginBottom: "8px",
                          display: "block",
                        }}
                      />
                    )}
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "13px",
                        marginBottom: "4px",
                      }}
                    >
                      {r.title}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#6b7280",
                        marginBottom: "4px",
                      }}
                    >
                      {r.description}
                    </p>
                    <p style={{ fontSize: "11px", color: "#9ca3af" }}>
                      {r.location}
                    </p>
                  </Popup>
                </Marker>
              ))}
          </MapContainer>

          {/* Overlay "état vide" — affiché par-dessus la carte si aucun report */}
          {reports.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/70 dark:bg-zinc-900/70 rounded-xl z-[999]">
              <p className="text-gray-500 text-sm">
                Aucun signalement pour le moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
