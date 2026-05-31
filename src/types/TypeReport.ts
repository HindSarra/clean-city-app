// ----- Types énumérés -----

// Catégorie du signalement (à afficher en filtre sur la carte plus tard)
export type ReportType = "dechets" | "decharge" | "pollution" | "chimique";

// Statut du signalement (géré côté back-end)
// "pending"  → signalement en attente de traitement
// "resolved" → signalement traité / zone nettoyée
export type ReportStatus = "pending" | "resolved";

// Niveau d'urgence estimé par l'utilisateur ou l'admin
export type ReportUrgency = "faible" | "moderee" | "haute" | "critique";

// ----- Interface principale -----

// Représente un signalement tel que retourné par l'API (ou mocké)
export interface Report {
  id: string;
  title: string;
  description: string;
  image?: string; // URL de la photo (optionnelle)
  date: string; // Format ISO "YYYY-MM-DD"
  location: string; // Nom lisible du lieu
  position: [number, number]; // [latitude, longitude] pour Leaflet

  // Champs optionnels — à remplir quand l'API sera branchée
  type?: ReportType;
  status?: ReportStatus;
  urgency?: ReportUrgency;
}

// ----- Interface formulaire -----

// Données soumises par l'utilisateur via ReportForm
// Différence avec Report : pas d'id (généré côté serveur),
// pas de status (défini côté serveur à "pending" par défaut)
export interface ReportFormData {
  title: string;
  address: string; // Adresse saisie ou remplie via géoloc
  description: string;
  image?: string; // Base64 de la photo uploadée
  date: string;
  position?: [number, number]; // Rempli automatiquement par la géoloc
  type?: ReportType;
  urgency?: ReportUrgency;
}
