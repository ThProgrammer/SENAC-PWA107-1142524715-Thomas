/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*
2 * SENAC - TADS - Programacao Web *
3 * ADO #02 Trabalhando As Rotas e LINKS *
4 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*
5 * Nome : Ana Laura Campoy & Thomas Ferreira da Silva*
6 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/


import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Cadastro from '../src/pages/Cadastro';
import ContaCorrente from './pages/ContaCorrente';
import React, { useState } from 'react';
import Financiamento from './pages/Financiamento';
import Sobre from './pages/Sobre'

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='/financiamento' element={<Financiamento/>} />
          <Route path='/contacorrente' element={<ContaCorrente/>} />
          <Route path='/sobre' element={<Sobre/>} />
      </Routes>
    </Router>
  );
}

export default App;
