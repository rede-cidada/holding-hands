import React from 'react';
import '../registerIdeia/registerIdeia.css';

const RegisterIdeias = () => {
    return (
        <section class = "registerIdeia">
            <div class="registerIdeia-Form">
                <form class="registro-idea" name="registro-idea">
                    <h3>Cadastro de Ideias</h3>
                    
                    <label for ="Nome-da-organização">Nome da Organização:</label><br/>
                    <input type="text" id="Nome-da-organização" required="required" nome="Nome-da-organização" placeholder="Nome Organização"></input><br/>
                    <label for ="endereco">Endereço:</label><br/>
                    <input type="text" id="endereco" required="required" nome="endereco" placeholder="rua tal numero tal"></input><br/>
                    <label for ="Telefone">Telefone:</label><br/>
                    <input type="number" id="telefone" required="required" nome="Telefone" maxlength="11"placeholder="99999999999"></input><br/>
                    <label for ="e-mail"> E-mail:</label><br/>
                    <input type="email" id="email" required="required" nome="e-mail" placeholder="fulano@mail.com" ></input><br/>
                    <label for ="cidade">Cidade:</label><br/>
                    <input type="text" id="cidade" required="required" nome="cidade" placeholder="cidade" ></input><br/>
                    <label for ="uf"> UF:</label><br/>
                    <input type="text" id="uf" required="required" nome="UF" placeholder="UF" ></input><br/>
                    <label for ="Descricao">Descrição:</label><br/>
                    <textarea nome="Descricao" rows="10" cols="30"></textarea><br/>
                    <div className="btn-form">
                        <a className="btn-voltar" href="#" >Voltar</a>
                        <a className="btn-enviar" href="#">Cadastrar</a>
                    </div>
                    
                    
                </form>

            </div>

        </section>

    )

}
export default RegisterIdeias;