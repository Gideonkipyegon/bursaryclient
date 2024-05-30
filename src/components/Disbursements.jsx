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
      setDisbursements(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="disbursements-wrapper">
      {disbursements.map((disbursement) => (
        <div className="card" key={disbursement.id}>
          <p>Amount to pay: ${disbursement.amount}</p>
          <p>Disbursement Date: {disbursement.disbursementDate}</p>
        </div>
      ))}
    </div>
  );
}

export default Disbursements;
