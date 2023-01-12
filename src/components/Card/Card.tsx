import React from "react";
import { Styles } from "./styles";

export const Card: React.FC = () => {
  return (
    <Styles.Container>
      <img src="https://api.brchallenges.com/games/game-2.png" alt="" />
      <img src="https://api.brchallenges.com/games/game-3.png" alt="" />
      <img src="https://api.brchallenges.com/games/game-4.png" alt="" />
      <img src="https://api.brchallenges.com/games/game-5.png" alt="" />
      <img src="https://api.brchallenges.com/games/game-6.png" alt="" />
    </Styles.Container>
  );
};
