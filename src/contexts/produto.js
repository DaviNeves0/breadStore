import { useState, createContext } from "react";


export const ProdutoContext = createContext();

function ProdutoProvider({ children }){

    const [departamento, setDepartamento] = useState('');
    const [produtos, setProdutos] = useState([]);
 
    return(
        <ProdutoContext.Provider value={{
            departamento,
            setDepartamento,
            produtos,
            setProdutos
        }}>
            {children}
        </ProdutoContext.Provider>
    )

}

export default ProdutoProvider;
