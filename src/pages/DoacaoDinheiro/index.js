import React from "react";
import "./doacaoDinheiro.css";

const DoacaoDinheiro = () => {
    return(
        <section className="donation-container">
            <div className="donation-form-container donation-form-container-card">
                <h2 className="title-donation">Cartão</h2>
                
                <div className="container-input">
                    <label className="label-donation">Nome do titular</label>
                    <input className="input-donation"/>
                </div>

                <div className="container-input">
                    <label className="label-donation">Número do cartão</label>
                    <input className="input-donation"/>
                </div>

                <div className="container-input">
                    <label className="label-donation">Data de expedição</label>
                    <input className="input-donation"/>
                </div>

                <div className="container-input">
                    <label className="label-donation">CVV</label>
                    <input className="input-donation"/>
                </div>

                <button class='btn-donation' type="submit">
                    <div className="btn-content">Doar</div>
                </button>
            </div>

            <div className="donation-form-container donation-form-container-money">
                <h2 className="title-donation">Boleto</h2>

                <div className="container-input">
                    <label className="label-donation">Nome completo</label>
                    <input className="input-donation"/>
                </div>

                <div className="container-input">
                    <label className="label-donation">CPF</label>
                    <input className="input-donation"/>
                </div>

                <div className="container-input">
                    <label className="label-donation">CPF</label>
                    <input className="input-donation"/>
                </div>

                <button class='btn-donation' type="submit">
                    <div className="btn-content">Doar</div>
                </button>
            </div>
        </section>
    )
}

export default DoacaoDinheiro;