import React, { useContext, useEffect, useState } from "react";
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ProdutoContext } from '../../contexts/produto';
import './checkout.css';


export default function Checkout() {

    const { cartItem, setCartItem, setCartNumberItens, cartNumberItens } = useContext(ProdutoContext)
    const [priceItem, setPriceItem] = useState(0)
    const [altera, setAltera] = useState(0)

    var valor = 0;

    function AddSameItem(item) {
        cartItem.push(item);
        setCartNumberItens(cartNumberItens + 1)
        setAltera(altera + 1);
        toast.success('Produto adicionado')
    }

    function RemoveItem(id) {
        var index = cartItem.indexOf(id)
        if (index > -1) {
            cartItem.splice(index, 1)
            setCartNumberItens(cartNumberItens - 1)
            setAltera(altera + 1)
            toast.warning('Produto removido')
        }
    };

    useEffect(() => {
        for (var i = 0; i < cartItem.length; i++) {
            valor += parseFloat(cartItem[i].price)
        }
        setPriceItem(valor);
    }, [altera]);

    return (
        <div className='check-container'>
            <h2 className='text-cart'>store cart</h2>
            <h2 style={{'color':'green', 'marginBottom':'25px'}}>$ {priceItem},00</h2>
            {
                cartItem.map((item) => {
                    return (
                        <>
                            <div className='card-item'>
                                <div>
                                    <img src={item.image} alt={item.name}></img>
                                </div>
                                <h2>{item.name}</h2>
                                <h2>${item.price}</h2>
                                <button onClick={() => AddSameItem(item)}><FaPlus size={'25px'} /></button>
                                <button onClick={() => RemoveItem(item)}><FaTrashAlt size={'25px'} /></button>
                            </div>

                        </>
                    )
                })

            } 
            <Link to='/'>Continuar comprando</Link>           
        </div >
    )

}