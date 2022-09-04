import React from "react";
import { useNavigate } from "react-router-dom";
import { goToTeste } from "../../routes/coordinator";
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"
import './index.css'
import { useForm,} from "../../hooks/useForm";

const HomePage = () => {
  const navigate = useNavigate();
  const { nome } = useContext(GlobalContext)
  const { setNome } = useContext(GlobalContext)  
  const {formValues, onChange, cleanFields} = useForm({name: ""})
  const EnviarFormulario = (event) => {
      event.preventDefault();
      setNome(formValues.name)
      cleanFields()
      alert("Formulario Enviado");
    };
    return (
    <div className="container">
      <h1 > Iniciando Projeto </h1>
      <h1 > O que tem dentro do context ? {nome}</h1>
      <button onClick={() => goToTeste(navigate)}> goToTeste </button>
      <h3> Mude o nome do context </h3>
      <form onSubmit={EnviarFormulario}>
        <input
              type={"text"}
              placeholder="Novo nome"
              name="name"
              onChange={onChange}
              required
              value={formValues.name}
            ></input>
        </form>
    </div>
    )
}
export default HomePage;