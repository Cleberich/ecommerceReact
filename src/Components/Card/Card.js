import './card.css';
import Counter from '../Counter/Counter'

  
const ItemList = ({ products }) => {
        

    return (
        <div className="row mx-2">
            { products.map(product => 
            <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
                <div className="card my-2 mx-1">
                {<img src={product.img} className="sizeImg" id="" alt="pro"></img>}
                <h3 className="fs-6">{product.name.toUpperCase()}</h3>
                <h3 className="fs-6 fw-bold">${product.price}</h3>
                <p className='text-success small fw-bold'>¡Últimas {product.stock} unidades!</p>
                <Counter />
                </div>
            </div>) }
        </div>
    )
}

export default ItemList