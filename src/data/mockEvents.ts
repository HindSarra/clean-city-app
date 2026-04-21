// src/data/mockEvents.ts
import type { Event } from "../types/TypeEvent";

export const mockEvents: Event[] = [
  // ── À VENIR ──────────────────────────────────────────────────
  {
    id: "evt-001",
    title: "Plantation Parc des Buttes-Chaumont",
    description:
      "Rejoignez-nous pour planter des espèces végétales locales. Matériel fourni, venez avec votre bonne humeur et des gants si possible !",
    location: "Buttes-Chaumont, Paris 19e",
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    tag: "PLANTATION",
    position: [48.879, 2.3811],
    slotsTotal: 24,
    slotsTaken: 17,
    status: "upcoming",
  },
  {
    id: "evt-002",
    title: "Nettoyage Canal Saint-Martin",
    description:
      "Grande opération de nettoyage des berges. Sacs poubelles et gants fournis. Une action concrète pour préserver ce lieu iconique.",
    location: "Canal Saint-Martin, Paris 10e",
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tag: "NETTOYAGE",
    position: [48.8719, 2.3622],
    slotsTotal: 30,
    slotsTaken: 28,
    status: "upcoming",
  },
  {
    id: "evt-003",
    title: "Opération Sauvetage du Littoral",
    description:
      "Nettoyage des plages et des fonds marins proches du littoral marseillais. Matériel de plongée disponible pour les certifiés.",
    location: "Marseille",
    date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    tag: "NETTOYAGE",
    position: [43.2965, 5.3698],
    slotsTotal: 20,
    slotsTaken: 5,
    status: "upcoming",
  },
  {
    id: "evt-004",
    title: "Plantation de la forêt urbaine",
    description:
      "Installez votre premier composteur de quartier et repartez avec des conseils pratiques pour un Paris plus vert.",
    location: "Paris",
    date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
    tag: "VERDURE URBAINE",
    position: [48.8566, 2.3522],
    slotsTotal: 20,
    slotsTaken: 0,
    status: "upcoming",
  },

  // ── PASSÉS ───────────────────────────────────────────────────
  {
    id: "evt-005",
    title: "Parc de la Ramée",
    description:
      "Réaménagement du parc avec plantation d'arbustes locaux et création d'un espace de biodiversité. Un beau succès collectif pour Toulouse.",
    location: "Toulouse",
    date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
    tag: "VERDURE URBAINE",
    position: [43.6047, 1.4442],
    slotsTotal: 75,
    slotsTaken: 68,
    status: "past",
    imgBefore:
      "https://images.unsplash.com/photo-1659998755399-e63bbd03707a?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAfter:
      "https://images.pexels.com/photos/11529940/pexels-photo-11529940.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    kgCollected: 120,
  },
  {
    id: "evt-006",
    title: "Forêt Urbaine Solidaire",
    description:
      "50 bénévoles ont planté plus de 200 arbres en une journée dans le quartier de la Confluence. Un record pour notre association !",
    location: "Lyon",
    date: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
    tag: "PLANTATION",
    position: [45.764, 4.8357],
    slotsTotal: 50,
    slotsTaken: 50,
    status: "past",
    imgBefore:
      "https://images.unsplash.com/photo-1542601906897-24f80f288765?w=600&q=80",
    imgAfter:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
    kgCollected: 280,
  },
  {
    id: "evt-007",
    title: "Nettoyage des Berges de Garonne",
    description:
      "Les berges de la Garonne retrouvent leur éclat grâce à nos 25 bénévoles qui ont collecté près de 80 kg de déchets en une matinée.",
    location: "Bordeaux",
    date: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    tag: "NETTOYAGE",
    position: [44.8378, -0.5792],
    slotsTotal: 25,
    slotsTaken: 25,
    status: "past",
    imgBefore:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80",
    imgAfter:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    kgCollected: 80,
  },
  {
    id: "evt-008",
    title: "Verdurisation Marché d'Aligre",
    description:
      "Installation de jardinières et de murs végétaux. Commerçants et habitants ont travaillé main dans la main pour créer un espace plus agréable.",
    location: "Paris 12e",
    date: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString(),
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
    tag: "VERDURE URBAINE",
    position: [48.849, 2.384],
    slotsTotal: 25,
    slotsTaken: 22,
    status: "past",
    imgBefore:
      "https://images.unsplash.com/photo-1459255418009-2574f4f96153?w=600&q=80",
    imgAfter:
      "https://images.unsplash.com/photo-1659998755399-e63bbd03707a?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    kgCollected: 45,
  },
];
