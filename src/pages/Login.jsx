import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/userContext/Context';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apidomain } from '../utils/domains';
import './login.css'
function Login() {
  // const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    Name: yup.string().required('Name is required'),
    Password: yup.string().required('password is required').min(4, 'password is too short'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => { 
    Axios.post(`${apidomain}/auth/login`, data)
   .then(({data}) => {
    if(data.token){
        // dispatch({type:'LOGIN_SUCCESS', payload:data})
        alert("login successfull")
        navigate("/home");
    }
   
})
.catch((response) => {
    console.log(response)
    alert("wrong credentials")
    
});}
  return (
    <div className='login'>
      <fieldset>
      <legend style={{textAlign:'center',fontFamily:'fantasy',fontSize:"20px"}}>Login Page</legend>
        <form className="loginform" onSubmit={handleSubmit(onSubmit)}>
        {/* <h3><u>Login page</u></h3> */}
        <label htmlFor="">Name</label>
        <input type="text" {...register('Name')} placeholder="Yourname"/>
        <p>{errors.FirstName?.message}</p>
        <label htmlFor="">Password</label>
        <input type="password" {...register('Password')} placeholder="password"/>
        <p>{errors.password?.message}</p>
        <a href="Signup" style={{color:'black',fontFamily:'serif'}}>i don't account?</a>
        <button type='submit'>Login</button>
        </form>
        </fieldset>
    </div>
  )
}

export default Login