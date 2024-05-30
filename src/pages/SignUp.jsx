import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { apidomain } from '../utils/domains';
import Axios from 'axios'
import './signup.css'
function SignUp() {
  const navigate= useNavigate();
  const schema = yup.object().shape({
    Name: yup.string().required("Name is required"),
    Email: yup.string().required("Email is required"),
    Phone: yup.string().required("Phone is required"),
    Address: yup.string().required("Address is required"),
    Password: yup.string().required("Passwords is required").min(4, "Password is too short"),
  })
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), });
  const onSubmit = (data) => {
      Axios.post(`${apidomain}/auth/register`, data)
          .then((response) => {
              console.log(response);
              console.log('success', response.data.message);
              navigate("/Login");
          })
          .catch((response) => {
              console.log(response)

          });
  }
  return (
    <div className='signup'>
      <fieldset>
      <legend style={{textAlign:'center',fontFamily:'fantasy',fontSize:"20px"}}>SignUp</legend>
      <form className='signupform' onSubmit = { handleSubmit(onSubmit)}>
        <label htmlFor="">Name:</label>
        <input type="text" {...register("Name")} placeholder='Your name' />
        <p>{errors.Name?.message}</p>
        <label htmlFor="">Email:</label>
        <input type="text" {...register("Email")} placeholder='Email' />
        <p>{errors.Email?.message}</p>
        <label htmlFor="">Phone:</label>
        <input type="text" {...register("Phone")} placeholder='Phone no' />
        <p>{errors.Phone?.message}</p>
        <label htmlFor="">Address:</label>
        <input type="text" {...register("Address")} placeholder='address' />
        <p>{errors.Address?.message}</p>
        <label htmlFor="">Password:</label>
        <input type="password" {...register("Password")} placeholder='password' />
        <p>{errors.password?.message}</p>
        <label htmlFor="">Confirmpassword:</label>
        <input type="password" {...register("ConfirmPassword")} placeholder='confirmpassword' />
        <p>{errors.ConfirmPassword?.message}</p>
        <button type='submit'>Register</button>
      </form>
      </fieldset>
    </div>
  )
}

export default SignUp




