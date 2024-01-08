// DebitCardForm.js

import React, { useState } from 'react';
import '../styles/payment.css';
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CommonSection from "../components/UI/common-section/CommonSection";

const Payment = () => {
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCVV] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here for handling the form submission
    console.log('Form submitted:', { cardHolder, expiryDate, cardNumber, cvv });
  };

  return (
    <Helmet title="Payment">
      <CommonSection title="Payment" />
      <section>
      <Container>
        <h4  className="title">Payment Details</h4>
      <div className="card-background"></div>
    <div className="debit-card-form">
      <form onSubmit={handleSubmit}>
        <label className='name'>
          Card Holder
          <input
            type="text"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            required
          />
        </label>
        <label className='date'>
          Expiry Date
          <input
            type="text"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </label>
        <label className='number'>
          Card Number
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </label>
        <label className='code'>
          CVV
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            required
          />
        </label>
        <button type="submit">
            <Link to ="/Msg">Pay</Link>
            </button>
      </form>
    </div>
    </Container>
    </section>
    </Helmet>
  );
};

export default Payment;
