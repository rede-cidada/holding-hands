import React from 'react';
import Location from '../../assets/img/Project-description/location.svg'
import {dados} from '../../Dados/projetos'

import './Project-description.css'

import { Link } from 'react-router-dom';

const ProjectDescription = () =>{
    return(
        <div>
            {dados.map((item,index)=>
            <div className="container-ProjectDescription" key={index}>
                    <h2></h2>
                    <p></p>
                <div className="title-container">
                    <div><h1>{item.nome}</h1></div>
                </div>

                <div className="container-description">
                    <div className="containers information-projeto">
                        <div>
                            <h2>Responsavel pela ONG</h2>
                            <p>{item.responsavel}</p>

                            <h2>Endereço</h2>
                            <div className="location">
                                <img src={Location} alt="localização"/><p>{item.endereco},{item.cidade},{item.estado}.</p>
                            </div>   
                        </div>
                    </div>

                    <div className="containers">
                        <h2>Descrição</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking 
                            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                            as opposed to using 'Content here,content here', making it look like readable English. Many desktop publishing
                            packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                            will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                            accident, sometimes on purpose (injected humour and the like).</p>
                    </div>

                    <div className="containers">
                        <h2>Galeria</h2>
                    </div>

                    <div className="containers volunteers">
                        <h2>Faça parte deste time</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first
                        true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
                        sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
                        free from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>

                    <div className="containers">
                        <h2>Doações</h2>
                        <div className="btn-container">
                            <Link to="/Donation-objects" className="btn objects">Doar objetos</Link>
                            <Link to="" className="btn money">Doar Dinheiro</Link>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default ProjectDescription;