import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Registerdoctor() {
  return (
    <div><Row style={{backgroundColor:'#870A30'}}>
    <center><h1 style={{color:'white'}}>Register Doctor</h1></center>
 </Row>
 <Row style={{marginTop:'30px'}}>
     <Col sm={6}>
     <h5 style={{marginLeft:'100px'}}>First name</h5>
     <input type='text' style={{width:'450px',marginLeft:'100px'}}></input>
     </Col>
     <Col sm={6}>
     <h5 style={{marginLeft:'20px'}}>Last name</h5>
     <input type='text' style={{width:'450px',marginLeft:'20px'}}></input>
     </Col> 
 </Row>
 <Row style={{marginTop:'30px'}}>
     <Col sm={6}>
     <h5 style={{marginLeft:'100px'}}>Email ID</h5>
     <input type='text' style={{width:'450px',marginLeft:'100px'}}></input>
     </Col>
     <Col sm={6}>
     <h5 style={{marginLeft:'20px'}}>Password</h5>
     <input type='text' style={{width:'450px',marginLeft:'20px'}}></input>
     </Col> 
 </Row>
 <Row style={{marginTop:'30px'}}>
     <Col sm={6}>
     <h5 style={{marginLeft:'100px'}}>Gender</h5>
     <select style={{ width: '450px', marginLeft: '100px' , height:'35px'}}>
            <option> select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
    
     </Col>
     <Col sm={6}>
     <h5 style={{marginLeft:'20px'}}>Specialist</h5>
     <select style={{ width: '450px', marginLeft: '20px' , height:'35px'}}>
            <option> select Specialist</option>
            <option value="General Physician">General Physician</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Gynaecologist">Gynaecologist</option>
            <option value="ENT Specialist">ENT Specialist</option>
            <option value="Orthopedist">Orthopedist</option>
          </select>
     
     </Col> 
 </Row>
 <Row style={{marginTop:'30px'}}>
     <Col sm={6}>
     <h5 style={{marginLeft:'100px'}}>Contact no</h5>
     <input type='text' style={{width:'450px',marginLeft:'100px'}}></input>
     </Col>
     <Col sm={6}>
     <h5 style={{marginLeft:'20px'}}>Age</h5>
     <input type='text' style={{width:'450px',marginLeft:'20px'}}></input>
     </Col> 
 </Row>
 <Row style={{marginTop:'30px'}}>
     <Col sm={6}>
     <h5 style={{marginLeft:'100px'}}>Address</h5>
    <textarea style={{width:'450px',marginLeft:'100px'}}></textarea>
     </Col>
     <Col sm={6}>
     <h5 style={{marginLeft:'20px'}}>Pincode</h5>
     <input type='text' style={{width:'450px',marginLeft:'20px'}}></input>
     </Col> 
 </Row>
 <Row style={{ marginTop: '30px' }}>
        <Col sm={6}>
          <h5 style={{ marginLeft: '100px' }}>Upload Doctor Image</h5>
          <input type='file' style={{ width: '450px', marginLeft: '100px', border: '1px solid #ced4da', borderRadius: '4px' }}></input>
        </Col>
      </Row>
 <center><Button style={{backgroundColor:'#870A30',marginTop:'30px',width:'200px',border:'none'}}>Register Doctor</Button></center>
 </div>
  )
}

export default Registerdoctor