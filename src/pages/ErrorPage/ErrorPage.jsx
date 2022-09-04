import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";

const ErrorPage = () => {
    const navigate = useNavigate();
    return(
        <>
        <h1> Erro Page </h1>
        <button onClick={() => goToHomePage(navigate)}> goToHomePage </button>
        </>
    )
}
export default ErrorPage;