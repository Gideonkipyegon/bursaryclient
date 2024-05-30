import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
function Header() {
  return (
    <div className='header'>
      <h3 className="logo" style={{fontFamily:"sans-serif",fontWeight:'bold'}}>ScholarEase</h3>
      <div className='header1'>
      <Link  to='/Home'>Home</Link>
      <Link  to='/Bursaries'>Bursaries</Link>
      <Link  to='/Disbursements'>Disbursements</Link>
      <Link  to='/LoanApplicationlist'>Applicationlist</Link>
      <Link  to='/About'>About</Link>
      <Link  to='/Contact'>Contact</Link>
      <Link  to='/Login'>Login</Link>
      <Link  to='/Signup'>Signup</Link>
      </div>
    </div>
  )
}

export default Header