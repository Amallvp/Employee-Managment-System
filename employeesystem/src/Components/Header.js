import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {

  


  return (
    <div className='w-100'>


    <div className='w-100'>
        <Navbar expand="lg" className="bg w-100" >
          
            <Navbar.Brand href="#" >
  
            <Link to='/home' style={{ textDecoration: 'none' }}  ><h3><b className='p'><img src="https://i.postimg.cc/cHyVWn8V/employee.webp" 
            width={60} height={50} className='p-1 ms-5' alt="" /> Employee portal</b></h3></Link>
            </Navbar.Brand>
        
        </Navbar>
     
    </div>


      
              
    



    </div>
  )
}

export default Header