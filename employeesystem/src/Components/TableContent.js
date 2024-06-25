import React from 'react'
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import BASE_URL from '../Service/baseUrl';
import { Link } from 'react-router-dom';


function TableContent({ empArray, deleteEmp }) {


    return (
        <div>

            {
                empArray.length > 0 ?

                    <div>
                        <div>

                            <h3 className=' text-center mt-5'>List Of Employees</h3>
                        </div>
                        <div>

                            <Table responsive='lg' className='container w-75 mt-3 mb-5'

                                striped bordered hover variant='primary'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Full Name</th>
                                        <th>Mobile</th>
                                        <th>Status</th>
                                        <th>Profile</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        empArray.map((i, index) =>

                                            <tr>
                                                <td>{++index}</td>
                                                <td>{i.fname + " " + i.lname}</td>
                                                <td>{i.mobile}</td>
                                                <td>
                                                    <div>
                                                        <Button id='b11' variant={i.status === "Active" ? "success" : "dark"} className='text-center rounded w-100 mt-3'>{i.status}</Button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class='text-center'>

                                                        <img className='rounded-circle border-secondary' src={`${BASE_URL}/uploads/${i.profile}`} width={70} height={70} alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="success " id="dropdown-basic" className='w-100 mt-3'>
                                                                <i class="fa-solid fa-rectangle-list"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className='bg-secomdary'>
                                                                <Link to={`/employee-view/${i._id}`} style={{ textDecoration: 'none' }} >
                                                                    <Dropdown.Item href="ac1"><i class="fa-solid fa-users-viewfinder me-3"></i> View</Dropdown.Item>
                                                                </Link>

                                                               <Link to={`/employee-edit/${i._id}`} style={{ textDecoration: 'none' }} >
                                                                <Dropdown.Item href="ac2"><i class="fa-solid fa-user-pen me-3"></i> Edit</Dropdown.Item>
                                                                </Link>

                                                            <Dropdown.Item onClick={() => deleteEmp(i._id)} href=""><i class="fa-solid fa-user-slash me-3"></i> Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>

                                                    
                                                </div>
                                            </td>
                                            </tr>


                                )
                                    }


                            </tbody>
                        </Table>

                    </div>
                    </div>
                    : <h1 className='text-center p-5'>
        No Employees Added !
    </h1>
}


        </div >
    )
}

export default TableContent