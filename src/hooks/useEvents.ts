import { useQuery } from "@tanstack/react-query";
import { eventService } from "./eventService";

export const useEvents = () => {
  const query = useQuery({
    queryKey: ["events"],
    queryFn: eventService.getAll,
    staleTime: 5 * 60 * 1000,
  });

  const events = query.data ?? [];

  return {
    isLoading: query.isLoading,
    isError: query.isError,
    events,
    upcomingEvents: events.filter((e) => e.status === "upcoming"),
    pastEvents: events.filter((e) => e.status === "past"),
    refetch: query.refetch,
  };
};
