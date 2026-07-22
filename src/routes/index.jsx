import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastrar from '../pages/Cadastrar';
import EscolhaMundo from '../pages/EscolhaMundo';
import TrilhaModulo from '../pages/TrilhaModulo';
import MaterialDidatico from '../pages/MaterialDidatico';
import Configuracoes from '../pages/Configuracoes';
import Loja from '../pages/Loja';

export default function RoutesMain() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/principal" element={<EscolhaMundo />} />
            <Route path="/modulo" element={<TrilhaModulo />} />
            <Route path="/material/:idFase" element={<MaterialDidatico />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/loja" element={<Loja/>}/>
        </Routes>
    );
}