import React from 'react'
import { Col, Row } from 'react-bootstrap';
import img1 from './Images/bg.jpg';
import img2 from './Images/doctor1.jpg';
import img3 from './Images/doctor2.jpg';
import img4 from './Images/doctor3.jpg';
import img5 from './Images/doctor4.jpg';
import img6 from './Images/doctor5.jpg';
import img7 from './Images/doctor6.jpg';
import { Button } from 'react-bootstrap';

function Landingpage() {
  return (
    <div>
           <Row >
        <Col sm={6} >
        <img src={img1} height={300} width={1000} style={{position:'relative'}}/>
        <h2 style={{position:'absolute',top:'200px', left:'150px',color:'#870A30'}}>Now take appointements by sitting</h2>
      </Col>
        <Col sm={6}>
        <img src={img1} height={300} width={1000} style={{position:'relative'}}/>
        <h2 style={{position:'absolute',top:'200px',left:'665px',color:'#870A30'}}>at home save your time</h2>
        </Col>
      
        </Row>
        <Row style={{marginTop:'40px',color:'#870A30'}}>
          <Col sm={2}>
          <div style={{height:'300px',width:'185px',border:'2px solid #870A30',marginLeft:'10px',borderRadius:'20px'}}>
         <img src={img2} alt='' height={150} width={150} style={{marginLeft:'15px',marginTop:'10px',borderRadius:'20px'}}/>
          <h6 style={{marginTop:'5px',marginLeft:'25px'}}><b>DR.Supraja</b></h6>
          <p style={{marginLeft:'15px'}}><b>Specalist</b>:Dermatalist</p>
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Experenice</b>:3years</p> 
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Age</b>:30</p>
         
          </div>
          </Col>
          <Col sm={2}>
          <div style={{height:'300px',width:'185px',border:'2px solid #870A30',marginLeft:'5px',borderRadius:'20px'}}>
          <img src={img3} alt='' height={150} width={150} style={{marginLeft:'15px',marginTop:'10px',borderRadius:'20px'}}/>
          <h6 style={{marginTop:'5px',marginLeft:'25px'}}><b>DR.Ashok</b></h6>
          <p style={{marginLeft:'15px'}}><b>Specalist</b>:ENT</p>
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Experenice</b>:20years</p> 
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Age</b>:50</p>
          </div>
          </Col>
          <Col sm={2}>
          <div style={{height:'300px',width:'185px',border:'2px solid #870A30',marginLeft:'-3px',borderRadius:'20px'}}>
          <img src={img4} alt='' height={150} width={150} style={{marginLeft:'15px',marginTop:'10px',borderRadius:'20px'}}/>
          <h6 style={{marginTop:'5px',marginLeft:'25px'}}><b>DR.Lekshmi</b></h6>
          <p style={{marginLeft:'10px'}}><b>Specalist</b>:Gynaecologist</p>
          <p style={{marginTop:'-15px',marginLeft:'10px'}}><b>Experenice</b>:15years</p> 
          <p style={{marginTop:'-15px',marginLeft:'10px'}}><b>Age</b>:45</p>
          </div>
          </Col>
          <Col sm={2}>
          <div style={{height:'300px',width:'185px',border:'2px solid #870A30',marginLeft:'-8px',borderRadius:'20px'}}>
          <img src={img5} alt='' height={150} width={150} style={{marginLeft:'15px',marginTop:'10px',borderRadius:'20px'}}/>
          <h6 style={{marginTop:'5px',marginLeft:'25px'}}><b>DR.Ajith</b></h6>
          <p style={{marginLeft:'15px'}}><b>Specalist</b>:Orthopedist</p>
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Experenice</b>:2.5years</p> 
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Age</b>:29</p>
          </div>
          </Col>
          <Col sm={2}>
          <div style={{height:'300px',width:'185px',border:'2px solid #870A30',marginLeft:'-12px',borderRadius:'20px'}}>
          <img src={img6} alt='' height={150} width={150} style={{marginLeft:'15px',marginTop:'10px',borderRadius:'20px'}}/>
          <h6 style={{marginTop:'5px',marginLeft:'25px'}}><b>DR.Rekhaa</b></h6>
          <p style={{marginLeft:'15px'}}><b>Specalist</b>:Dentist</p>
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Experenice</b>:3years</p> 
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Age</b>:30</p>
          </div>
          </Col>
          <Col sm={2}>
          <div style={{height:'300px',width:'185px',border:'2px solid #870A30',marginLeft:'-15px',borderRadius:'20px'}}>
          <img src={img7} alt='' height={150} width={150} style={{marginLeft:'15px',marginTop:'10px',borderRadius:'20px'}}/>
          <h6 style={{marginTop:'5px',marginLeft:'25px'}}><b>DR.Prakash</b></h6>
          <p style={{marginLeft:'15px'}}><b>Specalist</b>:Neurologist</p>
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Experenice</b>:35years</p> 
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Age</b>:55</p>
          </div>
          </Col>
        </Row>
       
<hr />
         <h2>Instant video consulations with specialists</h2>
        <Row style={{marginTop:'40px',color:'#870A30'}}>
          <Col sm={2}>
          <div style={{height:'340px',width:'185px',border:'2px solid #870A30',marginLeft:'10px',borderRadius:'20px'}}>
         <img src={img2} alt='' height={150} width={150} style={{marginLeft:'15px',marginTop:'10px',borderRadius:'20px'}}/>
          <h6 style={{marginTop:'5px',marginLeft:'25px'}}><b>DR.Supraja</b></h6>
          <p style={{marginLeft:'15px'}}><b>Specalist</b>:Dermatalist</p>
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Experenice</b>:3years</p> 
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Age</b>:30</p>
         <center><Button style={{backgroundColor:'skyblue',marginTop:'-10px',width:'100px',border:'none',color:'black'}}>video</Button></center> 
         <p style={{marginTop:'0px',marginLeft:'15px',color:'green'}}>Avaliable in 2min</p>
          </div>
          </Col>
          <Col sm={2}>
          <div style={{height:'340px',width:'185px',border:'2px solid #870A30',marginLeft:'5px',borderRadius:'20px'}}>
          <img src={img3} alt='' height={150} width={150} style={{marginLeft:'15px',marginTop:'10px',borderRadius:'20px'}}/>
          <h6 style={{marginTop:'5px',marginLeft:'25px'}}><b>DR.Ashok</b></h6>
          <p style={{marginLeft:'15px'}}><b>Specalist</b>:ENT</p>
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Experenice</b>:20years</p> 
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Age</b>:50</p>
          <center><Button style={{backgroundColor:'skyblue',marginTop:'-10px',width:'100px',border:'none',color:'black'}}>video</Button></center> 
          <p style={{marginTop:'0px',marginLeft:'15px',color:'green'}}>Avaliable in 3min</p>
          </div>
          </Col>
          <Col sm={2}>
          <div style={{height:'340px',width:'185px',border:'2px solid #870A30',marginLeft:'-3px',borderRadius:'20px'}}>
          <img src={img4} alt='' height={150} width={150} style={{marginLeft:'15px',marginTop:'10px',borderRadius:'20px'}}/>
          <h6 style={{marginTop:'5px',marginLeft:'25px'}}><b>DR.Lekshmi</b></h6>
          <p style={{marginLeft:'10px'}}><b>Specalist</b>:Gynaecologist</p>
          <p style={{marginTop:'-15px',marginLeft:'10px'}}><b>Experenice</b>:15years</p> 
          <p style={{marginTop:'-15px',marginLeft:'10px'}}><b>Age</b>:45</p>
          <center><Button style={{backgroundColor:'skyblue',marginTop:'-10px',width:'100px',border:'none',color:'black'}}>video</Button></center> 
          <p style={{marginTop:'0px',marginLeft:'15px',color:'green'}}>Avaliable in 2min</p>
          </div>
          </Col>
          <Col sm={2}>
          <div style={{height:'340px',width:'185px',border:'2px solid #870A30',marginLeft:'-8px',borderRadius:'20px'}}>
          <img src={img5} alt='' height={150} width={150} style={{marginLeft:'15px',marginTop:'10px',borderRadius:'20px'}}/>
          <h6 style={{marginTop:'5px',marginLeft:'25px'}}><b>DR.Ajith</b></h6>
          <p style={{marginLeft:'15px'}}><b>Specalist</b>:Orthopedist</p>
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Experenice</b>:2.5years</p> 
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Age</b>:29</p>
          <center><Button style={{backgroundColor:'skyblue',marginTop:'-10px',width:'100px',border:'none',color:'black'}}>video</Button></center> 
          <p style={{marginTop:'0px',marginLeft:'15px',color:'green'}}>Avaliable in 1min</p>
          </div>
          </Col>
          <Col sm={2}>
          <div style={{height:'340px',width:'185px',border:'2px solid #870A30',marginLeft:'-12px',borderRadius:'20px'}}>
          <img src={img6} alt='' height={150} width={150} style={{marginLeft:'15px',marginTop:'10px',borderRadius:'20px'}}/>
          <h6 style={{marginTop:'5px',marginLeft:'25px'}}><b>DR.Rekhaa</b></h6>
          <p style={{marginLeft:'15px'}}><b>Specalist</b>:Dentist</p>
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Experenice</b>:3years</p> 
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Age</b>:30</p>
          <center><Button style={{backgroundColor:'skyblue',marginTop:'-10px',width:'100px',border:'none',color:'black'}}>video</Button></center> 
          <p style={{marginTop:'0px',marginLeft:'15px',color:'green'}}>Avaliable in 4min</p>
          </div>
          </Col>
          <Col sm={2}>
          <div style={{height:'340px',width:'185px',border:'2px solid #870A30',marginLeft:'-15px',borderRadius:'20px'}}>
          <img src={img7} alt='' height={150} width={150} style={{marginLeft:'15px',marginTop:'10px',borderRadius:'20px'}}/>
          <h6 style={{marginTop:'5px',marginLeft:'25px'}}><b>DR.Prakash</b></h6>
          <p style={{marginLeft:'15px'}}><b>Specalist</b>:Neurologist</p>
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Experenice</b>:35years</p> 
          <p style={{marginTop:'-15px',marginLeft:'15px'}}><b>Age</b>:55</p>
          <center><Button style={{backgroundColor:'skyblue',marginTop:'-10px',width:'100px',border:'none',color:'black'}}>video</Button></center> 
          <p style={{marginTop:'0px',marginLeft:'15px',color:'green'}}>Avaliable in 5min</p>
          </div>
          </Col>
        </Row>
        <Row style={{backgroundColor:'#870A30',height:'100px',marginTop:'20px'}}>
        <center><h1 style={{marginTop:'10px',color:'white'}}>Health care Management</h1></center>
        <center><i><p style={{color:'white'}}>Like Education , Healthcare also needs to be given Importance</p></i></center>
        </Row>
    </div>
  )
}

export default Landingpage