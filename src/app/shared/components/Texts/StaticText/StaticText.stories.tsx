import { ComponentMeta, ComponentStory } from "@storybook/react";
import StaticText from ".";

export default {
  title: "Components/Texts/Static text",
  component: StaticText,
  argTypes: {
    children: {
      defaultValue: "",
      description: "The text to display",
    },
  },
} as ComponentMeta<typeof StaticText>;

const Template: ComponentStory<typeof StaticText> = (args) => (
  <StaticText {...args} />
);

export const StaticTextExample = Template.bind({});
StaticTextExample.storyName = "Static text example";
StaticTextExample.args = {
  children: "Welcome in the Pokemon World !",
};
