import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../context/parkingContext/Context.jsx';
import { apidomain } from '../utils/domains.js';
import './LoanApplicationlist.css';

function LoanApplicationlist() {
  const [Bursaries, setBursaries] = useState([]);
  const [newBursariesData, setNewBursariesData] = useState({
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
      console.log(error);
    }
  };

  const handleCreateBursaries = async () => {
    try {
      const res = await axios.post(`${apidomain}/Applications`, newBursariesData);
      setBursaries([...Bursaries, res.data]);
      setNewBursariesData({
        BursaryID: '',
        Name: '',
        Description: '',
        EligibilityCriteria: '',
        Amount: '',
        Deadline: '',
      });
      alert('Application added successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteBursaries = async (BursaryID) => {
    try {
      await axios.delete(`${apidomain}/Bursary/${BursaryID}`);
      setBursaries(Bursaries.filter(Bursaries => Bursaries.BursaryID !== BursaryID));
      alert('Application deleted successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBursariesData(prevData => ({
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
          value={newBursariesData.BursaryID}
          onChange={handleChange}
          placeholder="Bursary ID"
        />
        <input
          type="text"
          name="Name"
          value={newBursariesData.Name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="Description"
          value={newBursariesData.Description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="text"
          name="EligibilityCriteria"
          value={newBursariesData.EligibilityCriteria}
          onChange={handleChange}
          placeholder="Eligibility Criteria"
        />
        <input
          type="text"
          name="Amount"
          value={newBursariesData.Amount}
          onChange={handleChange}
          placeholder="Amount"
        />
        <input
          type="text"
          name="Deadline"
          value={newBursariesData.Deadline}
          onChange={handleChange}
          placeholder="Deadline"
        />
        <button onClick={handleCreateBursaries}>Add Application</button>
      </div>
      {Bursaries.map((Bursaries) => (
        <div className="card" key={Bursaries.BursaryID}>
          <p>Bursary ID: {Bursaries.BursaryID}</p>
          <p>Name: {Bursaries.Name}</p>
          <p>Description: {Bursaries.Description}</p>
          <p>Eligibility Criteria: {Bursaries.EligibilityCriteria}</p>
          <p>Amount: {Bursaries.Amount}</p>
          <p>Deadline: {Bursaries.Deadline}</p>
          <button onClick={() => handleDeleteBursaries(Bursaries.BursaryID)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default LoanApplicationlist;
