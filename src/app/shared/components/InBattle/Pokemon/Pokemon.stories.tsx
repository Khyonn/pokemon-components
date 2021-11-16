import { ComponentMeta, ComponentStory } from "@storybook/react";
import Pokemon from ".";

export default {
  title: "Components/In battle/Pokemon",
  component: Pokemon,
  argTypes: {
    number: {
      defaultValue: 1,
      description: "The n° of the Pokemon in the Pokedex",
      control: { type: "number", min: 1, max: 151 },
    },
    side: {
      defaultValue: "front_1",
      description: "The side displayed of the Pokemon",
    },
  },
} as ComponentMeta<typeof Pokemon>;

const Template: ComponentStory<typeof Pokemon> = (args) => (
  <Pokemon {...args} />
);

export const DefaultPokemon = Template.bind({});

export const Front_1 = Template.bind({});
Front_1.storyName = "Pokemon from first front side";
Front_1.args = {
  side: "front_1",
};

export const Front_2 = Template.bind({});
Front_2.storyName = "Pokemon from second front side";
Front_2.args = {
  side: "front_2",
};

export const Back_1 = Template.bind({});
Back_1.storyName = "Pokemon from first back side";
Back_1.args = {
  side: "back_1",
};

export const Back_2 = Template.bind({});
Back_2.storyName = "Pokemon from second back side";
Back_2.args = {
  side: "back_2",
};

export const Bulbasaur = Template.bind({});
Bulbasaur.args = {
  number: 1,
};

export const Charmander = Template.bind({});
Charmander.args = {
  number: 4,
};

export const Squirtle = Template.bind({});
Squirtle.args = {
  number: 7,
};

export const Mewtwo = Template.bind({});
Mewtwo.args = {
  number: 150,
};

export const Mew = Template.bind({});
Mew.args = {
  number: 151,
};
