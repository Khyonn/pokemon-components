import { ComponentMeta, ComponentStory } from "@storybook/react";
import Ground from ".";

export default {
  title: "Components/In battle/Ground",
  component: Ground,
  argTypes: {
    type: {
      defaultValue: "grass",
      description: "Indicates the type of ground",
    },
    isOpponent: {
      defaultValue: false,
      description: "Indicates the side (personal's or opponent's)",
    },
    dayTime: {
      defaultValue: "day",
      description: "The moment of the day (day, afternoon, night)",
    },
  },
} as ComponentMeta<typeof Ground>;

const Template: ComponentStory<typeof Ground> = (args) => <Ground {...args} />;

export const GroundExample = Template.bind({});
GroundExample.storyName = "Ground example";

const TemplateAllGrounds: ComponentStory<typeof Ground> = ({
  type,
  isOpponent,
  ...args
}) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <div>
      <Ground type="sand" {...args} />
      <Ground isOpponent type="sand" {...args} />
    </div>
    <div>
      <Ground type="snow" {...args} />
      <Ground isOpponent type="snow" {...args} />
    </div>
    <div>
      <Ground type="water" {...args} />
      <Ground isOpponent type="water" {...args} />
    </div>
    <div>
      <Ground type="grass" {...args} />
      <Ground isOpponent type="grass" {...args} />
    </div>
    <div>
      <Ground type="field" {...args} />
      <Ground isOpponent type="field" {...args} />
    </div>
    <div>
      <Ground type="indoor" {...args} />
      <Ground isOpponent type="indoor" {...args} />
    </div>
    <div>
      <Ground type="rocky" {...args} />
      <Ground isOpponent type="rocky" {...args} />
    </div>
  </div>
);

export const AllGrounds = TemplateAllGrounds.bind({});
AllGrounds.argTypes = {
  type: { table: { disable: true } },
  isOpponent: { table: { disable: true } },
};
AllGrounds.storyName = "All grounds";

const TemplateAllDayTime: ComponentStory<typeof Ground> = ({
  dayTime,
  isOpponent,
  ...args
}) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <div>
      <Ground dayTime="day" {...args} />
      <Ground dayTime="day" isOpponent {...args} />
    </div>
    <div>
      <Ground dayTime="afternoon" {...args} />
      <Ground dayTime="afternoon" isOpponent {...args} />
    </div>
    <div>
      <Ground dayTime="night" {...args} />
      <Ground dayTime="night" isOpponent {...args} />
    </div>
  </div>
);

export const AllDayTime = TemplateAllDayTime.bind({});
AllDayTime.argTypes = {
  dayTime: { table: { disable: true } },
  isOpponent: { table: { disable: true } },
};
AllDayTime.storyName = "All day times";
