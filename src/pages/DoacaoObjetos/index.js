import React, {useState} from "react";
import "./doacaoObjetos.css";

const DoacaoObjetos = () => {

    const [count, setCount] = useState(0);
    if(count<0){
        setCount(0)
    }

    return(
        <div className="container-donation">
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
                        <button type="button" className="number-objects-btn" onClick={() => setCount(count + 1)}>+</button>
                        <input className="number-objects-input" value={count}/>
                        <button type="button" className="number-objects-btn" onClick={() => setCount(count - 1)}>-</button>
                    </div>
                   
                    <button className="btn-form-donation">Concluir</button>
                </div>
            </form>
        </div>
    )
}

export default DoacaoObjetos;