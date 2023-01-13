import styled from "styled-components";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 30px;
  background-color: #000;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1800px;
  div {
    overflow: hidden;
  }
  button {
    color: #00aeff;
    background-color: transparent;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    border: none;
  }
`;

const CardWrapper = styled.div`
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  bottom: 30px;
  left: 25%;
`;

const Fixed = styled.div`
  img {
    border-radius: 3px;
    transition: 0.2s all ease-in-out;
    &:hover {
      transform: scale(1.2);
      z-index: -99;
    }
  }
`;

export const Styles = {
  Container,
  Wrapper,
  CardWrapper,
  Background,
  Fixed,
};
