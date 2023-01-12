import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all ease;

  img {
    border-radius: 3px;
    width: 280px;
    overflow: hidden;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Styles = {
  Container,
};
