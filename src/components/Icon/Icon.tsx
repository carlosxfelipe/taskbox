import React, { ComponentProps } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type MaterialCommunityIconName = ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

type IconProps = {
  name: MaterialCommunityIconName;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};

export function Icon({
  name,
  size = 24,
  color = "black",
  style,
}: IconProps) {
  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color}
      style={style}
    />
  );
}
