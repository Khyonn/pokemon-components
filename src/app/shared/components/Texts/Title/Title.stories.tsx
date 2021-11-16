import { ComponentMeta, ComponentStory } from "@storybook/react";
import Title from ".";

export default {
  title: "Components/Texts/Title",
  component: Title,
  argTypes: {
    children: {
      defaultValue: "",
      description: "The title to display",
    },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const TitleExample = Template.bind({});
TitleExample.storyName = "Title example";
TitleExample.args = {
  children: "Pokémon",
};
