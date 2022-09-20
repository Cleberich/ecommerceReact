import './ActionBar.css'


const ActionBar = ({action}) =>{
    return (
        <div className="d-flex justify-content-center bg-rojo">
            <h1 className="fs-7 fw-bold text-white mt-2">{action}</h1>
        </div>
    )
}
export default ActionBar