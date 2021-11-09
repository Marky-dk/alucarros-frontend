import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from './pages/Main'
import Loja from "./pages/Loja";
import Contato from "./pages/Contato";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/lojas" element={<Loja/>} />
                <Route path="/contato" element={<Contato/>} />
            </Routes>   
        </BrowserRouter>
    )
}

export default Rotas;