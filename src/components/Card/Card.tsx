import React from "react";
import { Styles } from "./styles";

export const Card: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.Infos>
          <div>
            <span>Games</span>
            <h1>
              Jogos <br /> exclusivos
            </h1>
          </div>
          <button>Ver todos jogos</button>
        </Styles.Infos>
      </Styles.Wrapper>

      <Styles.Wrapper>
        <div>
          <img src="https://api.brchallenges.com/games/game-2.png" alt="" />
        </div>

        <div>
          <img src="https://api.brchallenges.com/games/game-3.png" alt="" />
        </div>

        <div>
          <img src="https://api.brchallenges.com/games/game-4.png" alt="" />
        </div>

        <div>
          <img src="https://api.brchallenges.com/games/game-5.png" alt="" />
        </div>

        <div>
          <img src="https://api.brchallenges.com/games/game-6.png" alt="" />
        </div>
      </Styles.Wrapper>

      <Styles.Wrapper>
        <div>
          <img src="https://api.brchallenges.com/games/game-6.png" alt="" />
        </div>

        <div>
          <img src="https://api.brchallenges.com/games/game-7.png" alt="" />
        </div>

        <div>
          <img src="https://api.brchallenges.com/games/game-8.png" alt="" />
        </div>

        <div>
          <img src="https://api.brchallenges.com/games/game-9.png" alt="" />
        </div>

        <div>
          <img src="https://api.brchallenges.com/games/game-10.png" alt="" />
        </div>
      </Styles.Wrapper>
    </Styles.Container>
  );
};
