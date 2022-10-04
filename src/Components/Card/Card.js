import './card.css';
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom'
import Scotia from '../Scotia/Scotia';

  
const ItemList = ({ products }) => {
        

    return (
        <div className="row mx-3">
            { products.map(product => 
            <div className="col-sm-6 col-md-4 col-lg-3 text-start " key={product.id}>
                <div className="card my-2 border-0">
                <Link to={`/detail/${product.id}`} className="text-decoration-none text-dark">
                {<img src={product.img} className="sizeImg" id="" alt="pro"></img>}
                <h3 className="fs-7  mt-3">{product.name.toUpperCase()}</h3>
                <h3 className="fs-8 "> UYU <span className='fs-7'>${product.price}</span></h3>
                <Scotia/> <p className="fs-8 text-danger "> UYU <span className='fs-7 text-danger'>${product.sale}</span></p>
                <small className='fs-8 badge bg-gray mt1'>NUEVO</small>
                </Link>
                </div>
            </div>) }
        </div>
    )
}

export default ItemList