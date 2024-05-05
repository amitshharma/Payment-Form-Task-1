import React, { useState } from 'react';
import './formstyle.css';


const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    cardNumber: '',
    cvv: '',
    bankName: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setSubmittedData(formData);
  };

  return (
    <div className="PaymentForm">
      {!submitted ? (
        <div>
          <h2>Payment Form</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
            <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="Card Number" />
            <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="CVV" />
            <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} placeholder="Bank Name" />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Submitted User Details:</h2>
          {submittedData && Object.entries(submittedData).map(([key, value]) => (
            <p key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentForm;

