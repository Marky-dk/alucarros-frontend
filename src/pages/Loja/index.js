import React, { useEffect, useState } from "react";
import Headers from "../../Headers";
import Footer from "../../Footer";
import api from '../../api'

function Loja() {
    const[lojas, setLoja] = useState([])
    useEffect(() => {
        api.get('loja/retornaTodos').then(resposta => {
            setLoja(resposta.data)
        })
    }, [])

    console.log(lojas)
    return (
        <div className="pagina-fundo">
            <div>
                <Headers />
            </div>
            <div className="pagina-loja"> {
                    lojas.map(loja => {
                        return (
                            <div className="card" key={loja.id}>
                                <h2> {loja.nome} </h2>
                                <p> {loja.tipo} </p>
                                <span> {loja.local} </span>
                            </div>
                        )
                    })
                }
            </div>
            <div>
            <Footer />
            </div>
        </div>
    )
}

export default Loja;