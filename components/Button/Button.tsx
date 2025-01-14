import React, { ReactNode } from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";

type ButtonProps = {
  onPress: () => void;
  style?: ViewStyle;
  children: ReactNode;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onPress,
  style,
  children,
  disabled = false,
}) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      styles.button,
      style,
      pressed && styles.pressed,
      disabled && styles.disabled,
    ]}
    disabled={disabled}
  >
    {children}
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#e41e2b",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
  disabled: {
    backgroundColor: "#717171",
  },
});

export default Button;
