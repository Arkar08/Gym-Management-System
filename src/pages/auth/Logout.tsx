import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

  const navigate = useNavigate()

  const logout = () =>{
    navigate('/auth/login')
    localStorage.removeItem("login")
  }

  return (
    <div>
      <div className='logoutContainer'>
        <div className='logoutForm'>
          <h3 className='logoutText'>Are You Want To Logout?</h3>
          <div  className='group'>
            <ButtonGroup variant="outlined" aria-label="Basic button group" size="small">
              <Button variant="contained" color="success" className='btn' size="small" onClick={logout}>Yes</Button>
              <Button variant="contained" color="error" className='btn' size="small">No</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logout
