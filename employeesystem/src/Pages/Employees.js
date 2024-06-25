import React, { useContext, useEffect, useState } from 'react'
import TableContent from '../Components/TableContent'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { registerContext, updateContext } from '../Components/ContextShare';
import { Alert, Button } from 'react-bootstrap';
import { deleteEmployeeApi, filterStatus, getAllEmployees } from '../Service/allApis';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function Employees() {

    const{registerUpdate,setRegisterUpdate}=useContext(registerContext)
    const{updateStatus,setUpdateStatus}=useContext(updateContext)
    const[employeesData,setEmployeesData]=useState([])

    const[searchData,setSearchData]=useState("")
    console.log(searchData);

    const getEmployees=async()=>{
    const result= await getAllEmployees(searchData)
    setEmployeesData(result.data);

    }

    const filterEmployees=async (data)=>{
      const result=await filterStatus(data)
      setEmployeesData(result.data);
       }


    useEffect(()=>{
getEmployees()
    },[searchData])
    // console.log(employeesData);


        
const removeEmloyee=async(id)=>{

  const result=await deleteEmployeeApi(id)
  if(result.status>=200 && result.status<300){
   getEmployees()
  }
 }



  return (
    <div>

        {registerUpdate?
       ( <Alert className='mt-4 container w-50' variant={"success"} dismissible onClose={()=>setRegisterUpdate("")}>
            {registerUpdate} is added successfully
          </Alert>)
           :""
        }

{updateStatus?
       ( <Alert className='mt-4 container w-50' variant={"success"} dismissible onClose={()=>setUpdateStatus("")}>
            {updateStatus.fname+" "+updateStatus.lname} data is updated
          </Alert>)
           :""
        }
      <div className='flex-container'>
          <div id='w-25'>
          <FloatingLabel
          controlId="floatingInput"
          label="Search Employee" 
          className="mb-3 m-5 shadow box11"
          
        >
          <Form.Control onChange={(e)=>setSearchData(e.target.value)} type="text" placeholder="" />
        </FloatingLabel>
          </div>
  
          <div className='text-end me-5 box22 m-5'>

            <h6 className='me-5 mb-2'>Filter Employees</h6>
            <ButtonGroup aria-label="Basic example">
          <Button onClick={()=>filterEmployees('Active')} variant="success">Active</Button>
          <Button onClick={()=>filterEmployees('Inactive')} variant="dark">Inactive</Button>
          <Button onClick={getEmployees} variant="info">All</Button>
        </ButtonGroup>
          </div>
      </div>
<TableContent deleteEmp={removeEmloyee} empArray={employeesData}></TableContent>
    </div>
  )
}

export default Employees 