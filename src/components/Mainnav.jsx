import './mainnav.css'
import { useContext } from 'react'
import { Context } from "../context/parkingContext/context";
import Login from '../pages/Login';
import Bookinglist from './Bookinglist';
import Booking from './Booking';
export default function Mainnav() {
    const { ui } = useContext(Context);
    return (
        <div className='mainnav'>
            {
                ui == 'add' ? (
                    <div className="mainnav_wrapper">
                        {/* <h2>Book your slot</h2> */}
                        <Booking />
                    </div>
                ) : ui == 'view' ? (
                    <div className="mainnav_wrapper" >
                        {/* <h2>View All Bookinglist</h2> */}
                        <Bookinglist />
                    </div>
                ) : ui == 'Login' ? (
                    <div className="mainnav_wrapper">
                        {/* <h2>Login</h2> */}
                        <Login />
                    </div>
                ) : null

            }
        </div >
    )
}


