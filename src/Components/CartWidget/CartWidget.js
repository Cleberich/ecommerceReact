import Cart from './assets/cart.svg'

const CartWidget = () =>{
    return (
        <div className="d-flex" id='btn-cart'>
            <img src={Cart} alt="cart"/><span className='fs-5 bg-amarillo text-dark fw-bold ms-2 rounded-circle px-2'>1</span>
        </div>
    )
}
export default CartWidget