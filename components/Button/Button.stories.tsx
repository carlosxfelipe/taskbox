import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Click Me",
    onPress: () => alert("Button Pressed!"),
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomStyle: Story = {
  args: {
    style: { backgroundColor: "green" },
    textStyle: { color: "white", fontSize: 20 },
    label: "Custom Button",
  },
};
