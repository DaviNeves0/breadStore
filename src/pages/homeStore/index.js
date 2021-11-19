import React, { useEffect, useContext, useState } from "react";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { toast } from 'react-toastify'
import { ProdutoContext } from '../../contexts/produto';
import SideBar from '../../components/SideBar'
import api from "../../service/api";
import './homestore.css'
import InfoProduto from "../../components/InfoProduto";


export default function HomeStore() {

    const { produtos, setProdutos, departamento } = useContext(ProdutoContext)

    const [isVisible, setIsVisible] = useState(false);
    const [detail, setDetail] = useState([]);


    function LikeItem(item) {
        const mylikes = localStorage.getItem('likes');
        const like = JSON.parse(mylikes)
        const haslike = (like.some((like) => like.id === item.id))
        if (haslike) {
            toast.warning('Produto já está em seus favoritos')
            return;
        }
        like.push(item)
        localStorage.setItem('likes', JSON.stringify(like))
        toast.success('Favoritado com sucesso')
        return(
            <div>
                <FaRegHeart size={'40px'} />
            </div>
        )
    }

    function AbrirInfo(item) {
        if (isVisible === true) {
            setDetail(item);
            return
        }
        setIsVisible(true);
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
            {isVisible && (<InfoProduto
                conteudo={detail}
                close={AbrirInfo}
                visible={isVisible}
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
                                <div style={{ 'float': 'right', 'marginRight': '25px' }}>
                                    <button onClick={() => { LikeItem(item) }}><FaRegHeart size={'40px'}/></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
