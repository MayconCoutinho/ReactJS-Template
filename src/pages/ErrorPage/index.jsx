import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import { ContainerCSS, ButtonCSS } from "./styled";

const ErrorPage = () => {
    const navigate = useNavigate();
    return(
        <> 
            <ContainerCSS>
                <h1> 404 </h1>
                <p> Essa pagina não existe.</p>
                </ContainerCSS>
            <ButtonCSS onClick={() => goToHomePage(navigate)}> Retornar </ButtonCSS>
        </>
    )
}
export default ErrorPage;