import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BadgeIcon from '@mui/icons-material/Badge';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Profile = () => {

  const [hide1 , setHide1] = useState(false)
  const [hide2 , setHide2] = useState(false)
  const [hide3 , setHide3] = useState(false)
  
  const navigate = useNavigate()

  const logout = () =>{
    navigate('/auth/login')
  }


  return (
    <div className='mainProfile'>
      <h3>Profile</h3>
      <div className='profileContainer'>
        <div className='profileImageContainer'>
          <div className='imageContainer'>

          </div>
          <div className='textContainer'>
            <h1>Admin</h1>
            <div className='locationContainer'>
              <LocationOnIcon />
              <p>Yangon</p>
            </div>
            <div className='badgeContainer'>
              <div className='badge'>
                <h4>Badges</h4>
                <BadgeIcon />
              </div>
              <p>4</p>
            </div>
            <div className='logoutContainer1' onClick={logout}>
              <h2>LOGOUT</h2>
            </div>
          </div>
        </div>
        <div className='profileFormContainer'>
          <p className='profile'>Profile</p>
          <div className='informationContainer'>
            <h3 className='information'>User Information</h3>
            <Button variant='contained'>Edit</Button>
          </div>
          <form action="">
            <div className='formField'>
              <label htmlFor="Name">FullName</label>
              <TextField id="outlined-basic" label="FullName" variant="outlined" />
            </div>
            <div className='formField'>
              <label htmlFor="Email">Email</label>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
            </div>
            <div className='formField'>
              <label htmlFor="PhNumber">Ph Number</label>
              <TextField id="outlined-basic" label="Ph Number" variant="outlined" />
            </div>
            <div className='formField'>
              <label htmlFor="Address">Address</label>
              <TextField id="outlined-basic" label="Address" variant="outlined" />
            </div>
            <div className='btnGroup'>
              <Button variant='contained' className='save' disabled>Save</Button>
            </div>
          </form>
          <form>
            <h3 className='information'>Password</h3>
            <div className='formField'>
              <label htmlFor="Current Password">Current Password</label>
              <TextField id="outlined-basic" label="Current Password" variant="outlined" type={hide1 ? 'text':'password'}/>
              {
                hide1 ? <VisibilityIcon className='eyeIcon' onClick={() =>setHide1(!hide1)}/> : <VisibilityOffIcon className='eyeIcon' onClick={() =>setHide1(!hide1)}/>
              }
              
            </div>
            <div className='formField'>
              <label htmlFor="NewPassword">New Password</label>
              <TextField id="outlined-basic" label="New Password" variant="outlined" type={hide2 ? 'text':'password'}/>
              {
                hide2 ? <VisibilityIcon className='eyeIcon' onClick={() =>setHide2(!hide2)}/> : <VisibilityOffIcon className='eyeIcon' onClick={() =>setHide2(!hide2)}/>
              }
            </div>
            <div className='formField'>
              <label htmlFor="ConfirmNewPassword">Confirm New Password</label>
              <TextField id="outlined-basic" label="Confirm New Password" variant="outlined" type={hide3 ? 'text':'password'}/>
              {
                hide3 ? <VisibilityIcon className='eyeIcon' onClick={() =>setHide3(!hide3)}/> : <VisibilityOffIcon className='eyeIcon' onClick={() =>setHide3(!hide3)}/>
              }
            </div>
            <div className='btnGroup'>
              <Button variant='contained' disabled>Change Password</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
