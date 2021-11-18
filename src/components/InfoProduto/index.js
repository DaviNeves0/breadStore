import React from "react";
import './infoproduto.css'

export default function InfoProduto({ conteudo, close }) {
    return (
        <div className='info-produto'>
            <div className='imagem-produto'>
                <img src={conteudo.image} alt={conteudo.name} />
            </div>
            <h1>{conteudo.name}</h1>
            <p>{conteudo.description}</p>
            <button>$ {conteudo.price}</button>
        </div>
    )
}