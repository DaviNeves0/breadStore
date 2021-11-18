import React, { useContext, useDebugValue, useEffect, useState } from "react";
import { ProdutoContext } from '../../contexts/produto';
import './checkout.css';


export default function Checkout() {

    const { cartItem, setCartItem } = useContext(ProdutoContext)

    const [priceItem, setPriceItem] = useState(0)

    var valor = 0;

    function RemoveItem({id}) {
        var index = cartItem.indexOf(id)
        if(index > -1){
           let newArray = cartItem.splice(index,1);
           setCartItem(newArray);
        }
        
    }

    useEffect(() => {
        function SomaCart() {

            for (var i = 0; i < cartItem.length; i++) {
                valor += parseFloat(cartItem[i].price)
            }
            setPriceItem(valor);
        }
        SomaCart()
    }, [cartItem])



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
                            </div>

                        </>
                    )
                })

            }
            <h2>$ {priceItem}</h2>
        </div >
    )

}