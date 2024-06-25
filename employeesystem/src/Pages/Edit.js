import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  editEmployee, getEmployee } from '../Service/allApis';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

import BASE_URL from '../Service/baseUrl';
import { updateContext } from '../Components/ContextShare';


function Edit() {

  //access context
  


// state for new employee valiadtion

const [fnameValid, setFnameValid] = useState(true)
const [lnameValid, setLnameValid] = useState(true)
const [emailValid, setEmailValid] = useState(true)
const [mobValid, setMobValid] = useState(true)
const [locationValid, setLocationValid] = useState(true)

const {setUpdateStatus}=useContext(updateContext)

// navigation to employee list

const navigate=useNavigate()


// state to hold error msg from bckend

const[errorMsg,setErrorMsg]=useState("")



const [addInputs, setaddInputs] = useState({

    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    status: "",
    location: ""
})


const {id}=useParams()

// function to get data of particular employee

const getEmployeeData=async()=>{
 const result=await getEmployee(id)
 setaddInputs(result.data);
 
}

useEffect(()=>{
    getEmployeeData()
    
  },[])
  console.log(addInputs);


const setData = (e) => {
    const { value, name } = e.target

     

 
    // lname validation

    if (name === 'lname') {
        if (value.match(/^[a-zA-Z .]*$/)) {
            setLnameValid(true)
            setaddInputs({ ...addInputs, [name]: value })
        }
        else {
            setLnameValid(false)
        }
    }

  
    // email validation

    if (name === 'email') {
        if (value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) { 
            setEmailValid(true)
            setaddInputs({ ...addInputs, [name]: value })
        }
        else {
            setEmailValid(false)
        }
    }

     // fname validation

     if (name === 'fname') {
      if (value.match(/^[a-zA-Z ]*$/)) {
          setFnameValid(true)
          setaddInputs({ ...addInputs, [name]: value })
      }
      else {
          setFnameValid(false)
      }
  }

    // mobile num validation 

    if (name === 'mobile') {
        if (value.match(/^[+][0-9]{10,12}$/)) {
            setMobValid(true)
            setaddInputs({ ...addInputs, [name]: value })
        }
        else {
            setMobValid(false)
        }
    }

    //location validation 

    if (name === 'location') {
        if (value.match(/^[a-zA-Z0-9 ]*$/)) {
            setLocationValid(true)
            setaddInputs({ ...addInputs, [name]: value })
        }
        else {
            setLocationValid(false)
        }
    }

    if (name === 'gender' || name === 'status') {
        setaddInputs({ ...addInputs, [name]: value })
    }
    setaddInputs({ ...addInputs, [name]: value })
}

//state to add image 

const [addImage, setAddImage] = useState("")

const imageData = (e) => {

    setAddImage(e.target.files[0]);

}



// to hold the image to show in preview

const [imagePreview, setImagePreview] = useState("")

useEffect(() => {

    if (addImage) {
        setImagePreview(URL.createObjectURL(addImage));
    }
}, [addImage])


// console.log(addInputs);


const HandleEdit = async (e) => {
    e.preventDefault()
    // alert('Button Clicked')

    const { fname, lname, email, mobile, gender, status, location } = addInputs
    if (fname === "" || lname === "" || email === "" || mobile === "" || gender === "" || status === "" || location === "") {

        toast.error('Please enter the required details', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
    }

    else {

        // header (body data contain file type content)

        const headerConfig = {
            "Content-Type": "multipart/form-data"

        }

        // body data as formdata ( file type content)
        const data = new FormData()

        //append fname, lname, email, mobile, gender, status, location ,image

        data.append('fname', fname)
        data.append('lname', lname)
        data.append('email', email)
        data.append('mobile', mobile)
        data.append('gender', gender)
        data.append('status', status)
        data.append('location', location)
        data.append('user_profile',addImage?addImage:addInputs.profile)

        //api

        const result = await editEmployee(id,data,headerConfig)
        console.log(result);

        if (result.status>=200 && result.status<300){

           
setUpdateStatus(result.data)
            navigate('/employee-mng')

        }
        else{
            // setErrorMsg(result.response.data)
            
        }

    }
    // window.location.reload(true)



}

  return (
    <div className='add1'>

    {
        errorMsg?(<Alert variant={"danger"} dismissible onClose={()=>setErrorMsg("")}>
            {errorMsg}
          </Alert>
          ):""
    }

    <form className='form container mb-5'>
        <div className='text-center mt-5 mb-5'>
            <h4 className='p-5' ><b>Edit Employee Details</b></h4>
        </div>

        <div class='text-center'>

            <img className='rounded-circle border-secondary' src={imagePreview ? imagePreview :`${BASE_URL}/uploads/${addInputs.profile}`} width={150} height={150} alt="" />
        </div>

        <Row>

            <Col className='p-5 mt-3'>

                <Form.Group onChange={(e) => setData(e)} className="mb-3" controlId="formGroupText">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control value={addInputs.fname} name="fname" required type="text" placeholder="First Name" />
                </Form.Group>
                {!fnameValid &&
                    <div>
                        <p className='text-danger text-center'>*invalid credentials !</p>
                    </div>
                }

                <Form.Group onChange={(e) => setData(e)} className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control value={addInputs.email} name="email" required type="email" placeholder="Email Id" />
                </Form.Group>
                {!emailValid &&
                    <div>
                        <p className='text-danger text-center'>*invalid Email credentials !</p>
                    </div>
                }

                <Form.Group onChange={(e) => setData(e)} className="mb-3" id="formGridCheckbox">
                    <Form.Label >Gender</Form.Label>
                    <Form.Check checked={addInputs.gender==='Male'?true:false}
                        type="radio"
                        label="Male"
                        name="gender"
                        id="formHorizontalRadios1"
                        value={'Male'}
                        

                    />
                    <Form.Check checked={addInputs.gender==='female'?true:false}
                        type="radio"
                        label="Female"
                        name="gender"
                        id="formHorizontalRadios2"
                        value={'female'}
                       
                    />
                    <Form.Check checked={addInputs.gender==='Others'?true:false}
                        type="radio"
                        label="Others"
                        name="gender"
                        id="formHorizontalRadios3"
                        value={'Others'}
                       
                    />
                </Form.Group>
                <Form.Group onChange={(e) => imageData(e)} className="mb-3" htmlFor=''>
                    <Form.Label>Choose Profile Picture</Form.Label>
                    <input required type="file" className='form-control' />
                </Form.Group>


            </Col>

            <Col className='p-5 mt-3'>

                <Form.Group onChange={(e) => setData(e)} className="mb-3" controlId="formGroupText">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control value={addInputs.lname} name='lname' required type="text" placeholder="Last Name" />
                </Form.Group>
                {!lnameValid &&
                    <div>
                        <p className='text-danger text-center'>*invalid credentials !</p>
                    </div>
                }
                <Form.Group onChange={(e) => setData(e)} className="mb-3" controlId="formGroupText">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control value={addInputs.mobile} name='mobile' type="text" required placeholder="Number" />
                </Form.Group>

                {!mobValid &&
                    <div>
                        <p className='text-danger text-center'>*invalid Mobile Number !</p>
                    </div>
                }

                <Form.Group onChange={(e) => setData(e)} className="mb-3 py-2" controlId="formGridState">
                    <Form.Label className='mt-1'>Select Employee Status</Form.Label>
                    <Form.Select  value={addInputs.status} name='status' defaultValue="Choose..." className='mb-3'>
                        <option >select...</option>
                        <option value={'Active'}>Active</option>
                        <option value={'Inactive'}>Inactive</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group onChange={(e) => setData(e)} className="mb-3" controlId="formGrouptext">
                    <Form.Label>Employee Location</Form.Label>
                    <Form.Control value={addInputs.location} name='location' type="text" placeholder="Location" />
                </Form.Group>
                {!locationValid &&
                    <div>
                        <p className='text-danger text-center'>*Type Valid details !</p>
                    </div>
                }


            </Col>
        </Row>

        <div className='text-center'>
            <Button onClick={(e) => HandleEdit(e)} className='w-50 btn btn-secondary mb-5'>Update</Button>
        </div>

    </form>
    <ToastContainer />
</div>
  )
}

export default Edit