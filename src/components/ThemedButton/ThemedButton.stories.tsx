import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";

import { ThemedButton } from "./ThemedButton";
import { ThemeProvider } from "../../theme/ThemeContext";

const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider>
    <View style={{ padding: 16 }}>
      <Story />
    </View>
  </ThemeProvider>
);

const meta: Meta<typeof ThemedButton> = {
  title: "Components/ThemedButton",
  component: ThemedButton,
  decorators: [withTheme],
  parameters: { noBackground: true },
  argTypes: {
    title: { control: "text" },
    disabled: { control: "boolean" },
    lightColor: { control: "color" },
    darkColor: { control: "color" },
    buttonStyle: { table: { category: "style" } },
    textStyle: { table: { category: "style" } },
    onPress: { action: "onPress" },
    // novos controles:
    iconLeftName: {
      control: "text",
      description: "Nome do ícone (MaterialCommunityIcons)",
    },
    iconRightName: {
      control: "text",
      description: "Nome do ícone (MaterialCommunityIcons)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ThemedButton>;

export const Basic: Story = {
  args: { title: "Tap me" },
};

export const Disabled: Story = {
  args: { title: "Disabled", disabled: true },
};

export const WithIcons: Story = {
  args: {
    title: "With icons",
    iconLeftName: "rocket-launch",
    iconRightName: "arrow-right",
  },
};

export const CustomColors: Story = {
  args: {
    title: "Custom colors",
    lightColor: "#E91E63",
    darkColor: "#F48FB1",
  },
};

export const Styled: Story = {
  args: {
    title: "Styled button",
    buttonStyle: {
      borderRadius: 20,
      paddingVertical: 16,
      paddingHorizontal: 28,
    },
    textStyle: { fontSize: 18, letterSpacing: 1 },
  },
};
