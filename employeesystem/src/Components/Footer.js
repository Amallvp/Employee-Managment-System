import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className='bg' >
            <>
            <Row className='w-100' >
                  <div className='flex-container'>
                    <div className='mt-2 p-4  box1'> <img src="https://i.postimg.cc/cHyVWn8V/employee.webp" 
                    width={60} height={50} className='p-1 ms-2' alt="" />
                    <b className='text-white'>Employee portal</b>
                    <p className='ms-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus impedit cumque nisi tempore necessitatibus, 
                      exercitationem aliquam voluptatum illum magnam quas soluta nulla magni asperiores reiciendis laudantium ea, nesciunt nostrum.</p>
                      </div>
                    
                    <div className='box2'>
                    <h5 className='text-white mt-3 p-2 ms-5'>Contact Us</h5>
                    <input type="text" className='form-control w-75 ms-5' placeholder='Enter Email'/>
                    <Button className='btn btn-secondary w-25 mt-3 ms-5'>Send</Button>
                    </div>
  
                    <div className='ms-5 box3'>
                    <h5 className='text-white mt-3 p-2'>Connect With Us</h5>
                    <div className='d-flext'>
                     <Link to='https://in.linkedin.com/'> <i class="fa-brands fa-linkedin ms-2 text-white fa-3x" ></i></Link>
                      <Link to='https://github.com/'><i class="fa-brands fa-square-github ms-2 text-white fa-3x"></i></Link>
                     <Link to='https://twitter.com/?lang=en'> <i class="fa-brands fa-square-twitter ms-2 text-white fa-3x"></i></Link>
  
                      </div>
                      <div>
                      <h6 className='text-white'><i class="fa-solid fa-envelope ms-2 mt-2 text-white fa-1x"></i>  employeeportal@gmail.com</h6>
                      </div>
                    
                    </div>
                  </div>
            </Row>
            </>
        </div>
    )
}

export default Footer