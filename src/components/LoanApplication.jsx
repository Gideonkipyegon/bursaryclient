import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { apidomain } from '../utils/domains';
import Axios from 'axios';
import './LoanApplication.css';

function LoanApplication() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    SpotNumber: yup.string().required('SpotNumber is required'),
    SpotType: yup.string().required('SpotType is required'),
    Floor: yup.string().required('Floor is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [parkingSpots, setParkingSpots] = useState([]);
  
  useEffect(() => {
    // Fetch available slots from the server when the component mounts
    Axios.get(`${apidomain}/Applications`)
      .then((response) => {
        setParkingSpots(response.data);
      })
      .catch((error) => {
        console.error('Error fetching available slots:', error);
      });
  }, []);

  const onSubmit = (data) => {
    Axios.post(`${apidomain}/ParkingSpots`, data)
      .then((response) => {
        console.log(response);
        console.log('success', response.data.message);
        alert('Slot booked successfully. We will reach out to you.');
        navigate('/Home');
        
        // Remove the booked slot from availableSlots
        setParkingSpots(prevSlots => prevSlots.filter(slot => slot.SpotNumber !== data.Floor));
      })
      .catch((error) => {
        console.error('Error booking slot:', error);
      });
  };

  // Generate floor options from availableSlots
  const floorOptions = parkingSpots.map((spot) => (
    <option key={spot.SpotID} value={spot.SpotNumber}>
      {spot.SpotNumber} - Floor {spot.Floor}
    </option>
  ));

  return (
    <div className='booking'>
      <fieldset>
      <form className='bookingform' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Plate No:</label>
        <input type="text" {...register("SpotNumber")} placeholder='Registration Number' />
        <p>{errors.SpotNumber?.message}</p>
        <label htmlFor="">Type:</label>
        <input type="text" {...register("SpotType")} placeholder='What is to be parked?' />
        <p>{errors.SpotType?.message}</p>
        <label htmlFor="">Slot number:</label>
        <select {...register("Floor")} defaultValue="">
          <option value="" disabled>Select Floor</option>
          {floorOptions}
        </select>
        <p>{errors.Floor?.message}</p>
        <button type='submit'>Book your slot</button> 
      </form>
      </fieldset>
    </div>
  );
}

export default LoanApplication;
