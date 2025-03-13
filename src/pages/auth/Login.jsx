import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Login = () => {


  const [show,setShow] = useState(false)
  const navigate = useNavigate()

  const login = () =>{
    localStorage.setItem("login","admin")
    navigate("/dashboard")
    // localStorage.setItem("login","trainer")
    // navigate("/trainer/dashboard")
  }

  return (
    <div className='loginContainer'>
        <form onSubmit={login} className='login'>
          <div className='loginTextContainer'>
              <h3 className='loginText'>Login</h3>
          </div>
          <div className='formField'>
            <label htmlFor="Email Or Ph Number">Email Or Ph Number</label>
            <TextField label='Enter Email Or Ph Number' variant="outlined" autoComplete='off'/>
          </div>
          <div className='formField'>
            <label htmlFor="Password">Password</label>
            <TextField label='Password' variant="outlined" type={show ? 'text':'password'} autoComplete='off'  name="password"/>
            {
              show ? <VisibilityIcon className='eyeIcon' onClick={() =>setShow(!show)}/> : <VisibilityOffIcon className='eyeIcon' onClick={() =>setShow(!show)}/>
            }
          </div>
          <div className='loginBtnContainer'>
            <Button className='loginBtn' type='submit'>Login</Button>
          </div>
          <div>
            <p className='third'><div className='line'></div>Or Login with <div className='line'></div></p>
          </div>
          <div className='iconBoxContainer'>
            <div className='iconBox'>
              <GoogleIcon />
              <p className='iconText'>Google</p>
            </div>
            <div className='iconBox'>
              <AppleIcon/>
              <p className='iconText'>AppleID</p>
            </div>
            <div className='iconBox'>
              <FacebookIcon />
              <p className='iconText'>Facebook</p>
            </div>
          </div>
        </form>
    </div>
  )
}

export default Login
