import { ComponentMeta, ComponentStory } from "@storybook/react";
import OverworldHero from ".";

export default {
  title: "Components/Characters/Overworld hero",
  component: OverworldHero,
  argTypes: {
    character: {
      defaultValue: "Dawn",
      description: "Character",
    },
    direction: {
      defaultValue: "down",
      description: "Character direction",
    },
    movement: {
      defaultValue: "standing",
      description: "Character animation",
    },
  },
} as ComponentMeta<typeof OverworldHero>;

const Template: ComponentStory<typeof OverworldHero> = (args) => (
  <OverworldHero {...args} />
);

export const DefaultHero = Template.bind({});
DefaultHero.storyName = "Default hero";

export const Dawn = Template.bind({});
Dawn.args = {
  character: "Dawn",
};

export const Lucas = Template.bind({});
Lucas.args = {
  character: "Lucas",
};

export const Walking = Template.bind({});
Walking.args = {
  movement: "walking",
};

export const Running = Template.bind({});
Running.args = {
  movement: "running",
};

export const Cycling = Template.bind({});
Cycling.args = {
  movement: "cycling",
};

export const Fishing = Template.bind({});
Fishing.args = {
  movement: "fishing",
};

export const Left = Template.bind({});
Left.args = {
  direction: "left",
};
export const Right = Template.bind({});
Right.args = {
  direction: "right",
};
export const Up = Template.bind({});
Up.args = {
  direction: "up",
};
export const Down = Template.bind({});
Down.args = {
  direction: "down",
};
