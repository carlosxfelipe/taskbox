import React from "react";
import { View } from "react-native";
import { ThemeProvider, useTheme } from "../src/theme/ThemeContext";

/** @type{import("@storybook/react").Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story, { parameters }) => (
      <ThemeProvider>
        <ThemedContainer noBackground={parameters.noBackground}>
          <Story />
        </ThemedContainer>
      </ThemeProvider>
    ),
  ],
};

function ThemedContainer({ children, noBackground }) {
  const { theme } = useTheme();
  const bg = theme === "dark" ? "#121212" : "#ffffff"; // ajuste as cores como quiser

  return (
    <View style={{ flex: 1, backgroundColor: noBackground ? undefined : bg, padding: 8 }}>
      {children}
    </View>
  );
}

export default preview;
