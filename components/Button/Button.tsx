import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

type ButtonProps = {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  style,
  textStyle,
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
    <Text style={[styles.text, textStyle]}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6200ee",
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
    backgroundColor: "#a1a1a1",
  },
});

export default Button;
