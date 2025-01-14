import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    onPress: () => alert("Button Pressed!"),
    disabled: false,
    children: (
      <Text style={{ color: "#ffffff", fontWeight: "bold" }}>Button</Text>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <Text style={{ color: "#bfbfbf", fontWeight: "bold" }}>Disabled</Text>
    ),
  },
};

export const CustomStyle: Story = {
  args: {
    style: {
      backgroundColor: "black",
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    children: (
      <Text style={{ color: "#ffffff", fontWeight: "bold" }}>Custom</Text>
    ),
  },
};

export const WithIcon: Story = {
  args: {
    style: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 20,
      // justifyContent: "center",
    },
    children: (
      <>
        <FontAwesome
          name="check"
          size={16}
          color="#ffffff"
          style={{ marginRight: 8 }}
        />
        <Text style={{ color: "#ffffff", fontWeight: "bold" }}>Button</Text>
      </>
    ),
  },
};
