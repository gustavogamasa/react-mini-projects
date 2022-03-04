import React from "react";
import './app.css'
import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/comParametro'
import Fragmento from './components/basicos/fragmento'
import Aleatorio from './components/basicos/aleatorio'
import Card from './components/layout/card'
import Familia from "./components/basicos/familia";

export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos REACT (app.jsx)</h1>

            <div className="Cards">

            <Card titulo="#5 Família com membros" color='#3399ff'>
                <Familia></Familia>
                
            </Card>


            <Card titulo="#4 Desafio aleatório" color='#990000'>
                <Aleatorio min={0} max={100} />
            </Card>

            <Card titulo="#3 Fragmento" color='#ff7f50'>
                <Fragmento />
            </Card>

            <Card titulo="#2 Com parametro" color='#c39797'>
                <ComParametro
                    titulo="Situação do aluno:"
                    aluno="Gustavo"
                    nota={10} />
            </Card>

            <Card titulo="#1 Primeiro componente" color='#0e2f44'>
                <Primeiro />
            </Card>
            </div>


        </div>
    )

}