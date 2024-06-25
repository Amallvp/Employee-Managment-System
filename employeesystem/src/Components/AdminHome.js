import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function AdminHome() {
  return (
    <div className='w-100'>
<div className='adminHomeRow' >
  <div className='adminHome'>
  <h1 className='adminHomeText'>Makes employee <br/>management easy</h1>
  <h7 className='adminhometext text-white'>Employee portals are valuable tools for organizations to enhance employee engagement,
   improve communication, and streamline administrative processes.</h7>
  
  </div>
  <div className='adminHomeImg'>
  <img className='img2' src="https://i.postimg.cc/dtW4YGFm/IT-Staffing-1.gif" width={500} height={450} alt="" />
  </div>
</div>



<Row className='m-5 ps-2'>

<div className='text-center mb-5 w-100'>
  <h4>
    Management & Employee Credentials 
  </h4>
</div>

  <Col lg={6} className='col d-flex justify-content-center'>
  
 <Link to={'/add-new'} style={{ textDecoration: 'none' }} >
    <Card id='card1' style={{ width: '20rem' , height:'23rem'}} >
        <Card.Img variant="top" src="https://i.postimg.cc/6pJdqZJv/06efd9fc18aade1ce5a7f80374b5ce61.gif" />
        <Card.Body>
          <Card.Title> Add Employee</Card.Title>
          <Card.Text className='text-dark'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus impedit cumque nisi tempore
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
 </Link>

  </Col>

  <Col lg={6} className='col d-flex justify-content-center' >
  
  <Link to={'/employee-mng'} style={{ textDecoration: 'none' }}>
  <Card id='card2' style={{ width: '20rem' , height:'23rem'}}> 
      <Card.Img variant="top" src="https://i.postimg.cc/QC7JYJZj/1683220071459.gif" />
      <Card.Body>
        <Card.Title>Manage Employees </Card.Title>
        <Card.Text className='text-dark'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus impedit cumque nisi tempore
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </Link>
  
  </Col>
</Row>

    </div>
  )
}

export default AdminHome