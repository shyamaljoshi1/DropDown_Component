import { useLocation } from 'react-router-dom'
import './country.css'
import { useNavigate } from 'react-router-dom';
const Country = () =>{
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick=()=>{
        navigate('/')
    }
    return(
        <div className='main__container'>
            <div className="container2">
                You selected&nbsp;<span>{location.state.country}</span>&nbsp;Country and&nbsp;<span>{location.state.State1}</span>&nbsp;State
            </div>
            <button type="submit" onClick={handleClick} style={{ cursor: "pointer", margin:"80px",padding:"8px 12px",textDecoration:"none",borderRadius:"10px",boxShadow:"none",fontFamily:"Montserrat",fontWeight:"bold",letterSpacing:"2px",fontSize:"20px"}}>Go Home</button>
        </div>
    )
}

export default Country;