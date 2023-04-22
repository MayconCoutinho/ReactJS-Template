import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin-top: 30px;
  color: #c3d7ff;
`;
export const Descricao = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  padding: 2.5vw;
  font-weight: 400;
  color: hsl(232, 100%, 6%);
  background-color: #c3d7ffcb;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 100%;
  position: relative;

  @media (max-width: 991px) {
    width: 90%;
  }
`;
export const Perfil = styled.img`
  box-sizing: border-box;
  border: 5px white solid;
  border-radius: 50%;
  transform: translatey(0px);
  width: 200px;
  height: 200px;
`;

export const WelcomeCSS = styled.img`
  filter: invert(100%);
  transition-duration: 1s;
  width: 80px;
  height: 80px;

  :hover {
    cursor: pointer;
    filter: invert(0%);
    transition-duration: 1s;
  }
`;
