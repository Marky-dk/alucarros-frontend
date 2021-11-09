import React from "react";
import { Link } from "react-router-dom";
import Headers from "../../Headers"
import Footer from "../../Footer";

function Main() {
    return (
        <div className="pagina-fundo">
            <div>
                <Headers />
            </div>
            
            <div className="pagina-principal">
                <h1 className="slogan">Alugue o carro dos sonhos</h1>
                <div> 
                    <div className="texto">                     
                        <p>Encontre a loja mais próxima de você</p>                              
                        <Link to="/lojas" className="botao"> 
                            Lojas 
                        </Link>
                    </div>
               
                    <div className="texto">     
                        <p>Entre em contato com um de nossos canais</p>           
                        <Link to="/contato" className="botao"> 
                            Contato 
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Main;