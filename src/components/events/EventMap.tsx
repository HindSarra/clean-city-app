import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Event } from "../../types/TypeEvent";

interface Props {
  events: Event[];
  isLoading?: boolean;
}

export default function EventMap({ events, isLoading }: Props) {
  if (isLoading) return <p>Chargement...</p>;

  return (
    <MapContainer
      center={[48.8566, 2.3522]}
      zoom={12}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {events
        .filter((e) => e.position)
        .map((event) => (
          <Marker key={event.id} position={event.position!}>
            <Popup>
              <b>{event.title}</b>
              <br />
              {event.location}
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}
