import React from "react";


export default function sortearNumeroAleatorio(props) {

    const valor = parseInt(Math.random() * (props.max - props.min) + props.min);
    return (
        <div>
            <p> Numero aleatório: {valor}</p>
        </div>
    )

}

