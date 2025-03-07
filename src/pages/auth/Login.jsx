import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const login = () =>{
    // localStorage.setItem("login","admin")
    // navigate("/dashboard")
    localStorage.setItem("login","trainer")
    navigate("/trainer/dashboard")
  }

  return (
    <div>
      Login
      <Button onClick={login}>Login</Button>
    </div>
  )
}

export default Login
