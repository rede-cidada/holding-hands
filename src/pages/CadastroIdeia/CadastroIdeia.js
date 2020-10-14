import React from 'react';
import './cadastroIdeia.css';
// import Header from '../Header'

const RegisterIdeias = () => {
    return (
        <section className = "registerIdeia">
            {/* <Header /> */}
            <div className="registerIdeia-Form">
                <div className="h3">
                        <h3>Cadastro de Ideias</h3>
                    </div>
                <form className="registro-idea" name="registro-idea">
                    
                    <div className="div" id="Nome-da-organização">
                        <label className="label" for ="Nome-da-organização">Nome:</label>
                        <input className="input" type="text" id="Nome-da-organização" required="required" nome="Nome-da-organização" placeholder="Nome do projeto"></input>
                    </div>
                    <div className="div" id="endereco">
                        <label className="label" for ="endereco">Endereço:</label>
                        <input className="input" type="text" id="endereco" required="required" name="endereco" placeholder="rua tal numero tal"></input>
                    </div>
                    <div className="div" id="telefone">
                        <label className="label" for ="Telefone">Telefone:</label>
                        <input className="input" type="number" id="telefone" required="required" name="Telefone" maxlength="11"placeholder="99999999999"></input>
                    </div>
                    <div className="div" id="email">
                        <label className="label" for ="e-mail"> E-mail:</label>
                        <input className="input" type="email" id="email" required="required" name="e-mail" placeholder="fulano@mail.com" ></input>
                    </div>
                    <div className="div" id="cidade">
                        <label className="label" for ="cidade">Cidade:</label>
                        <input className="input" type="text" id="cidade" required="required" name="cidade" placeholder="cidade" ></input>
                    </div>
                    <div className="div" id="uf" >
                        <label className="label" for ="uf"> UF:</label>
                        <input className="input" type="text" id="uf" required="required" name="UF" placeholder="UF" ></input>
                    </div>
                    <div className="selecao">
                    <div className="div" id="categoria">
                        <label className="label" for = "selecao">Categorias:</label>
                        <select name="selecao">
                            <option>inclusão social</option>
                            <option>meio ambiente</option>
                            <option>causas infantil</option>

                        </select>
                    </div>
                    
                    <div className="div" id="tipoajuda">
                        <label className="label" for="tipo-de-ajuda">Tipo de ajuda:</label>
                        <select className="select">
                            <option>Financeira</option>
                            <option>volutarios</option>
                        
                        </select>
                    </div>
                    </div>
                    <div className="div" id="descricao">
                        <label className="label" for ="Descricao">Descrição:</label>
                        <textarea id="textarea" nome="Descricao" ></textarea>
                    </div>
                    <div  id="btn-form">
                        <a className="btn-voltar" >Voltar</a>
                        <a className="btn-enviar" >Cadastrar</a>
                    </div>
                    
                    
                </form>

            </div>

        </section>

    )

}
export default RegisterIdeias;