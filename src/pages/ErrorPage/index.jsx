import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import { ContainerCSS, ButtonCSS } from "./styled";
import { StarBackgroud } from "../../components/starBackgroud";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <ContainerCSS>
      <StarBackgroud />
      <h1> 404 </h1>
      <p> Essa pagina não existe.</p>
      <ButtonCSS onClick={() => goToHomePage(navigate)}> Retornar </ButtonCSS>
    </ContainerCSS>
  );
};
export default ErrorPage;
