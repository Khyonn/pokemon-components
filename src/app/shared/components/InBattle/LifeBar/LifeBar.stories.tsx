import { ComponentMeta, ComponentStory } from "@storybook/react";
import LifeBar from ".";

export default {
  title: "Components/In battle/Lifebar",
  component: LifeBar,
  argTypes: {
    name: {
      defaultValue: "Charmander",
      description: "Name of the pokemon",
      control: { type: "text" },
    },
    level: {
      defaultValue: 5,
      description: "Level of the pokemon",
      control: { type: "number", min: 1, max: 100 },
    },
    hp: {
      defaultValue: 19,
      description: "Health points",
      control: { type: "number", min: 0 },
      table: { defaultValue: { summary: 19 } },
    },
    maxHP: {
      defaultValue: 19,
      description: "Max health points",
      control: { type: "number", min: 1 },
      table: { defaultValue: { summary: 19 } },
    },
    xp: {
      defaultValue: 5,
      description: "Experience points",
      control: { type: "number", min: 0 },
      table: { defaultValue: { summary: 0 } },
    },
    maxXP: {
      defaultValue: 15,
      description: "Max experience points",
      control: { type: "number", min: 0 },
      table: { defaultValue: { summary: 100 } },
    },
    isOpponent: {
      defaultValue: false,
      description:
        "Indicates if the lifebar should be displayed as personnal's or opponent's",
    },
  },
} as ComponentMeta<typeof LifeBar>;

const Template: ComponentStory<typeof LifeBar> = (args) => (
  <LifeBar {...args} />
);

export const DefaultLifeBar = Template.bind({});
DefaultLifeBar.storyName = "Default lifebar";
