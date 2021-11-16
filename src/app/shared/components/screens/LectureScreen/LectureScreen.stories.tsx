import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import LectureScreen from ".";
import StaticCharacter from "../../Characters/StaticCharacter";

export default {
  title: "Screens/Lecture screen",
  component: LectureScreen,
  args: {
    style: {
      backgroundImage:
        "linear-gradient(to top,#4b55c3,#4b55c3 30%,#98b3ef 35%,#98b3ef 75%,#4b55c3 85%,#4b55c3 95%,#98b3ef)",
    },
  },
  argTypes: {
    style: { table: { disable: true } },
    textToDisplay: {
      defaultValue: "Welcome to the world of Pokémon!",
      description: "The text that would be displayed",
    },
    onTextDisplayEnd: {
      action: "onTextDisplayEnd",
      control: { disable: true },
      description:
        "A function that will be called when the given text is displayed entirely",
    },
    children: {
      defaultValue: (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <StaticCharacter character="Oak" />
        </div>
      ),
      control: { disable: true },
      description: "The content of the screen (without the textbox)",
    },
  },
} as ComponentMeta<typeof LectureScreen>;

const Template: ComponentStory<typeof LectureScreen> = (args) => (
  <LectureScreen {...args} />
);
export const EmptyLectureScreen = Template.bind({});
EmptyLectureScreen.storyName = "Empty lecture screen";
EmptyLectureScreen.args = {
  children: null,
  style: undefined,
  textToDisplay: "Welcome to the world of Pokémon!",
};

export const LectureScreenExample = Template.bind({});
LectureScreenExample.storyName = "Lecture screen example";
LectureScreenExample.args = {
  textToDisplay: "Welcome to the world of Pokémon!",
};

const textsToDisplay = [
  "...\n...",
  "Hmm... Interesting...",
  "Huh ? Oh! Excuse me, sorry!\nI was just reading this book here.",
  "Sorry to keep you waiting!",
  "Welcome to the world of Pokémon!",
  "My name is professor Oak.",
  "But everyone calls me the Pokémon Professor.",
  "Before we go any further, I'd like to tell you a few things you should know about this world!",
  "This world is widely inhabited by creatures known as Pokémon.",
  "~~~~~ End of example ~~~~~",
];
const LectureScreenContext = ({ texts = textsToDisplay, ...props }: any) => {
  const [index, setIndex] = useState(0);

  return (
    <LectureScreen
      {...props}
      textToDisplay={texts[index]}
      onTextDisplayEnd={() =>
        setTimeout(() => {
          setIndex((old) => (texts.length === old + 1 ? 0 : old + 1));
        }, 1000)
      }
    />
  );
};
const ContextTemplate: ComponentStory<typeof LectureScreenContext> = (args) => (
  <LectureScreenContext {...args} />
);
export const LectureScreenWithContextExample = ContextTemplate.bind({});
LectureScreenWithContextExample.argTypes = {
  children: { table: { disable: true } },
  textToDisplay: { table: { disable: true } },
  texts: {
    defaultValue: textsToDisplay,
    control: { type: "object" },
  },
  onTextDisplayEnd: { table: { disable: true } },
};
LectureScreenWithContextExample.storyName = "Lecture screen with a context";
LectureScreenWithContextExample.parameters = {
  docs: {
    source: {
      code: `
const textsToDisplay = [
  "...\\n...",
  "Hmm... Interesting...",
  "Huh ? Oh! Excuse me, sorry!\\nI was just reading this book here.",
  "Sorry to keep you waiting!",
  "Welcome to the world of Pokémon!",
  "My name is professor Oak.",
  "But everyone calls me the Pokémon Professor.",
  "Before we go any further, I'd like to tell you a few things you should know about this world!",
  "This world is widely inhabited by creatures known as Pokémon.",
  "~~~~~ End of example ~~~~~",
];

const LectureScreenContext = ({ texts = textsToDisplay }: any) => {
  const [index, setIndex] = useState(0);

  return (
    <LectureScreen
      textToDisplay={texts[index]}
      onTextDisplayEnd={() =>
        setTimeout(() => {
          setIndex((old) => (texts.length === old + 1 ? 0 : old + 1));
        }, 1000)
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <StaticCharacter character="Oak" />
      </div>
    </LectureScreen>
  );
};
      `,
    },
  },
};
