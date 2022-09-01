import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";


const TestePage = () => {
    const navigate = useNavigate();


    return(
        <>
        <h1> Pagina de teste </h1>
        <button onClick={() => goToHomePage(navigate)}> goToHomePage </button>

        </>
    )

}



export default TestePage;