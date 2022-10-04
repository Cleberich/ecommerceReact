import './ActionBar.css'


const ActionBar = ({action}) =>{
    return (
        <div className="d-flex justify-content-center bg-negro" id='actionBar'>
            <h1 className="fs-7 fw-normal text-white mt-2">{action}</h1>
        </div>
    )
}
export default ActionBar