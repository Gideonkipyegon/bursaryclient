import React, { useState } from 'react';

const PaymentForm = () => {
  const [duration, setDuration] = useState('hourly');
  const [amount, setAmount] = useState(0);

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
    // Calculate amount based on selected duration
    calculateAmount(e.target.value);
  };

  const calculateAmount = (selectedDuration) => {
    let calculatedAmount = 0;
    switch (selectedDuration) {
      case 'hourly':
        calculatedAmount = 5; // Your hourly rate
        break;
      case 'weekly':
        calculatedAmount = 50; // Your weekly rate
        break;
      case 'monthly':
        calculatedAmount = 150; // Your monthly rate
        break;
      default:
        calculatedAmount = 0;
    }
    setAmount(calculatedAmount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate payment processing logic
    console.log(`Payment processed for ${duration} duration with amount $${amount}`);
    // You can also redirect or perform other actions after successful payment
  };

  return (
    <div>
      <h2>Select Payment Duration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Hourly
          <input
            type="radio"
            value="hourly"
            checked={duration === 'hourly'}
            onChange={handleDurationChange}
          />
        </label>
        <label>
          Weekly
          <input
            type="radio"
            value="weekly"
            checked={duration === 'weekly'}
            onChange={handleDurationChange}
          />
        </label>
        <label>
          Monthly
          <input
            type="radio"
            value="monthly"
            checked={duration === 'monthly'}
            onChange={handleDurationChange}
          />
        </label>
        <div>
          Amount to pay: ${amount}
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
