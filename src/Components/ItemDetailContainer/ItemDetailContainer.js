import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () =>{

    const [ product, setProduct ] = useState({})

    const [ productId ] = useParams()
    console.log(productId)

    useEffect (()=>{
        getProduct(productId).then(response =>{
            console.log(response)
            setProduct(response)
        })
    }, [])

    return (
        <div>
            <h1>Detalle del producto</h1>
            <h2>{product.name}</h2>
           
        </div>
    )
}
export default ItemDetailContainer