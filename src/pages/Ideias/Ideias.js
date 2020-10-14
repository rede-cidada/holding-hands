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
                <div className="project-card">
                    <div className="icon-title-cards">
                        {/* <Link className="project-title-link" to="/projeto-description">Nome do Projeto</Link> */}
                        {data.map(({nome}, index) => (
                            <p className="project-title-link" key={nome} onClick={() => setIndex(index)}>{nome}</p>
                        ))}
                    </div>
                    <p className="ideas-paragraph">
                        {data && <p>{data[index]?.descricao}</p>}
                    </p>
                    
                    <p className="ideas-paragraph">
                        {data && <p>{data[index]?.responsavel}</p>}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Ideas;