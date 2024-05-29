import { useContext } from 'react'
import './sidenav.css'
import { Context } from "../context/parkingContext/context";

export default function Sidenav() {
    const { dispatch } = useContext(Context);
    const handleAdd = () => {
        dispatch({ type: "ADD", payload: 'add' })
    }
    const handleView = () => {
        dispatch({ type: "ADD", payload: 'view' })
    }
    const handleLogin = () => {
        dispatch({ type: "LOGIN", payload: 'Login' })
    }
    return (
        <div className='sidenav'>
          <h2 style={{textAlign:'center',textDecoration:'underline',marginRight:'70px'}}>Dashboard</h2>
            <div className="sidenav_wrapper">
              <div className="sidenav_title" onClick={handleLogin}> Login</div>
            </div>
            <div className="sidenav_wrapper">
                <div className="sidenav_title" onClick={handleAdd}>Booking</div>
            </div>
            <div className="sidenav_wrapper">
                <div className="sidenav_title" onClick={handleView}>Bookinglist</div>
            </div>

        </div>
    )
}