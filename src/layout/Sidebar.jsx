import { MenuItem, MenuList,ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Icon from '@mui/material/Icon';

const Sidebar = ({data,active}) => {

    const getActiveStyle = ({isActive}) =>{
        return {
            "color":isActive? 'blue':"black"
        }
    }

    const [profileView,setProfileView] = useState(false)

    useEffect(()=>{
        if(window.innerWidth < 900){
            setProfileView(true)
        }
    },[profileView])


  return (
    <div className={active ? 'activeMenu':'sidebar'}>
        
        <MenuList>
        {
            data?.map((item,index)=>{
                return (
                <NavLink to={item.path} key={index} style={getActiveStyle}>
                    <MenuItem>
                        <Icon className='icon'>{item.icon}</Icon>
                        <ListItemText>{item.text}</ListItemText>
                    </MenuItem>
                </NavLink>
                )
            })
        }  
        </MenuList>
       {
        profileView ? (
            <MenuList>
            <NavLink to='profile' style={getActiveStyle}>
                <MenuItem>
                    <Icon className='icon'> person</Icon>
                    <ListItemText>Profile</ListItemText>
                </MenuItem>
            </NavLink>
        </MenuList>
        ):""
       }
    </div>
  )
}

export default Sidebar
