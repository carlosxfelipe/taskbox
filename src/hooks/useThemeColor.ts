import { useTheme } from "../theme/ThemeContext";

type Colors = {
  light?: string;
  dark?: string;
};

export type ThemeColorName =
  | "text"
  | "background"
  | "primary"
  | "onPrimary"
  | "secondary"
  | "onSecondary"
  | "surface"
  | "onSurface"
  | "surfaceVariant"
  | "outline"
  | "error"
  | "onError"
  | "warning"
  | "onWarning"
  | "success"
  | "onSuccess"
  | "inverseSurface"
  | "inverseOnSurface"
  | "header"
  | "bottom"
  | "placeholder"
  | "inputBackground"
  | "star"
  | "favorite";

const defaultColors: Record<ThemeColorName, { light: string; dark: string }> = {
  text: {
    light: "#1C1B1F",
    dark: "#E6E1E5",
  },
  background: {
    light: "#FFFFFF",
    dark: "#1C1B1F",
  },
  primary: {
    light: "#6750A4",
    dark: "#D0BCFF",
  },
  onPrimary: {
    light: "#FFFFFF",
    dark: "#381E72",
  },
  secondary: {
    light: "#625B71",
    dark: "#CCC2DC",
  },
  onSecondary: {
    light: "#FFFFFF",
    dark: "#332D41",
  },
  surface: {
    light: "#FFFBFE",
    dark: "#1C1B1F",
  },
  onSurface: {
    light: "#1C1B1F",
    dark: "#E6E1E5",
  },
  surfaceVariant: {
    light: "#E7E0EC",
    dark: "#49454F",
  },
  outline: {
    light: "#79747E",
    dark: "#938F99",
  },
  error: {
    light: "#B3261E",
    dark: "#F2B8B5",
  },
  onError: {
    light: "#FFFFFF",
    dark: "#601410",
  },
  warning: {
    light: "#E65100",
    dark: "#FFB74D",
  },
  onWarning: {
    light: "#FFFFFF",
    dark: "#3D1E00",
  },
  success: {
    light: "#2E7D32",
    dark: "#A5D6A7",
  },
  onSuccess: {
    light: "#FFFFFF",
    dark: "#0B2312",
  },
  inverseSurface: {
    light: "#313033",
    dark: "#E6E1E5",
  },
  inverseOnSurface: {
    light: "#F4EFF4",
    dark: "#1C1B1F",
  },
  header: {
    light: "#FFFFFF",
    dark: "#1C1B1F",
  },
  bottom: {
    light: "#FFFFFF",
    dark: "#1C1B1F",
  },
  placeholder: {
    light: "#00000066",
    dark: "#ffffff99",
  },
  inputBackground: {
    light: "#00000008",
    dark: "#ffffff0f",
  },
  star: {
    light: "#FFD700",
    dark: "#FFCF33",
  },
  favorite: {
    light: "#EF4444",
    dark: "#F87171",
  },
};

export function useThemeColor(
  colorName: ThemeColorName,
  props?: Colors,
) {
  const { theme } = useTheme();
  return props?.[theme] ?? defaultColors[colorName][theme];
}
