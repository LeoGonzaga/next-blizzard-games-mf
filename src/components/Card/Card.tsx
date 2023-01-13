/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Styles } from "./styles";

const GAMES = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export const Card: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Wrapper>
        {GAMES.map((elem, index) => (
          <Styles.CardWrapper key={index}>
            <Styles.Fixed>
              <img
                src={`https://api.brchallenges.com/games/game-${index}.png`}
                alt=""
              />
            </Styles.Fixed>
            <Styles.Background>
              <img
                src={`https://api.brchallenges.com/games/game-${index}-logo.png`}
                alt=""
              />
            </Styles.Background>
          </Styles.CardWrapper>
        ))}
      </Styles.Wrapper>
    </Styles.Container>
  );
};
