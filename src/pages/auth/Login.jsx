import React, {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import supabase from '../../superbase/superbase';


const Login = () => {


  const [show,setShow] = useState(false)
  const navigate = useNavigate()
  const [loginDetails , setLoginDetails] = useState({
    email:"",
    password:""
  })

  const handleChange = (event) =>{
      setLoginDetails((prev)=>(
        {
          ...prev,[event.target.name]: event.target.value
        }
      ))
  }

  const login = async(event) =>{
    event.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginDetails.email,
      password: loginDetails.password,
    })
    if(data.session !== null){
      navigate("/auth/login")
      localStorage.setItem("token",data.user.identities[0].identity_data.userRole)
    }
    const token = localStorage.getItem("token")
    if(token === 'admin'){
      navigate("/dashboard")
      window.location.reload()
    }else if(token === 'trainer'){
      navigate("/trainer/dashboard")
      localStorage.setItem("email",data.user.user_metadata.email)
      window.location.reload()
    }else{
      navigate("/auth/login")
    }
    if(error || data.session === null){
      navigate("/auth/login")
      alert(error.message)
    }
    setLoginDetails({
      email:"",
      password:""
    })
  }


 


  return (
    <div className='loginContainer'>
        <form onSubmit={login} className='login'>
          <div className='loginTextContainer'>
              <h3 className='loginText'>Login</h3>
          </div>
          <div className='formField'>
            <label htmlFor="Email Or Ph Number">Email Or Ph Number</label>
            <TextField label='Enter Email Or Ph Number' variant="outlined" autoComplete='off' name='email' value={loginDetails.email} onChange={handleChange}/>
          </div>
          <div className='formField'>
            <label htmlFor="Password">Password</label>
            <TextField label='Password' variant="outlined" type={show ? 'text':'password'} autoComplete='off'  name="password" value={loginDetails.password} onChange={handleChange}/>
            {
              show ? <VisibilityIcon className='eyeIcon' onClick={() =>setShow(!show)}/> : <VisibilityOffIcon className='eyeIcon' onClick={() =>setShow(!show)}/>
            }
          </div>
          <div className='loginBtnContainer'>
            <Button className='loginBtn' type='submit'>Login</Button>
          </div>
          <div>
            <div className='third'><p className='line'></p>Or Login with <p className='line'></p></div>
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
          <p className='register'>Don't have an account ? <Link to='/auth/signup' className='registerText'>Register</Link></p>
        </form>
    </div>
  )
}

export default Login
