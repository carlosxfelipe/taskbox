import React, { createContext, useContext, useMemo } from "react";
import { useColorScheme } from "react-native";

export type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
ThemeContext.displayName = "ThemeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
  disableDarkMode?: boolean;
};

export function ThemeProvider(
  { children, disableDarkMode = false }: ThemeProviderProps,
) {
  const system = (useColorScheme() ?? "light") as Theme;
  const effectiveTheme: Theme = disableDarkMode ? "light" : system;

  const value = useMemo(() => ({ theme: effectiveTheme }), [effectiveTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
