import { ComponentMeta, ComponentStory } from "@storybook/react";
import InBattleHero from ".";

export default {
  title: "Components/Characters/In battle hero",
  component: InBattleHero,
  argTypes: {
    character: {
      defaultValue: "Dawn",
      description: "The character to display",
    },
    isThrowingBall: {
      defaultValue: false,
      description: "A flag to make the character throw a ball",
    },
  },
} as ComponentMeta<typeof InBattleHero>;

const Template: ComponentStory<typeof InBattleHero> = (args) => (
  <InBattleHero {...args} />
);

export const Lucas = Template.bind({});
Lucas.args = {
  character: "Lucas",
};

export const Dawn = Template.bind({});
Dawn.args = {
  character: "Dawn",
};
