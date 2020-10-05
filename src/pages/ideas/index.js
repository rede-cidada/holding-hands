import React from 'react';
import './ideas.css';
import searchIcon from "../../assets/img/ideas/search-icon.png";
import logoAnimal from "../../assets/img/ideas/logo-bicho.jpg";
import logoExample from "../../assets/img/ideas/exemplo.gif";
import logoFood from "../../assets/img/ideas/comida.png";

import { Link } from 'react-router-dom';

const Ideas = () => {
    return (      
        <section className="ideas-container">
            <div className="container-ideia-form">
                <form className="ideas-form">
                    <select className="ideas-categories all">
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

                    <input className="localization-input all" placeholder="Cidade/Estado" type="text"/>
                    
                    <div className="search-div">
                        <input className="search-input all" type="text" placeholder="Pesquisar"/>
                        <button className="search-btn">
                            <img className="search-icon" src={searchIcon} alt="Pesquisar"/>
                        </button>
                    </div>
                </form> 
            </div>

            <div className="project-cards">

                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoAnimal} alt="Logo da ong de animais"/>
                        <Link className="project-title-link" to="/projeto-description">Amigo Quatro Patas</Link>
                    </div>
                    <p className="ideas-paragraph">Abrigo que resgata cães e gatos das ruas.</p>
                </div>

                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoAnimal} alt="Logo da ong de animais"/>
                        <Link className="project-title-link" to="/projeto-description">Amigo Quatro Patas</Link>
                    </div>
                    <p className="ideas-paragraph">Abrigo que resgata cães e gatos das ruas.</p>
                </div>

                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoAnimal} alt="Logo da ong de animais"/>
                        <Link className="project-title-link" to="/projeto-description">Amigo Quatro Patas</Link>
                    </div>
                    <p className="ideas-paragraph">Abrigo que resgata cães e gatos das ruas.</p>
                </div>

                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoAnimal} alt="Logo da ong de animais"/>
                        <Link className="project-title-link" to="/projeto-description">Amigo Quatro Patas</Link>
                    </div>
                    <p className="ideas-paragraph">Abrigo que resgata cães e gatos das ruas.</p>
                </div>

                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoAnimal} alt="Logo da ong de animais"/>
                        <Link className="project-title-link" to="/projeto-description">Amigo Quatro Patas</Link>
                    </div>
                    <p className="ideas-paragraph">Abrigo que resgata cães e gatos das ruas.</p>
                </div>

                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoAnimal} alt="Logo da ong de animais"/>
                        <Link className="project-title-link" to="/projeto-description">Amigo Quatro Patas</Link>
                    </div>
                    <p className="ideas-paragraph">Abrigo que resgata cães e gatos das ruas.</p>
                </div>

                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoAnimal} alt="Logo da ong de animais"/>
                        <Link className="project-title-link" to="/projeto-description">Amigo Quatro Patas</Link>
                    </div>
                    <p className="ideas-paragraph">Abrigo que resgata cães e gatos das ruas.</p>
                </div>

                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoAnimal} alt="Logo da ong de animais"/>
                        <Link className="project-title-link" to="/projeto-description">Amigo Quatro Patas</Link>
                    </div>
                    <p className="ideas-paragraph">Abrigo que resgata cães e gatos das ruas.</p>
                </div>

                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoAnimal} alt="Logo da ong de animais"/>
                        <Link className="project-title-link" to="/projeto-description">Amigo Quatro Patas</Link>
                    </div>
                    <p className="ideas-paragraph">Abrigo que resgata cães e gatos das ruas.</p>
                </div>
            </div>
        </section>
    )
}

export default Ideas;