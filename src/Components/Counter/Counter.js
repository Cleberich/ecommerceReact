import '../Card/card.css'
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
        <div className='d-flex justify-content-start mt-2 bg-white w-100'>
            <div className='d-flex border border-dark mb-2 me-2'>
                <button className="btn btn-outline-dark mb-0 border-0" onClick={decrement}>-</button>
                <h1 className=' fs-6 pt-2  text-center text-dark'>{count}</h1>
                <button className="btn btn-outline-dark mb-0 border-0" onClick={increment}>+</button>
            </div>
            <div>
            </div>
        </div>
    )
}



export default Counter
