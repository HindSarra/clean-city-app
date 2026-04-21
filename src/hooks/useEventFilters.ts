// src/hooks/useEventFilters.ts
import { useState, useMemo } from "react";
import type { Event, EventTag } from "../types/TypeEvent";

export const useEventFilters = (upcomingEvents: Event[]) => {
  const [activeTags, setActiveTags] = useState<EventTag[]>([]);
  const [searchCity, setSearchCity] = useState("");

  const filteredUpcoming = useMemo(() => {
    return upcomingEvents.filter((event) => {
      const matchTag =
        activeTags.length === 0 || activeTags.includes(event.tag);
      const matchCity =
        searchCity.trim() === "" ||
        event.location.toLowerCase().includes(searchCity.toLowerCase());
      return matchTag && matchCity;
    });
  }, [upcomingEvents, activeTags, searchCity]);

  const toggleTag = (tag: EventTag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const reset = () => {
    setActiveTags([]);
    setSearchCity("");
  };

  const hasActiveFilters = activeTags.length > 0 || searchCity.trim() !== "";

  return {
    activeTags,
    searchCity,
    hasActiveFilters,
    filteredUpcoming,
    filteredCount: filteredUpcoming.length,
    toggleTag,
    setSearchCity,
    reset,
  };
};
