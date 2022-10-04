import LocalMallIcon from '@mui/icons-material/LocalMall';

const CartWidget = () =>{
    return (
        <div className="d-flex" id='btn-cart'>
            <LocalMallIcon/><span className='fs-5 bg-dark text-white fw-bold ms-2 rounded-circle px-2'>1</span>
        </div>
    )
}
export default CartWidget