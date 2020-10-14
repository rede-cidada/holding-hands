import React, { useEffect, useState } from "react";
//import { Link } from 'react-router-dom';
import './ideas.css';

import searchIcon from "../../assets/img/ideas/search-icon.png"

const Ideas = () => {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState();

    useEffect(() => {
        const getData = async() => {
            const informacoes = await fetch("https://raw.githubusercontent.com/rede-cidada/fake-data-api/main/holding-hands/data.json");
            const date = await informacoes.json();
            setData(date);
            console.log(date);
        };
        getData();
    }, []);

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
            {data.map(({nome}, index) => (
                <div className="card">
                    <div className="header-card"></div>
                    <div className="main-card">
                    <h2 className="title-card">{data[index]?.nome}</h2>
                        <p className="paragraph-card">{data[index]?.descricao}</p>
                    </div>
                
                <div className="div-information">
                
                    <div className="information information-left">
                        <h3 className="title-information">5.000</h3>
                        <p className="paragraph-information">Doações em dinheiro</p>
                    </div>
                    
                    <div className="information information-center">
                        <h3 className="title-information">500</h3>
                        <p className="paragraph-information">Objetos Doados</p>
                    </div>
                    
                    <div class="information information-right">
                        <h3 className="title-information">123</h3>
                        <p className="paragraph-information">Voluntarios</p> 
                    </div>
        
                </div>
                </div>
                ))}
            </div>
        </section>
    )
}

export default Ideas;