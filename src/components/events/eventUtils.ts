export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-FR");

export const getRemainingSlots = (taken: number, total: number) =>
  total - taken;
