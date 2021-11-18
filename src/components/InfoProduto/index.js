import React,{useContext} from "react";
import { ProdutoContext } from '../../contexts/produto'
import {FaCartPlus} from 'react-icons/fa'
import './infoproduto.css'

export default function InfoProduto({ conteudo, close }) {

    const { cartNumberItens, setCartNumberItens, cartItem, setCartItem } = useContext(ProdutoContext);

    function AddItemCart() {
        setCartNumberItens(cartNumberItens + 1)
        setCartItem([...cartItem, conteudo])
    }

    return (
        <div className='info-produto'>
            <div className='imagem-produto'>
                <img src={conteudo.image} alt={conteudo.name} />
            </div>
            <h1>{conteudo.name}</h1>
            <p>{conteudo.description}</p>
            <button onClick={AddItemCart}><FaCartPlus/> ${conteudo.price}</button>
        </div>
    )
}