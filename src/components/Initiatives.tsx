import { Link } from "react-router-dom";
import { useEvents } from "../hooks/useEvents";
import { EventCarousel } from "./events/EventCarousel";

export default function Initiatives() {
  const { upcomingEvents, isLoading } = useEvents();

  return (
    <section className="py-10 px-4 md:px-8 max-w-screen-lg mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold dark:text-white">
          Initiatives à venir
        </h2>

        <Link
          to="/events"
          className="text-sm font-semibold text-primary hover:underline"
        >
          Voir tout →
        </Link>
      </div>

      {/* Carousel */}
      <EventCarousel events={upcomingEvents} isLoading={isLoading} />
    </section>
  );
}
