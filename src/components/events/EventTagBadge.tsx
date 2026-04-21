import React from "react";
import type { EventTag } from "../../types/TypeEvent";

interface Props {
  tag: EventTag;
}

export const EventTagBadge: React.FC<Props> = ({ tag }) => {
  let styles = "bg-gray-100 text-gray-700";

  if (tag === "NETTOYAGE") {
    styles = "bg-green-100 text-green-800";
  } else if (tag === "PLANTATION") {
    styles = "bg-amber-100 text-amber-800";
  } else if (tag === "VERDURE URBAINE") {
    styles = "bg-blue-100 text-blue-800";
  }

  return (
    <span className={`text-xs font-bold px-2 py-1 rounded ${styles}`}>
      {tag}
    </span>
  );
};
