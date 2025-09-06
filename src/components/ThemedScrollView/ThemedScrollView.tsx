import { ScrollView, type ScrollViewProps } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";

export type ThemedScrollViewProps = ScrollViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedScrollView(
  { style, lightColor, darkColor, ...otherProps }: ThemedScrollViewProps,
) {
  const backgroundColor = useThemeColor(
    "background",
    { light: lightColor, dark: darkColor },
  );

  return <ScrollView style={[{ backgroundColor }, style]} {...otherProps} />;
}
