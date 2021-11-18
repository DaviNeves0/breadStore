import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import { ProdutoContext } from '../../contexts/produto'
import { FaShoppingCart } from 'react-icons/fa'
import './sidebar.css'


export default function SideBar() {

    const { setDepartamento, cartNumberItens } = useContext(ProdutoContext);

    return (
        <div className='sidebar'>
            <div className='cart'>
                <Link to='/checkout'><FaShoppingCart size={'3rem'} /></Link>
                {
                    cartNumberItens !== 0 ? <span>{cartNumberItens}</span> : <p></p>
                }
            </div>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="">All</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="games">Games</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="baby">Baby</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Movies">Movies</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Computers">Computers</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Toys">Toys</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Shoes">Shoes</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Sports">Sports</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Outdoors">Outdoors</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Kids">Kids</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Music">Music</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Home">Home</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Eletronics">Eletronics</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Health">Health</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Beauty">Beauty</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Books">Books</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Jewelery">Jewelery</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Automotive">Automotive</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Clothing">Clothing</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Grocery">Grocery</button>
            <button onClick={(e) => { setDepartamento(e.target.value) }} value="Garden">Garden</button>
        </div>
    )
}