import { useContext } from "react";
import { GlobalContext } from "../../global/context/useContext.js";
import { Descricao, Perfil, Title, WelcomeCSS } from "./styled.jsx";
import perfilPng from "../../assets/perfil/perfil.png";
import gitHubImg from "../../assets/welcome/github.png";

export const Welcome = () => {
  const { boasVindas } = useContext(GlobalContext);
  return (
    <>
      <Perfil src={perfilPng} />
      <Title> Template React.js! </Title>

      <Descricao> {boasVindas} </Descricao>
      <br />
      <a
        href="https://github.com/MayconCoutinho/ReactJS-Template"
        target="_blank"
      >
        <WelcomeCSS src={gitHubImg} />
      </a>
    </>
  );
};
