import React from 'react';
import '../ideas/ideas.css';
import searchIcon from "../../assets/img/ideas/search-icon.png";
import logoAnimal from "../../assets/img/ideas/logo-bicho.jpg";
import logoExample from "../../assets/img/ideas/exemplo.gif";
import logoFood from "../../assets/img/ideas/comida.png";

const Ideas = () => {
    return (      
        <section className="ideas-container"> 
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

            <div className="project-cards">
                
                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoAnimal} alt="Logo da ong de animais"/>
                        <a className="project-title-link" href="#">Amigo Quatro Patas</a>
                    </div>
                    <p className="ideas-paragraph">Abrigo que resgata cães e gatos das ruas.</p>
                </div>

                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoExample} alt="Logo exemplo"/>
                        <a className="project-title-link" href="#">Educação para todos</a>
                    </div>    
                    <p className="ideas-paragraph">Educação gratuita para adultos e idosos que não 
                    possuem escolaridade e boas condições financeiras.</p>
                </div>
            
                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoFood} alt="Logo exemplo"/>
                        <a className="project-title-link" href="#">Barriga cheia</a>
                    </div>
                    <p className="ideas-paragraph">Distribuição de alimentos pra moradores de rua.</p>
                </div>
                
                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoExample} alt="Logo exemplo"/>
                        <a className="project-title-link" href="#">Projeto criança escola</a>
                    </div>
                    <p className="ideas-paragraph">Buscamos professores voluntários para crianças de região 
                        carente sem acesso à escola.</p>
                </div>
            
                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoExample} alt="Logo exemplo"/>
                        <a className="project-title-link" href="#">Lorem ipsum</a>
                    </div>
                    <p className="ideas-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod.</p>
                </div>
                
                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoExample} alt="Logo exemplo"/>
                        <a className="project-title-link" href="#">Lorem ipsum</a>
                    </div>
                    <p className="ideas-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod.</p>
                </div>
                
                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoExample} alt="Logo exemplo"/>
                        <a className="project-title-link" href="#">Lorem ipsum</a>
                    </div>
                    <p className="ideas-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod.</p>
                </div>
                
                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoExample} alt="Logo exemplo"/>
                        <a className="project-title-link" href="#">Lorem ipsum</a>
                    </div>
                    <p className="ideas-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod.</p>
                </div>

                <div className="project-card">
                    <div className="icon-title-cards">
                        <img className="icon-ideas" src={logoExample} alt="Logo exemplo"/>
                        <a className="project-title-link" href="#">Lorem ipsum</a>
                    </div>
                    <p className="ideas-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod.</p>
                </div>
            </div>
        </section>
    )
}

export default Ideas;