import React from "react";
import Headers from "../../Headers";
import Footer from "../../Footer";
import { Table } from 'reactstrap'

function Contato(){
    return(
        <div className="pagina-fundo">
            <div>
                <Headers />
            </div>

            <div className="pagina-contato" >
                <div>
                    <div>
                        <h2>Vendas</h2>
                    </div>
                    <Table borderless>
                    <thead>
                        <tr>
                            <th>E-mail</th>
                            <th>Número</th>
                            <th>Whatsapp</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>vendas@alucarros.com.br</td>
                            <td>0800 587 5852</td>
                            <td>(11) 95684-2546</td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
                <div>
                    <div>
                        <h2>Administrativo</h2>
                    </div>
                    <Table borderless>
                    <thead>
                        <tr>
                            <th>E-mail</th>
                            <th>Número</th>
                            <th>Whatsapp</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>administrativo@alucarros.com.br</td>
                            <td>0800 587 5853</td>
                            <td>(11) 95684-2547</td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
                <div>
                    <div>
                        <h2>Suporte</h2>
                    </div>
                    <Table borderless>
                    <thead>
                        <tr>
                            <th>E-mail</th>
                            <th>Número</th>
                            <th>Whatsapp</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>suporte@alucarros.com.br</td>
                            <td>0800 587 5854</td>
                            <td>(11) 95684-2548</td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
        
    )
}

export default Contato;