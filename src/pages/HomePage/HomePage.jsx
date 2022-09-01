import React from "react";
import { useNavigate } from "react-router-dom";
import { goToTeste } from "../../routes/coordinator";
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"
import './index.css'

const HomePage = () => {
    const navigate = useNavigate();

    const { nome } = useContext(GlobalContext)
    const { setNome } = useContext(GlobalContext)
  
    return (
  <div>
    <h1 > Iniciando Projeto </h1>
    <h1 > O que tem dentro do context ? {nome}</h1>
  </div>
    )
}



export default HomePage;