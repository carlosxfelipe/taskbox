import { Linking, View } from "react-native";
import { ThemedText } from "../components/ThemedText/ThemedText";
import { useThemeColor } from "../hooks/useThemeColor";

const StarterComponent = () => {
  const linkColor = useThemeColor("primary");

  return (
    <View style={{ padding: 16 }}>
      <ThemedText>
        Obrigado por experimentar o Storybook, siga o{" "}
        <ThemedText
          style={{
            color: linkColor,
            textDecorationColor: linkColor,
          }}
          type="link"
          onPress={() =>
            Linking.openURL(
              "https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/",
            )}
        >
          tutorial
        </ThemedText>{" "}
        para aprender a criar suas próprias histórias
      </ThemedText>
    </View>
  );
};

const meta = {
  title: "Welcome",
  component: StarterComponent,
};

export default meta;

export const GettingStarted = {
  args: {},
  parameters: {
    noBackground: true,
  },
};
