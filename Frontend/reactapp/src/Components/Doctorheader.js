import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap'
import img1 from './Images/logo.png';
import { Link } from 'react-router-dom';
function Doctorheader() {
  return (
    <div>
         <Row style={{backgroundColor:'white', height:'60px',color:'#870A30',border:'2px solid #870A30 '}}>
       
       <Col sm={3}>
        <Row>
        <Col sm={4}>
<Link to='/'> <img src={img1} alt='' height={100} width={100} style={{marginTop:'-20px'}} /></Link>
</Col>
<Col sm={4}>
<h6 style={{marginTop:'20px'}}> <Link to='about' style={{textDecoration:'none',color:'#870A30'}}> About us </Link></h6>
</Col>
<Col sm={4}>
<h6 style={{marginTop:'20px'}}>Contact us</h6>
</Col> 
        </Row>
       </Col>
       <Col sm={3}>

       </Col>
       <Col sm={6}>
       <Row>
    
        <Col sm={7}>
        <Link to='patient' style={{textDecoration:'none',color:'#870A30'}}> <h6 style={{marginTop:'20px',marginLeft:'190px'}}>  View My Appointements </h6></Link>
        </Col>
        <Col sm={2}>
      <Link to='logout' style={{textDecoration:'none' , color:'#870A30'}} ><h6 style={{marginTop:'20px',marginLeft:'80px'}}>Logout</h6></Link> 
        </Col>
        
       </Row>
       </Col>
        </Row> 
       
    </div>
  )
}

export default Doctorheader