import React from "react";
import {
  Platform,
  Pressable,
  type PressableProps,
  StyleSheet,
  Text,
  type TextStyle,
  View,
  type ViewStyle,
} from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
import { getContrastingTextColor } from "../../utils/colors";

type ThemedButtonProps = PressableProps & {
  title: string;
  textStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  lightColor?: string;
  darkColor?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

export function ThemedButton({
  title,
  textStyle,
  buttonStyle,
  lightColor,
  darkColor,
  iconLeft,
  iconRight,
  disabled,
  ...rest
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor(
    "primary",
    { light: lightColor, dark: darkColor },
  );
  const contrastColor = getContrastingTextColor(backgroundColor);

  const platformShadow = Platform.OS === "ios"
    ? styles.iosShadow
    : styles.androidElevation;

  const finalOpacity = disabled ? 0.5 : 1;

  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor,
          opacity: pressed && !disabled ? 0.95 : finalOpacity,
        },
        platformShadow,
        buttonStyle,
      ]}
      android_ripple={!disabled ? { color: "#ffffff22" } : undefined}
      {...rest}
    >
      <View style={styles.content}>
        {iconLeft && <View style={styles.icon}>{iconLeft}</View>}
        <Text style={[styles.text, { color: contrastColor }, textStyle]}>
          {title}
        </Text>
        {iconRight && <View style={styles.icon}>{iconRight}</View>}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 6,
  },
  iosShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  androidElevation: {
    elevation: 2,
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
