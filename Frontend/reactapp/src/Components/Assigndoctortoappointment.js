import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function Assigndoctortoappointment() {
  return (
    <div>
    <Row style={{backgroundColor:'#870A30'}}>
  <center><h1 style={{color:'white'}}>Assign Doctor to Appointment</h1></center>
</Row>
   <Row style={{marginTop:'30px'}}>
   <Col sm={6}>
   <h5 style={{marginLeft:'400px'}}>Patient Name</h5>
   <input type='text' style={{width:'450px',marginLeft:'400px'}}></input>
   </Col>
</Row>

<Row style={{marginTop:'30px'}}>
   <Col sm={6}>
   <h5 style={{marginLeft:'400px'}}>Problem Description</h5>
   <textarea type='text' style={{width:'450px',marginLeft:'400px'}}></textarea>
   </Col>
</Row>
<Row style={{marginTop:'30px'}}>
   <Col sm={6}>
   <h5 style={{marginLeft:'400px'}}>Appointment Date</h5>
   <input type='date' style={{width:'450px',marginLeft:'400px'}}></input>
   </Col>
</Row>
<Row style={{marginTop:'30px'}}>
   <Col sm={6}>
   <h5 style={{marginLeft:'400px'}}>Doctor</h5>
   <select style={{ width: '450px', marginLeft: '400px' , height:'35px'}}>
   <option> select Doctor</option>
            <option value="General Physician">General Physician</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Gynaecologist">Gynaecologist</option>
            <option value="ENT Specialist">ENT Specialist</option>
            <option value="Orthopedist">Orthopedist</option>
     </select>
   </Col>
   </Row>
<center><Button style={{backgroundColor:'#870A30',marginTop:'30px',width:'200px',border:'none'}}>Assign Doctor</Button></center>
</div>
  )
}

export default Assigndoctortoappointment