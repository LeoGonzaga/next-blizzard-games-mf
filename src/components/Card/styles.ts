import styled from "styled-components";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 30px;

  img {
    border-radius: 3px;
    transition: 0.2s all ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #000;
  padding: 0px 30px;

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

const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 40px 0px;
  width: 100vw;
  max-width: 1500px;

  h1 {
    color: #fff;
    font-weight: 700;
    font-size: 32px;
  }

  div {
    display: flex;
    align-items: center;

    span {
      margin-right: 171px;
      color: #8f9199;
      font-size: 15px;
      line-height: 22px;
      text-transform: uppercase;
    }
  }
`;

export const Styles = {
  Container,
  Wrapper,
  Infos,
};
