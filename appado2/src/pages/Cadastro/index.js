import Header from '../../components/Header';
import './style.css'
import React, { useState } from 'react';

function Cadastro() {
    const [nome, setNome]= useState('');
    const [endereço, setEndereço]= useState('');
    const [cpf, setCpf]= useState('');
  
  const [dadosUsuario, setDadosUsuariox]=useState({
     nomekk: "xxxxxxxxxxxxxxxxx",
     endereçokk: "xxxxxxxxxxxxxxxxx",
     cpfkk: "000.000.000-00"
  })
    
    function handleRegister(evento) {
        evento.preventDefault();

        setDadosUsuariox({
            nomekk: nome,
            endereçokk: endereço,
            cpfkk: cpf
        })
    }
    return (
        <div>
            <Header/>

            <h2>CADASTRO DE CLIENTE</h2>
            <form onSubmit={handleRegister}>
                <label>Nome: </label>
                <input id='nome' type='text' value={nome} onChange={(evento) => setNome(evento.target.value)} />
                <br/>
                <label>Endereço: </label>
                <input id='endereço' type='text' value={endereço} onChange={(evento) => setEndereço(evento.target.value)} />
                <br/>
                <label>CPF: </label>
                <input id='cpf' type='text' value={cpf} onChange={(evento) => setCpf(evento.target.value)} />
                <button type='submit' onClick={(e) => {
                    
                }}>Cadastrar!</button>
            </form>
            
            <div className='cadastro'>

                <p><strong>Nome: </strong>{dadosUsuario.nomekk}</p>
                <p><strong>Endereço: </strong>{dadosUsuario.endereçokk}</p>
                <p><strong>CPF: </strong>{dadosUsuario.cpfkk}</p>

            </div>
        </div>

    )
}

export default Cadastro