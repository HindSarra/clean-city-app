import type { Report } from "../types/TypeReport";

export const mockReport: Report[] = [
  {
    id: "r1",
    title: "Décharge sauvage en forêt",
    description:
      "Mobilier abandonné, sacs poubelles et encombrants déposés en bordure d'un chemin forestier. Volume estimé à 3m³.",
    date: "2026-05-03",
    location: "Forêt de Brocéliande, Bretagne",
    image:
      "https://images.unsplash.com/photo-1664783366257-ed2a579eea86?w=600&auto=format&fit=crop&q=60",
    position: [48.0181, -2.1715],
  },
  {
    id: "r2",
    title: "Déchets plastiques sur plage",
    description:
      "Accumulation de bouteilles plastiques, filets et emballages retrouvés après une marée agitée.",
    date: "2026-05-01",
    location: "Plage de Palavas-les-Flots, Occitanie",
    image:
      "https://images.unsplash.com/photo-1653959551549-5e2975ed9a87?w=600&auto=format&fit=crop&q=60",
    position: [43.5297, 3.9317],
  },
  {
    id: "r3",
    title: "Pneus abandonnés en campagne",
    description:
      "Une quinzaine de pneus usagés déposés illégalement dans un terrain agricole isolé.",
    date: "2026-05-02",
    location: "Aux alentours de Limoges, Nouvelle-Aquitaine",
    image:
      "https://plus.unsplash.com/premium_photo-1731174578639-0174480a5397?q=80&w=1170&auto=format&fit=crop",
    position: [45.8336, 1.2611],
  },
  {
    id: "r4",
    title: "Dépôt sauvage de gravats",
    description:
      "Tas de briques, béton et plâtre abandonnés près d'une zone boisée. Végétation endommagée.",
    date: "2026-04-25",
    location: "Périphérie de Grenoble, Auvergne-Rhône-Alpes",
    image:
      "https://images.unsplash.com/photo-1673203300654-d973e8944910?q=80&w=1170&auto=format&fit=crop",
    position: [45.1885, 5.7245],
  },
  {
    id: "r5",
    title: "Canettes et déchets dans un parc",
    description:
      "Grand nombre de canettes, sacs plastiques et cartons laissés après un rassemblement nocturne.",
    date: "2026-04-19",
    location: "Parc de la Tête d'Or, Lyon",
    image:
      "https://images.pexels.com/photos/14224332/pexels-photo-14224332.jpeg",
    position: [45.7797, 4.8559],
  },
  {
    id: "r6",
    title: "Déversement suspect près d'un lac",
    description:
      "Liquide blanchâtre observé près des berges avec poissons morts signalés par des riverains.",
    date: "2026-04-18",
    location: "Lac d'Annecy, Haute-Savoie",
    image:
      "https://images.pexels.com/photos/27798146/pexels-photo-27798146.jpeg",
    position: [45.8992, 6.1294],
  },
  {
    id: "r7",
    title: "Encombrants abandonnés en ville",
    description:
      "Matelas, meubles cassés et électroménager déposés illégalement sur un trottoir.",
    date: "2026-04-15",
    location: "Centre-ville de Marseille, Provence-Alpes-Côte d'Azur",
    image:
      "https://images.pexels.com/photos/29359069/pexels-photo-29359069.jpeg",
    position: [43.2965, 5.3698],
  },
  {
    id: "r8",
    title: "Pollution dans une rivière",
    description:
      "Eau trouble avec présence de déchets flottants et odeur inhabituelle signalée.",
    date: "2026-04-12",
    location: "Bords de Loire à Nantes, Pays de la Loire",
    image:
      "https://images.pexels.com/photos/14224332/pexels-photo-14224332.jpeg",
    position: [47.2184, -1.5536],
  },
];
