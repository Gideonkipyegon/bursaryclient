import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './disbursements.css';
import { apidomain } from '../utils/domains.js';

function Disbursements() {
  const [disbursements, setDisbursements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apidomain}/disbursements`);
        console.log('API Response:', response.data); // Log the response object
        setDisbursements(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching disbursements:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading disbursements...</p>;
  }

  if (error || !disbursements) {
    return <p>Error fetching disbursements. Please try again later.</p>;
  }

  return (
    <div className="disbursements-wrapper">
      {disbursements.length > 0 ? (
        disbursements.map((disbursement) => (
          <div className="card" key={disbursement.id}>
            <p>Disbursement Amount: ${disbursement.Amount}</p> {/* Update property name */}
            <p>Disbursement Date: {disbursement.DisbursementDate}</p>
          </div>
        ))
      ) : (
        <p>No disbursements available.</p>
      )}
    </div>
  );
}

export default Disbursements;
