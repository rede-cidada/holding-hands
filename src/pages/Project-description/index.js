import React from 'react';
import Location from '../../assets/img/Project-description/location.svg'

import './Project-description.css'

import { Link } from 'react-router-dom';

const ProjectDescription = () =>{
    return(
        <div>
            <div className="container-ProjectDescription">
                <div className="title-container">
                    <div><h1>adssasdfsgsdf gfd</h1></div>
                </div>

                <div className="container-description">
                    <div className="containers information-projeto">
                        <div>
                            <h2>Responsavel pela ONG</h2>
                            <p>ssdfsdgsdgsd</p>

                            <h2 className="title-location">Endereço</h2>
                            <div className="location">
                                <img src={Location} alt="localização"/><p>sdfsdgsgsdggewwegsdg.</p>
                               
                            </div> 
                            
                            <div className="maps-container">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15801.903756689331!2d-34.898200596231725!3d-8.052836998041597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smaps!5e0!3m2!1spt-BR!2sbr!4v1602204134379!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
            </div>
        </div>
    )
}

export default ProjectDescription;