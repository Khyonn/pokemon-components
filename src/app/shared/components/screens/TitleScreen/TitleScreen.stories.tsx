import { ComponentMeta, ComponentStory } from "@storybook/react";
import TitleScreen from ".";
import OverworldHero from "../../Characters/OverworldHero";
import StaticText from "../../Texts/StaticText";

export default {
  title: "Screens/Title screen",
  component: TitleScreen,
  argTypes: {
    style: { table: { disable: true } },
    title: {
      defaultValue: "Pokémon",
      description: "The title that would be displayed",
      type: { required: true },
    },
    children: {
      control: { disable: true },
      description: "The content of the screen (without the textbox)",
    },
  },
} as ComponentMeta<typeof TitleScreen>;

const Template: ComponentStory<typeof TitleScreen> = (args) => (
  <TitleScreen {...args} />
);
export const EmptyTitleScreen = Template.bind({});
EmptyTitleScreen.storyName = "Empty title screen";

export const TitleScreenExample = Template.bind({});
TitleScreenExample.storyName = "Title screen example";
TitleScreenExample.args = {
  style: {
    backgroundImage:
      "radial-gradient(ellipse at 75% 40%, #f8f6f8, #30e5ed 20%, #25399c)",
  },
  children: (
    <>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <OverworldHero character="Lucas" movement="running" />
        <OverworldHero character="Dawn" movement="running" />
      </div>
      <div
        style={{
          paddingBottom: "4em",
        }}
      >
        <StaticText>Press START</StaticText>
      </div>
    </>
  ),
};
