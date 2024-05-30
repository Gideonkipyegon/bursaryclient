import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { apidomain } from '../utils/domains';
import Axios from 'axios'
import './Bursaries.css'
function Bursaries() {
  const navigate= useNavigate();
  const schema = yup.object().shape({
    Name: yup.string().required("Name is required"),
    Description: yup.string().required("Description is required"),
    
  })
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), });
  const onSubmit = (data) => {
      Axios.post(`${apidomain}/Bursaries`, data)
          .then((response) => {
              console.log(response);
              console.log('success', response.data.message);
              alert("Application successfull")
              navigate("/loanApplicationlist");
          })
          .catch((response) => {
              console.log(response)

          });
  }
  return (
    <div className='bur'>
      
      <form className='burform3' onSubmit = { handleSubmit(onSubmit)}>
        <h3 style={{textDecoration:'underline'}}>Bursary Application</h3>
        <label htmlFor="">Name:</label>
        <input type="text" {...register("Name")} placeholder='your name' />
        <p>{errors.Name?.message}</p>
        <label htmlFor="">Reason For Application:</label>
        <input type="text" {...register("Description")} placeholder='Reason' />
        <p>{errors.Description?.message}</p>
        <input type="text" {...register("EligibilityCriteria")} placeholder='Area of specialization' />
        <p>{errors.EligibilityCriteria?.message}</p>
        <input type="text" {...register("Amount")} placeholder='Amount' />
        <p>{errors.Amount?.message}</p>
        <button type='submit'>Apply</button>
      </form>
    
    </div>
  )
}

export default Bursaries




