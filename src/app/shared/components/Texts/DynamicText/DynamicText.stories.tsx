import { ComponentMeta, ComponentStory } from "@storybook/react";
import DynamicText from ".";

export default {
  title: "Components/Texts/Dynamic text",
  component: DynamicText,
  argTypes: {
    children: {
      defaultValue: "",
      description: "The text to display",
    },
    onTextDisplayEnd: {
      action: "click",
    },
  },
} as ComponentMeta<typeof DynamicText>;

const Template: ComponentStory<typeof DynamicText> = (args) => (
  <DynamicText {...args} />
);

export const DynamicTextExample = Template.bind({});
DynamicTextExample.storyName = "Dynamic text example";
DynamicTextExample.args = {
  children: "Welcome in the Pokemon World !",
};
