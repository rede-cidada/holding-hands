import React from "react";
import { Link } from "react-router-dom";
import "./cadastroIdeia.css";

const RegisterIdeias = () => {
    return (

        <div className="container-register-ideia">
            <h1 className="container-register-title">Cadastro de ideia</h1>
            <div className="container-ideia-dados">
                <div className="container-ideia-input">
                    <label className="container-ideia-label">Nome do projeto</label>
                    <input className="ideia-input"/>
                </div>

                <div className="container-ideia-input">
                    <label className="container-ideia-label">Nome do responsavel</label>
                    <input className="ideia-input"/>
                </div>
            </div>

            <div className="container-ideia-dados">
                <div className="container-ideia-input">
                    <label className="container-ideia-label">Telefone</label>
                    <input className="ideia-input"/>
                </div>

                <div className="container-ideia-input">
                    <label className="container-ideia-label">Endereço</label>
                    <input className="ideia-input"/>
                </div>
            </div>

            <div className="container-ideia-dados2">
                <div className="container-ideia-input2">
                    <label className="container-ideia-label">Cidade</label>
                    <input className="ideia-input"/>
                </div>

                <div className="container-ideia-input">
                    <label className="container-ideia-label">UF</label>
                    <input className="ideia-input"/>
                </div>
            </div>

            <div className="container-ideia-dados2">
                <select className="ideia-select ideia-select-1">
                    <option selected>Categorias</option>
                    <option>Saúde</option>
                    <option>Educação</option>
                    <option>Pobreza</option>
                    <option>Criança</option>
                    <option>Adolescente</option>
                    <option>Idoso</option>
                    <option>Gestante</option>
                    <option>Mulher</option>
                    <option>Igualdade de gênero</option>
                    <option>Causas LGBTQI+</option>
                    <option>Sustentabilidade</option>
                    <option>Deficiência física</option>
                    <option>Deficiência mental</option>
                    <option>Deficiência intelectual</option>
                    <option>Deficiência auditiva</option>
                    <option>Espectro autismo</option>
                    <option>Problemas psicológicos</option>
                    <option>Meio ambiente</option>
                    <option>Causa animal</option>
                </select>

                <select className="ideia-select">
                    <option selected>Tipo de Ajuda</option>
                    <option>Financeira</option>
                    <option>Objetos</option>
                    <option>volutária</option>                    
                </select>
            </div>

                

            <div className="container-ideia-dados">
                <div className="container-ideia-input">
                    <label className="container-ideia-label">Descrição</label>
                    <textarea className="ideia-textarea"/>
                </div>
            </div> 

            <button className="container-ideia-btn">Cadastrar</button>

        </div>
    )
}

export default RegisterIdeias;