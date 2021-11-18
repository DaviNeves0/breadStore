import React, { useContext, useEffect, useState } from "react";
import { ProdutoContext } from '../../contexts/produto';
import './checkout.css';


export default function Checkout() {

    const { cartItem, setCartItem, setCartNumberItens, cartNumberItens } = useContext(ProdutoContext)
    const [priceItem, setPriceItem] = useState(0)
    const [altera, setAltera] = useState(0)

    var valor = 0;

    function AddSameItem(item){
       cartItem.push(item);
       setCartNumberItens(cartNumberItens + 1)
       setAltera(altera+1);
    }

    function RemoveItem(id) {
        var index = cartItem.indexOf(id)
        if (index > -1) {
            cartItem.splice(index, 1)
            setCartNumberItens(cartNumberItens - 1)
            setAltera(altera + 1)
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
            <h2>Página de checkout</h2>
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
                                <button onClick={() => RemoveItem(item)}>Remove</button>
                                <button onClick={() => AddSameItem(item)}>Adicionar</button>
                            </div>

                        </>
                    )
                })

            }
            <h2>$ {priceItem}</h2>
        </div >
    )

}