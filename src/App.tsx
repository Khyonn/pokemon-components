import { useState, useEffect } from "react";
import OverworldHero, {
  HeroDirection,
} from "./app/shared/components/Characters/OverworldHero";
import DynamicText from "./app/shared/components/Texts/DynamicText";
import Title from "./app/shared/components/Texts/Title";
import Pokemon from "./app/shared/components/InBattle/Pokemon";
import "./assets/sass/layout/_flex.scss";

function App() {
  const [direction, setDirection] = useState<HeroDirection>("up");

  useEffect(() => {
    const directions: HeroDirection[] = ["up", "down", "left", "right"];
    const interval = setInterval(() => {
      setDirection(directions[Math.floor(Math.random() * 10) % 4]);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="all-height flex column center">
      <h1>
        <Title>Pokémon</Title>
      </h1>
      <div>
        <OverworldHero
          character="Lucas"
          movement="fishing"
          direction={direction}
        />
        <OverworldHero
          character="Dawn"
          movement="fishing"
          direction={direction}
        />
      </div>
      <DynamicText>Bonjour bienvenue dans ce monde pokemon</DynamicText>
      <Pokemon number={151} side="front_2" />
    </div>
  );
}

export default App;
