import React, { useContext } from "react";
import { ProdutoContext } from '../../contexts/produto'
import { FaCartPlus } from 'react-icons/fa'
import './infoproduto.css'
import { toast } from "react-toastify";
import { Animated } from "react-animated-css";

export default function InfoProduto({ conteudo, close, visible }) {

    const { cartNumberItens, setCartNumberItens, cartItem, setCartItem } = useContext(ProdutoContext);

    function AddItemCart() {
        setCartNumberItens(cartNumberItens + 1)
        setCartItem([...cartItem, conteudo])
        toast.success('Produto adicionado ao carrinho')
    }

    return (
        <Animated animationIn="fadeInRight" animationOut="fadeOutRight" animationInDuration={1000} animationOutDuration={1000} visible={true}>
            <div className='info-produto'>
                <div className='imagem-produto'>
                    <img src={conteudo.image} alt={conteudo.name} />
                </div>
                <h1>{conteudo.name}</h1>
                <p>{conteudo.description}</p>
                <button onClick={AddItemCart}><FaCartPlus /> ${conteudo.price}</button>
            </div>
        </Animated>
    )
}