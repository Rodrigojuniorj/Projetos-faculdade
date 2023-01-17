import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

// Imports ADMIN
import Dasboard from './pages/admin/dashboard';
import Produtos from './pages/admin/produtos';
import ProdutoEditar from './pages/admin/produtos/produtos.editar';
import ProdutoCadastrar from './pages/admin/produtos/produtos.cadastrar';

import Usuarios from './pages/admin/usuarios';
import UsuarioEditar from './pages/admin/usuarios/usuario.editar';
import UsuarioCadastrar from './pages/admin/usuarios/usuarios.cadastrar';

//Imports Client
import Home from './pages/client/home/index';
import ProdutoDetails from './pages/client/produtos/produtos.details';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes >
                {/**Rota Cliente */}
                <Route path="/" element={<Home/>}  />
                <Route path="/produtos/:idProduto" element={<ProdutoDetails />} />

                {/**Rota Administrador */}
                <Route path="/admin"  element={<Dasboard/>} />
                <Route path="/admin/produtos" element={<Produtos/>} />
                <Route path="/admin/produtos/cadastrar"  element={<ProdutoCadastrar/>} />
                <Route path="/admin/produtos/editar/:idProduto" element={<ProdutoEditar/>} />

                <Route path="/admin/usuarios" element={<Usuarios/>} />
                <Route path="/admin/usuarios/cadastrar"  element={<UsuarioCadastrar/>} />
                <Route path="/admin/usuarios/editar/:idProduto" element={<UsuarioEditar/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;