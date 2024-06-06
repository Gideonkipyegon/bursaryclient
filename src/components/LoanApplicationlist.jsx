import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../context/parkingContext/Context.jsx';
import { apidomain } from '../utils/domains.js';
import './LoanApplicationlist.css';

function LoanApplicationList() {
  const [bursaries, setBursaries] = useState([]);
  const [newBursaryData, setNewBursaryData] = useState({
    BursaryID: '',
    Name: '',
    Description: '',
    EligibilityCriteria: '',
    Amount: '',
    Deadline: '',
  });
  const { user } = useContext(Context);

  useEffect(() => {
    getBursaries();
  }, []);

  const getBursaries = async () => {
    try {
      const res = await axios.get(`${apidomain}/Bursaries`);
      setBursaries(res.data);
    } catch (error) {
      console.error('Error fetching bursaries:', error);
    }
  };

  const handleCreateBursary = async () => {
    try {
      const res = await axios.post(`${apidomain}/Bursaries`, newBursaryData);
      setBursaries([...bursaries, res.data]);
      setNewBursaryData({
        BursaryID: '',
        Name: '',
        Description: '',
        EligibilityCriteria: '',
        Amount: '',
        Deadline: '',
      });
      alert('Bursary added successfully!');
    } catch (error) {
      console.error('Error adding bursary:', error);
    }
  };

  const handleDeleteBursary = async (BursaryID) => {
    try {
      const url = `${apidomain}/Bursaries/${BursaryID}`;
      console.log('Attempting to delete bursary with URL:', url);
      const res = await axios.delete(url);
      console.log('Delete response:', res);
      if (res.status === 200 || res.status === 204) {
        setBursaries(bursaries.filter(bursary => bursary.BursaryID !== BursaryID));
        alert('Bursary deleted successfully!');
      } else {
        console.error('Failed to delete bursary:', res);
        alert('Failed to delete bursary. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
        // Request was made but no response received
        console.error('Error request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
      alert('Error deleting bursary. Please check the console for more details.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBursaryData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="applications_wrapper">
      <div className="create_application_form">
        <input
          type="text"
          name="BursaryID"
          value={newBursaryData.BursaryID}
          onChange={handleChange}
          placeholder="Bursary ID"
        />
        <input
          type="text"
          name="Name"
          value={newBursaryData.Name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="Description"
          value={newBursaryData.Description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="text"
          name="EligibilityCriteria"
          value={newBursaryData.EligibilityCriteria}
          onChange={handleChange}
          placeholder="Eligibility Criteria"
        />
        <input
          type="text"
          name="Amount"
          value={newBursaryData.Amount}
          onChange={handleChange}
          placeholder="Amount"
        />
        <input
          type="text"
          name="Deadline"
          value={newBursaryData.Deadline}
          onChange={handleChange}
          placeholder="Deadline"
        />
        <button onClick={handleCreateBursary}>Add Bursary</button>
      </div>
      {bursaries.map((bursary) => (
        <div className="card" key={bursary.BursaryID}>
          <p>Bursary ID: {bursary.BursaryID}</p>
          <p>Name: {bursary.Name}</p>
          <p>Description: {bursary.Description}</p>
          <p>Eligibility Criteria: {bursary.EligibilityCriteria}</p>
          <p>Amount: {bursary.Amount}</p>
          <p>Deadline: {bursary.Deadline}</p>
          <button onClick={() => handleDeleteBursary(bursary.BursaryID)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default LoanApplicationList;
