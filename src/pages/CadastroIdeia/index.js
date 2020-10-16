import React from "react";
import { Link } from "react-router-dom";
import "./cadastroIdeia.css";

const RegisterIdeias = () => {
    return (
        <section className = "register-ideia-container">
            <h1 class="register-ideia-title">Cadastro de Ideia</h1>        
            <form className="register-ideia-form" name="registro-idea">      
                <div class="registerideia-nome-endereco">
                    <div className="register-ideia-div" id="Nome-da-organização">
                        <label className="register-ideia-label" for="Nome-da-organização">Nome:</label>
                        <input className="registerideia-input-nome register-ideia-input" type="text" id="Nome-da-organização" nome="Nome-da-organização" required/>
                    </div>
                
                    <div className="register-ideia-div">
                        <label className="register-ideia-label" for="endereco">Endereço:</label>
                        <input className="registerideia-input-endereco register-ideia-input" type="text" id="endereco" name="endereco" required/>
                    </div>
                </div> 

                <div class="registerideia-nome-endereco">                   
                    <div className="register-ideia-div">
                        <label className="register-ideia-label" for="Telefone">Telefone:</label>
                        <input className="registerideia-input-telefone register-ideia-input" type="number" id="telefone" name="Telefone" maxlength="11" required />
                    </div>
                        
                    <div className="register-ideia-div">
                        <label className="register-ideia-label" for="e-mail">E-mail:</label>
                        <input className="registerideia-input-email register-ideia-input" type="email" id="email" name="e-mail" required />
                    </div>
                </div>

                <div className="registerideia-cidade-uf"> 
                    <div className="register-ideia-div register-ideia-location">  
                        <label className="register-ideia-label" for="Descricao">Descrição:</label>
                        <textarea className="register-ideia-textarea register-ideia-input" nome="Descricao"></textarea>
                    </div>   
                    
                    <div className="register-ideia-div register-ideia-location">
                        <label className="register-ideia-label" for="cidade">Cidade:</label>
                        <input className="registerideia-input-cidade" type="text" id="cidade" name="cidade" required />
                    </div>
                        
                    <div className="register-ideia-div register-ideia-location">
                        <label className="register-ideia-label" for="uf"> UF:</label>
                        <input className="registerideia-input-uf" type="text" id="uf" name="UF" required />
                    </div>


                </div> 
                    
                <div className="register-ideia-div">
                    <label className="register-ideia-label" for="selecao">Categorias:</label>
                    <select className="registerideia-select-categorias register-ideia-select">
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
                </div>
                    
                <div className="register-ideia-div">
                    <label className="register-ideia-label" for="tipo-de-ajuda">Tipo de ajuda:</label>
                        <select className="registerideia-select-tipo register-ideia-select">
                            <option selected>Tipo de Ajuda</option>
                            <option>Financeira</option>
                            <option>Objetos</option>
                            <option>volutária</option>                    
                        </select>
                </div>

                <div className="register-ideia-btn-div">
                    <Link className="link-item-menu" to="/">Voltar</Link> 
                    <button className="link-item-menu" type="submit" onClick={ () => alert('Não foi possível realizar o cadastro') }>Cadastrar</button>                   
                </div>                                                      
            </form>
        </section>
    )
}

export default RegisterIdeias;