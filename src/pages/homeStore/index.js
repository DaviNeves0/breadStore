import React, { useEffect, useContext, useState } from "react";
import { ProdutoContext } from '../../contexts/produto';
import SideBar from '../../components/SideBar'
import api from "../../service/api";
import './homestore.css'
import InfoProduto from "../../components/InfoProduto";


export default function HomeStore() {

    const { produtos, setProdutos, departamento } = useContext(ProdutoContext)

    const [showInfo, setShowInfo] = useState(false);
    const [detail, setDetail] = useState([])

    function AbrirInfo(item) {
        if (showInfo === true) {
            setDetail(item);
            return
        }
        setShowInfo(true);
        setDetail(item);
    }
    useEffect(() => {
        async function LoadProdutos() {
            await api(`?department=${departamento}`)
                .then((res) => {
                    setProdutos(res.data)
                })
        }
        LoadProdutos()
    }, [departamento])

    return (
        <div className="display-flex">
            <SideBar />
            {showInfo && (<InfoProduto
                conteudo={detail}
                close={AbrirInfo}
            />)}
            <div className="grid-layout">
                {
                    produtos.map((item) => {
                        return (

                            <div className="card-produto">
                                <div className="img-produto">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <button onClick={() => AbrirInfo(item)} value={item.name}>{item.name}</button>
                                <h2>{item.product}</h2>
                                <div>
                                    <h1>$ {item.price}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
