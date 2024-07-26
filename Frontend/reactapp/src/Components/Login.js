import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');

  const handleLogin = () => {
    // Perform your login logic here and set the appropriate alert
    setShowAlert(true);
    setAlertMessage('Login successful!'); // You can customize this message based on your login logic
    setAlertVariant('success'); // Change the variant based on success or failure
  };

  return (
    <div>
      <Row style={{ backgroundColor: '#870A30' }}>
        <center><h1 style={{ color: 'white' }}>LOGIN</h1></center>
      </Row>
      <Row style={{ marginTop: '30px' }}>
        <Col sm={6}>
          <h5 style={{ marginLeft: '550px' }}>User Role</h5>
          <select style={{ width: '450px', marginLeft: '550px', height: '35px' }}>
            <option> select role</option>
            <option value="Admin">Admin</option>
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
          </select>
        </Col>
      </Row>
      <Row style={{ marginTop: '30px' }}>
        <Col sm={6}>
          <h5 style={{ marginLeft: '550px' }}>Email ID</h5>
          <input type='text' style={{ width: '450px', marginLeft: '550px' }}></input>
        </Col>
      </Row>
      <Row style={{ marginTop: '30px' }}>
        <Col sm={6}>
          <h5 style={{ marginLeft: '550px' }}>Password</h5>
          <input type='password' style={{ width: '450px', marginLeft: '550px' }}></input>
        </Col>
      </Row>
      <center>
      <Button
          style={{ backgroundColor: '#870A30', marginTop: '30px', width: '200px', border: 'none' }}
          onClick={handleLogin}
        >
  
        </Button> 
      </center>
      <Row style={{ marginTop: '30px' }}>
        <Col sm={6} style={{ marginLeft: '550px' }}>
          {showAlert && (
            <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
              {alertMessage}
            </Alert>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Login;
