import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Takeappointment() {
  return (
    <div>
         <Row style={{backgroundColor:'#870A30'}}>
  <center><h1 style={{color:'white'}}>Take Appointment</h1></center>
</Row>
   <Row style={{marginTop:'30px'}}>
   <Col sm={6}>
   <h5 style={{marginLeft:'550px'}}>Patient Name</h5>
   <input type='text' style={{width:'450px',marginLeft:'550PX'}}></input>
   </Col>
</Row>

<Row style={{marginTop:'30px'}}>
   <Col sm={6}>
   <h5 style={{marginLeft:'550px'}}>Problem Description</h5>
   <textarea type='text' style={{width:'450px',marginLeft:'550px'}}></textarea>
   </Col>
</Row>
<Row style={{marginTop:'30px'}}>
   <Col sm={6}>
   <h5 style={{marginLeft:'550px'}}>Appointment Date</h5>
   <input type='date' style={{width:'450px',marginLeft:'550px'}}></input>
   </Col>
</Row>
<center><Button style={{backgroundColor:'#870A30',marginTop:'30px',width:'200px',border:'none'}}>Take Appointment</Button></center>
</div>
  )
}

export default Takeappointment