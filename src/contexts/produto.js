import { useState, createContext } from "react";


export const ProdutoContext = createContext();

function ProdutoProvider({ children }) {

    const [departamento, setDepartamento] = useState('');

    const [produtos, setProdutos] = useState([]);

    const [cartNumberItens, setCartNumberItens] = useState(0);

    const [cartItem, setCartItem] = useState([]);

 

    return (
        <ProdutoContext.Provider value={{
            departamento,
            setDepartamento,
            produtos,
            setProdutos,
            cartNumberItens,
            setCartNumberItens,
            cartItem,
            setCartItem
        }}>
            {children}
        </ProdutoContext.Provider>
    )

}

export default ProdutoProvider;
