import React from 'react';
import './registerIdeia.css';

const RegisterIdeias = () => {
    return (
        <section className = "registerIdeia">
            <div className="registerIdeia-Form">
                <form className="registro-idea" name="registro-idea">
                    <div className="h3">
                        <h3>Cadastro de Ideias</h3>
                    </div>
                    <div className="nome">
                        <label for ="Nome-da-organização">Nome:</label>
                        <input type="text" id="Nome-da-organização" required="required" nome="Nome-da-organização" placeholder="Nome do projeto"></input>
                    </div>
                    <div className="endereco">
                        <label for ="endereco">Endereço:</label>
                        <input type="text" id="endereco" required="required" name="endereco" placeholder="rua tal numero tal"></input>
                    </div>
                    <div className="telefone">
                        <label for ="Telefone">Telefone:</label>
                        <input type="number" id="telefone" required="required" name="Telefone" maxlength="11"placeholder="99999999999"></input>
                    </div>
                    <div className="email">
                        <label for ="e-mail"> E-mail:</label>
                        <input type="email" id="email" required="required" name="e-mail" placeholder="fulano@mail.com" ></input>
                    </div>
                    <div className="cidade">
                        <label for ="cidade">Cidade:</label>
                        <input type="text" id="cidade" required="required" name="cidade" placeholder="cidade" ></input>
                    </div>
                    <div className="uf">
                        <label for ="uf"> UF:</label>
                        <input type="text" id="uf" required="required" name="UF" placeholder="UF" ></input>
                    </div>
                    <div className="categoria">
                        <label for = "selecao">Categorias:</label>
                        <select name="selecao">
                            <option>inclusão social</option>
                            <option>meio ambiente</option>
                            <option>causas infantil</option>

                        </select>
                    </div>
                    <div className="tipo-ajuda">
                        <label for="tipo-de-ajuda">Tipo de ajuda:</label>
                        <select>
                            <option>Financeira</option>
                            <option>volutarios</option>
                        
                        </select>
                    </div>
                    <div className="descricao">
                        <label for ="Descricao">Descrição:</label>
                        <textarea nome="Descricao" rows="5" cols="22"></textarea>
                    </div>
                    <div className="btn-form">
                        <a className="btn-voltar" to="/" >Voltar</a>
                        <a className="btn-enviar" to="/">Cadastrar</a>
                    </div>
                    
                    
                </form>

            </div>

        </section>

    )

}
export default RegisterIdeias;