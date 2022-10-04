import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../Card/Card"
import SpinnerReact from "../Spinner/Spinner";
import '../Card/card.css'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'


const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()


    useEffect(()=>{
        getProducts(categoryId).then(resolve => {
            console.log(resolve)
            setProducts(resolve)
        }).catch(error =>{
            console.log(error)
        }).finally(()=>{
            console.log("carga finalizada");
            setLoading(false)
        })
    }, [categoryId])
    
    if(loading) {
        return (
            <div>
                <h1 className="fs-5 mt-5">Cargando productos...</h1>
                <SpinnerReact/>
            </div>
        )
       
    }

    return(
        <div>
            <div className="row" id="cajaContenedora">
                    <div className="col-2 fixed-top" id="sidebar">
                        <h2 className="fs-6 fw-bold  text-start ms-5 my-5">{greeting}</h2>
                        <h3 className='fs-7 fw-bold  text-start ms-5 mt-2'><Link className="text-dark text-decoration-none" to="/category/camperas">CAMPERAS</Link></h3>
                         <h3 className='fs-7 fw-bold  text-start ms-5 mt-2'><Link className="text-dark text-decoration-none" to="/category/camisas" >CAMISAS</Link></h3>
                        <h3 className='fs-7 fw-bold  text-start ms-5 mt-2'> <Link className="text-dark text-decoration-none" to="/category/pantalones" >PANTALONES & JEANS</Link></h3>
                         <h3 className='fs-7 fw-bold  text-start ms-5 mt-2'><Link className="text-dark text-decoration-none" to="/category/blazer" >BLAZER & TAPADOS</Link></h3>
                         <h3 className='fs-7 fw-bold  text-start ms-5 mt-2'><Link className="text-dark text-decoration-none" to="/category/vestidos" >VESTIDOS</Link></h3>
                    </div>
                    <div className="col-10 mt-5" id="cuerpo">
                    <ItemList products={products}/>
                    </div>
            </div>
            
            
        </div>
    )
        
    
}
export default ItemListContainer