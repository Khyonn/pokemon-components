import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Box from ".";

export default {
  title: "Components/Box/Box",
  component: Box,
  argTypes: {
    children: {
      defaultValue: "",
      control: { type: "text" },
      description:
        "The content to add in the box (could also be elements, not only text)",
    },
    as: {
      control: { disable: true },
      defaultValue: "div",
      description:
        "The component that should be used for the box (to customize behaviour, eg : 'button')",
    },
    className: {
      table: { disable: true },
    },
    theme: {
      defaultValue: "classic",
      description: "The theme used for the textbox",
    },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = ({ children, ...args }) => (
  <Box {...args}>{children || <div style={{ height: "25px" }}></div>}</Box>
);

export const BoxExample = Template.bind({});
BoxExample.storyName = "Box example";

export const Button = Template.bind({});
Button.storyName = "Box used as button";
Button.args = {
  as: "button",
  children: "Click me !",
  onClick: action("Button got clicked"),
};
