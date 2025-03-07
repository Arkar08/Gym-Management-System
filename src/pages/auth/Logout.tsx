import { Button, ButtonGroup } from '@mui/material'
import React from 'react'

const Logout = () => {
  return (
    <div className='tableContainer'>
      <div className='logoutContainer'>
        <div className='logoutForm'>
          <h3 className='logoutText'>Are You Want To Logout?</h3>
          <div  className='group'>
            <ButtonGroup variant="outlined" aria-label="Basic button group" size="small">
              <Button variant="contained" color="success" className='btn' size="small">Yes</Button>
              <Button variant="contained" color="error" className='btn' size="small">No</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logout
