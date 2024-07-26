import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap'
import img1 from './Images/logo.png';

function LandingpageHeader() {
  return (
    <div>
         <Row style={{backgroundColor:'white', height:'60px',color:'#870A30',border:'2px solid #870A30 '}}>
       
       <Col sm={3}>
        <Row>
        <Col sm={4}>
 <img src={img1} alt='' height={100} width={100} style={{marginTop:'-20px'}} />
</Col>
<Col sm={4}>
<h6 style={{marginTop:'20px'}}>About us</h6>
</Col>
<Col sm={4}>
<h6 style={{marginTop:'20px'}}>Contact us</h6>
</Col> 
        </Row>
       </Col>
       <Col sm={4}>

       </Col>
       <Col sm={5}>
       <Row>
        <Col sm={3}>
         <h6 style={{marginTop:'20px',marginLeft:'70px'}}>Register</h6>
        </Col>
        <Col sm={3}>
        <h6 style={{marginTop:'20px',marginLeft:'90px'}}>Patient</h6>
        </Col>
        <Col sm={2}>
        <h6 style={{marginTop:'20px',marginLeft:'100px'}}>Login</h6>
        </Col>
           
       </Row>
       </Col>
        </Row> 
    </div>
  )
}

export default LandingpageHeader