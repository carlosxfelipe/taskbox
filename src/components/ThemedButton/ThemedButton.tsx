import React from "react";
import {
  Platform,
  Pressable,
  type PressableProps,
  StyleSheet,
  View,
  type ViewStyle,
  type TextStyle,
} from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
import { getContrastingTextColor } from "../../utils/colors";
import { Icon, MaterialCommunityIconName } from "../Icon/Icon";
import { ThemedText } from "../ThemedText/ThemedText";

type ThemedButtonProps = PressableProps & {
  title: string;
  textStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  lightColor?: string;
  darkColor?: string;
  iconLeftName?: MaterialCommunityIconName;
  iconRightName?: MaterialCommunityIconName;
};

export function ThemedButton({
  title,
  textStyle,
  buttonStyle,
  lightColor,
  darkColor,
  iconLeftName,
  iconRightName,
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
        {iconLeftName && (
          <View style={styles.icon}>
            <Icon
              name={iconLeftName}
              size={20}
              color={contrastColor}
            />
          </View>
        )}
        <ThemedText
          style={[styles.text, { color: contrastColor }, textStyle]}
          type="defaultSemiBold"
        >
          {title}
        </ThemedText>
        {iconRightName && (
          <View style={styles.icon}>
            <Icon
              name={iconRightName}
              size={20}
              color={contrastColor}
            />
          </View>
        )}
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
