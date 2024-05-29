import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../context/parkingContext/Context.jsx';
import { apidomain } from '../utils/domains.js';
import './LoanApplicationlist.css';

function LoanApplicationlist() {
  const [parkingSpots, setParkingSpots] = useState([]);
  const [newSpotData, setNewSpotData] = useState({
    SpotNumber: '',
    SpotType: '',
    Availability: '',
    Floor: '',
  });
  const { user } = useContext(Context);

  useEffect(() => {
    getParkingSpots();
  }, []);

  const getParkingSpots = async () => {
    try {
      const res = await axios.get(`${apidomain}/Applications`);
      setParkingSpots(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateSpot = async () => {
    try {
      const res = await axios.post(`${apidomain}/Applications`, newSpotData);
      setApplications([...Applications, res.data]);
      setNewSpotData({
        SpotNumber: '',
        SpotType: '',
        Availability: '',
        Floor: '',
      });
      alert('Spot added successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteSpot = async (spotId) => {
    try {
      await axios.delete(`${apidomain}/ParkingSpots/${spotId}`);
      setParkingSpots(parkingSpots.filter(spot => spot.SpotID !== spotId));
      alert('Spot deleted successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSpotData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="parking_spots_wrapper">
      <div className="create_spot_form">
        <input
          type="text"
          name="SpotNumber"
          value={newSpotData.SpotNumber}
          onChange={handleChange}
          placeholder="Spot Number"
        />
        <input
          type="text"
          name="SpotType"
          value={newSpotData.SpotType}
          onChange={handleChange}
          placeholder="Spot Type"
        />
        <input
          type="text"
          name="Availability"
          value={newSpotData.Availability}
          onChange={handleChange}
          placeholder="Availability"
        />
        <input
          type="text"
          name="Floor"
          value={newSpotData.Floor}
          onChange={handleChange}
          placeholder="Floor"
        />
        <button onClick={handleCreateSpot}>Add Spot</button>
      </div>
      {parkingSpots.map((spot) => (
        <div className="card" key={spot.SpotID}>
          <p>Spot ID: {spot.SpotID}</p>
          <p>Spot Number: {spot.SpotNumber}</p>
          <p>Spot Type: {spot.SpotType}</p>
          <p>Availability: {spot.Availability}</p>
          <p>Floor: {spot.Floor}</p>
          <button onClick={() => handleDeleteSpot(spot.SpotID)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default LoanApplicationlist;
