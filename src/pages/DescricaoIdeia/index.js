import React from "react";
import { Link } from "react-router-dom";
import "./Project-description.css";

import Location from "../../assets/img/Project-description/location.svg";

const DescricaoProjeto = () => {
    return(
        <section className="container-ProjectDescription">

            
            
            <div className="container-description">
                <div className="title-container">
                    <h1>adssasdfsgsdf gfd</h1>
                </div>
                <div className="containers information-projeto">                    
                    <h2>Responsavel pela ONG</h2>
                    <p>
                        ssdfsdgsdgsd
                    </p>
                    <h2 className="title-location">Endereço</h2>
                        
                    <div className="location">
                        <img src={Location} alt="localização"/><p>sdfsdgsgsdggewwegsdg.</p>
                    </div> 
                    <div className="maps-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15801.903756689331!2d-34.898200596231725!3d-8.052836998041597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smaps!5e0!3m2!1spt-BR!2sbr!4v1602204134379!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>                          
                </div> 
                            
                
            </div>

            <div className="container-information-all">
                <div className="containers">
                    <h2>Descrição</h2>
                    <p>
                        It is a long established fact 
                    </p>
                </div>

                <div className="containers">
                        <h2>Galeria</h2>
                </div>

                <div className="containers volunteers">
                    <h2>Faça parte deste time</h2>
                    <p>
                        Lorem Ipsum
                    </p>
                </div>

                <div className="containers">
                    <h2>Doações</h2>
                    <div className="btn-container">
                        <Link to="/doacao-de-objetos" className="btn objects">Doar objetos</Link>
                        <Link to="/doacao-de-dinheiro" className="btn money">Doar dinheiro</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DescricaoProjeto;