import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { getEmployee } from '../Service/allApis';

import BASE_URL from '../Service/baseUrl';


function View() {

    const[emp,setEmp]=useState({})

  const {id}=useParams()
  
console.log(id);
 
  const getEmp = async()=>{

const result=await getEmployee(id)

if(result.status>=200 && result.status<300){
    setEmp(result.data)
    console.log(result);
}
console.log(result);
  }
  useEffect(()=>{
    getEmp()
  },[])

  console.log(emp);



  return (
    <div>

<Container className='w-75 mt-5 p-3 '>
             <div className='mb-3 pb-3 '>
                <Row responsive className='mb-3 pb-3'>
                    <div className='flex-container'>
                        <div className='m-3'>
                            
                            <img className='viewPageImage'
                             src={`${BASE_URL}/uploads/${emp.profile}`} alt="" />
                        </div>
                        <div className='m-4'>
                            <ListGroup className='text-center' as="ul">
                                <ListGroup.Item className=' border border-white' as="li">
                                    <h1><b></b></h1>
                                </ListGroup.Item>
                                <ListGroup.Item className='border border-info' as="li">
                                    <h5>FullName: {emp.fname+" "+emp.lname} <i></i></h5>
                                </ListGroup.Item>
                                <ListGroup.Item className='mt-4 border border-info' as="li">
                                    <h5>Email: {emp.email} <i></i> </h5>
                                </ListGroup.Item>
                                <ListGroup.Item className='mt-4 border border-info' as="li">
                                    <h5>Mobile: {emp.mobile} <i> </i></h5>
                                </ListGroup.Item>
                                <ListGroup.Item className='mt-4 border border-info' as="li">
                                    <h5>Gender: {emp.gender} <i></i></h5>
                                </ListGroup.Item>
                                <ListGroup.Item className='mt-4 border border-info' as="li">
                                    <h5>Status: {emp.status} <i></i></h5>
                                </ListGroup.Item>
                                <ListGroup.Item className='mt-4 border border-info' as="li">
                                    <h5>Location: {emp.location} <i></i></h5>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
                </Row>
            </div>
        </Container>

    </div>
  )
}

export default View