import { ComponentMeta, ComponentStory } from "@storybook/react";
import StaticCharacter from ".";

export default {
  title: "Components/Characters/Static characters",
  component: StaticCharacter,
  argTypes: {},
} as ComponentMeta<typeof StaticCharacter>;

const Template: ComponentStory<typeof StaticCharacter> = (args) => (
  <StaticCharacter {...args} />
);

export const Oak = Template.bind({});
Oak.args = {
  character: "Oak",
};

export const Lucas = Template.bind({});
Lucas.args = {
  character: "Lucas",
};

export const Dawn = Template.bind({});
Dawn.args = {
  character: "Dawn",
};
