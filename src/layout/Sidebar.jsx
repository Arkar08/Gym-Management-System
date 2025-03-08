import { MenuItem, MenuList,ListItemText } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom';
import Icon from '@mui/material/Icon';

const Sidebar = ({data,active}) => {

    const getActiveStyle = ({isActive}) =>{
        return {
            "color":isActive? 'blue':"black"
        }
    }


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
    </div>
  )
}

export default Sidebar
