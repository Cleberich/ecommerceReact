import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from "react-router-dom"
import Counter from "../Counter/Counter"
import { Button } from "@mui/material"
import Scotia from '../Scotia/Scotia';
import AccordionBootstrap from '../Accordion/Accordion'
import Boton from '../Button/Button';

const ItemDetailContainer = () =>{

    const [ product, setProduct ] = useState({})

    const { productId } = useParams()
    console.log(productId)

    useEffect (()=>{
        getProduct(productId).then(response =>{
            console.log(response)
            setProduct(response)
        })
    }, [])

    return (
       <div className="card border-0 m-5 text-start">
         <div className="m-5 row">
            <div className="col-1 "></div>
            <div className='col-1 my-auto d-block'>
            <img className="w-100 mb-2" src={product.img1} alt={product.name}></img>
            <img className="w-100 my-2" src={product.img2} alt={product.name}></img>
            <img className="w-100 my-2" src={product.img3} alt={product.name}></img>
            <img className="w-100 mt-2" src={product.img4} alt={product.name}></img>
            </div>
            <div className="col-4">
            <img className="w-100" src={product.img} alt={product.id}></img>
            </div>
            <div className="col-4 mt-3 ms-5">
            <small className='fs-8 badge bg-gray text-dark mt1 py-1'>NUEVO</small>
            <h2 className="text-lef mt-4 fs-20 fw-600">{product.name}</h2>
            <small className='fs-10 text-gris'>Art Id:{product.id}</small>

            <h3 className="fs-14 fw-bolder "> UYU <span className='fs-18 fw-bolder'>${product.price}</span></h3>
            <Scotia/> <p className="fs-8 text-danger "> UYU <span className='fs-7 text-danger'>${product.sale}</span></p>
            <button className='btn btn-outline-dark me-1 '><b className='fw-bolder fs-7'>{product.talle1}</b></button>
            <button className='btn btn-outline-dark me-1 '><b className='fw-bolder fs-7'>{product.talle2}</b></button>
            <button className='btn btn-outline-dark me-1 '><b className='fw-bolder fs-7'>{product.talle3}</b></button>
            <Counter/>
            <Boton className='btn btn-danger' texto={'Agregar al carrito'}/>
            <h3 className='fs-14 fw-600 mt-4'>Descripción</h3>
            <p className="text-dark fs-12 mt-3">{product.description}</p>
            <AccordionBootstrap/>
            
            </div> 
            <div className="col-1"></div>

        </div>
       </div>
    )
}
export default ItemDetailContainer