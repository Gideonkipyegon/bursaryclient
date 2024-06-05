import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContextProvider } from './context/userContext/Context.jsx'

// import { UIContextProvider } from "./context/parkingContext/Context.jsx";
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidenav from './components/Sidenav'
import Status from './components/Status'
import Disbursements from './components/Disbursements'
import Bursaries from './components/Bursaries'
import LoanApplicationlist from './components/LoanApplicationlist.jsx'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/Sidenav' element={<Sidenav />}/>
      <Route path='/Home' element={<Home />}/>
      <Route path='/LoanApplicationlist' element={<LoanApplicationlist />}/>
      <Route path='/Bursaries' element={<Bursaries />}/>
      <Route path='/Disbursements' element={<Disbursements />}/>
      <Route path='/Status' element={<Status />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Signup' element={<SignUp />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Contact' element={<Contact />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
      )
}

export default App;
