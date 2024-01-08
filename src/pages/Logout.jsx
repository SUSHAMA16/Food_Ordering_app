import React, { useState } from 'react';
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";


const Logout = () => {
  const [inputUsername, setInputUsername] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleLogout = () => {
    const storedUsername = localStorage.getItem('userName');

    if (inputUsername === storedUsername) {
      // Clear the username from localStorage
      localStorage.removeItem('userName');
      setConfirmation('Logout successful');
    } else {
      setConfirmation('Incorrect userName. Logout failed.');
    }
  };

  return (
    <Helmet title="Logout">
      <CommonSection title="Logout" />
      <section>
        <Container>
    <div>
      <h2>Logout Page</h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
      />
      <button onClick={handleLogout}>Logout</button>
      <p>{confirmation}</p>
    </div>
    <p>Home</p>
    </Container>
      </section>
    </Helmet>
  );
};

export default Logout;
