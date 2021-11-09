import React from "react";
import { Table } from 'reactstrap'

const Footer = (props) => {
    return (
        <Table borderless>
            <thead>
                <tr>
                    <th className="letra">E-mail</th>
                    <th className="letra">Número</th>
                    <th className="letra">Whatsapp</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="letra">alucarros@alucarros.com.br</td>
                    <td className="letra">0800 587 5852</td>
                    <td className="letra">(11) 95684-2546</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Footer;