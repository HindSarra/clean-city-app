import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  dark: boolean;
  toggleDark: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      dark: false,
      toggleDark: () => {
        const next = !get().dark;
        set({ dark: next });

        document.documentElement.classList.toggle("dark", next);
      },
    }),
    {
      name: "cleancity-theme", // clé dans localStorage
      onRehydrateStorage: () => (state) => {
        if (state?.dark) {
          document.documentElement.classList.add("dark");
        }
      },
    },
  ),
);
