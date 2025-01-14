import { View } from "react-native";

const noBgColor = "#26c6da";

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
      <View
        style={{
          flex: 1,
          backgroundColor:
            parameters.noBackground === true ? undefined : "white",
          padding: 8,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default preview;
