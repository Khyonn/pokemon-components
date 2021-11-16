import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextBox from ".";
import StaticText from "../StaticText";
import DynamicText from "../DynamicText";
import BoxStories from "../../Box/Box.stories";

export default {
  title: "Components/Texts/TextBox",
  component: TextBox,
  argTypes: {
    ...BoxStories.argTypes,
    children: {
      defaultValue: "",
      description: "The content to add in the box",
    },
  },
} as ComponentMeta<typeof TextBox>;

const Template: ComponentStory<typeof TextBox> = (args) => (
  <TextBox {...args} />
);

export const TextBoxExample = Template.bind({});
TextBoxExample.storyName = "Textbox example";
TextBoxExample.args = {
  children: "Welcome in the Pokemon World !",
};

const TextBoxWithTextTemplate: ComponentStory<typeof TextBox> = ({
  children,
  ...args
}) => (
  <TextBox {...args}>
    <StaticText>{children}</StaticText>
  </TextBox>
);

export const TextBoxWithStaticText = TextBoxWithTextTemplate.bind({});
TextBoxWithStaticText.storyName = "Textbox with static text";
TextBoxWithStaticText.args = {
  children: "Welcome in the Pokemon World !",
};

export const TextBoxWithFatText = TextBoxWithTextTemplate.bind({});
TextBoxWithFatText.storyName = "Textbox with large text";
TextBoxWithFatText.args = {
  children:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis aut excepturi commodi illum, consequuntur quos vero perspiciatis tenetur voluptate! Delectus iusto ea mollitia, itaque sed explicabo in qui quaerat dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error beatae adipisci aspernatur soluta quia corporis nisi unde, eius voluptatum maiores, illum dignissimos, dolore animi. Recusandae suscipit et tenetur itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis, exercitationem tempora corporis officia nobis voluptatem aliquam iusto eaque minus alias error accusantium, doloremque obcaecati laudantium fuga quo. Earum, quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ullam alias dolore beatae ea accusantium qui rerum cumque obcaecati? Accusantium enim at cupiditate perspiciatis tempora iure et nisi quaerat dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione tempora blanditiis expedita libero ipsa id nam voluptas doloribus, velit reprehenderit! Doloremque perferendis vero quae. Cum molestiae magni natus et. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo illum ab aut labore neque sint. Delectus qui accusantium aut cupiditate? Amet aspernatur dicta, perferendis expedita architecto dolor dolores reiciendis commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia fugit ratione culpa dicta iste ab deserunt mollitia rem cum sequi eaque ullam nihil repellat est recusandae, iusto eligendi at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modi, illum alias expedita quaerat nobis debitis libero corrupti quibusdam possimus eius voluptatem. Eum veritatis inventore tempora reiciendis! Perspiciatis, sit optio.",
};

const TextBoxWithDynamicTextTemplate: ComponentStory<typeof TextBox> = ({
  children,
  ...args
}) => (
  <TextBox {...args}>
    <DynamicText>{children}</DynamicText>
  </TextBox>
);

export const TextBoxWithDynamicText = TextBoxWithDynamicTextTemplate.bind({});
TextBoxWithDynamicText.storyName = "Textbox with dynamic text";
TextBoxWithDynamicText.args = {
  children: "Welcome in the Pokemon World !",
};
