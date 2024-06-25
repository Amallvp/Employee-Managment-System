import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { useNavigate } from 'react-router-dom';
import { adminLoginApi } from '../Service/allApis';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

  const [emailValid, setEmailValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)


  // state creation

  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: ""
  })

  const setInputs = (e) => {
    const { value, name } = e.target
    if (name === 'email') {
      if (value.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
        setEmailValid(true)
        setLoginInputs({ ...loginInputs, [name]: value })
      }
      else {
        setEmailValid(false)
      }
    }
    if (name === 'password') {
      if (value.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
        setPasswordValid(true)
        setLoginInputs({ ...loginInputs, [name]: value })
      } else {
        setPasswordValid(false)
      }
    }

  }



  console.log(loginInputs);

  const navigate = useNavigate()
  const handleSubmit = async () => {

    const { email, password } = loginInputs

    if (email === "" || password === "") {

      toast.warn('All Inputs Required', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

      });

    }
    else {
      const result = await adminLoginApi(loginInputs)
      if (result.status >= 200 && result.status < 300) {
        alert(result.data)
        navigate('/home')
      } else {
        console.log();

        toast.warn(result.response.data, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",

        });
      }
    }



  }
  return (
    <div className='loginMain'>

      <Row className='w-100'>
        <Col>

          <img className='img1 responsive' src="https://i.postimg.cc/cCBrM9Cx/ezgif-com-gif-maker-2.gif" alt="" />

        </Col>
        <Col className='shadow border rounded mt-5 me-5 mb-5'>


          <div className='mt-5 mb-5 align-center justify-center'>

            <h2>Sign In</h2>
          </div>
          <div className='p-3'>

            <>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className=""
              >
                <Form.Control onChange={(e) => setInputs(e)} name='email' type="email" placeholder="name@example.com" />
              </FloatingLabel>
              {!emailValid &&
                <div>
                  <p className='text-danger text-center'>*invalid Email credentials !</p>
                </div>
              }
              <FloatingLabel controlId="floatingPassword" className='mt-5' label="Password">
                <Form.Control onChange={(e) => setInputs(e)} name='password' type="password" placeholder="Password" />
              </FloatingLabel>

              {!passwordValid &&
                <div>
                  <p className='text-danger text-center'>*password should contain atleast one number and one special character</p>
                </div>
              }

              <Button onClick={handleSubmit} className='text-center w-50 mt-5 btn1 btn-outline-primary btn-dark'>Login</Button>
            </>

          </div>

        </Col>
      </Row>
      <ToastContainer />

    </div>
  )
}

export default Login