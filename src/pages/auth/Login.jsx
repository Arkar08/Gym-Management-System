import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup, TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';

const Login = () => {

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
            <TextField label='Enter Email Or Ph Number' variant="outlined"/>
          </div>
          <div className='formField'>
            <label htmlFor="Password">Password</label>
            <TextField label='Password' variant="outlined"/>
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
