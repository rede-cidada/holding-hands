import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./doacaoObjetos.css";

const DoacaoObjetos = () => {
    return(
        <div className="container-donation">
            <Header/>
            <form className="form-donation">
                <h1 className="title-donation">Doação de objetos</h1>
                <div className="object">
                    <label for="object" className="donation-label">Objeto</label>
                    <input type="text" id="object" className="object-input"/>
                </div>
                
                <div className="object">
                    <label className="donation-label">Adicione detalhes sobre o objeto doado</label>
                    <textarea className="description-object-input"></textarea>
                </div>
                
                <div className="object amount-object">
                    <label className="donation-label">Quantidade</label>
                    <div className="number-objects">
                        <button className="number-objects-btn">+</button>
                        <input type="number" className="number-objects-input"/>
                        <button className="number-objects-btn">-</button>
                    </div>
                   
                    <button className="btn-form-donation">Concluir</button>
                </div>
            </form>
            <Footer/>
        </div>
    )
}

export default DoacaoObjetos;