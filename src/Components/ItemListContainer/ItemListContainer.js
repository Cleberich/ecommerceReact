import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../Card/Card"
import SpinnerReact from "../Spinner/Spinner";


const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        getProducts().then(resolve => {
            console.log(resolve)
            setProducts(resolve)
        }).catch(error =>{
            console.log(error)
        }).finally(()=>{
            console.log("carga finalizada");
            setLoading(false)
        })
    })
    
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
            <h1  className="fs-3 mt-2">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
        
    
}
export default ItemListContainer