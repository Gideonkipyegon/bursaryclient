import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apidomain } from '../utils/domains.js';
import './disbursements.css';

function Disbursements() {
  const [disbursements, setDisbursements] = useState([]);

  useEffect(() => {
    getDisbursements();
  }, []);

  const getDisbursements = async () => {
    try {
      const res = await axios.get(`${apidomain}/disbursements`);
      console.log('API Response:', res.data); // Log the API response
      setDisbursements(res.data);
    } catch (error) {
      console.error('Error fetching disbursements:', error);
    }
  };

  return (
    <div className="disbursements-wrapper">
      {disbursements.length > 0 ? (
        disbursements.map((disbursement) => (
          <div className="card" key={disbursement.id}>
            <p>Amount to pay: ${disbursement.amount}</p>
            <p>Disbursement Date: {disbursement.disbursementDate}</p>
          </div>
        ))
      ) : (
        <p>No disbursements available.</p>
      )}
    </div>
  );
}

export default Disbursements;
