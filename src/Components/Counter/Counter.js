import { useState } from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Counter = () => {
    const initial = 1
    const [count, setCount] = useState(initial)

    const decrement = () => {
        // accu = accu - 1
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        // accu = accu + 1
        if(count < 20) {
        setCount(count + 1)
        }
    }

   

    return (
        <div className='d-flex justify-content-between bg-danger w-100'>
            <div className='d-flex border border-danger '>
                <button className="btn btn-outline-light mb-1 border-0" onClick={decrement}>-</button>
                <h1 className=' fs-6 mt-2 text-white'>{count}</h1>
                <button className="btn btn-outline-light mb-1 border-0 " onClick={increment}>+</button>
            </div>
            <div className=''>
                <button className=' px-2 mb-1 btn btn-outline-danger rounded-circle text-white'><ShoppingBagOutlinedIcon/></button>
            </div>
        </div>
    )
}



export default Counter
