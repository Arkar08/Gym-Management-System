import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import dummy from '../utils/dummyData.js'
import trainer from '../utils/dummy.js'

const Main = () => {

  const [data , setData] = useState([])
  const [active , setActive] = useState(false)

  useEffect(()=>{
    const login = localStorage.getItem("login")
    if(login === 'admin'){
      setData(dummy)
    }else if(login === 'trainer'){
      setData(trainer)
    }
  },[data])

  const toggle = () =>{
    setActive(!active)
    if(window.innerWidth < 900){
      setActive(true)
    }
  }

  useEffect(()=>{
    if(window.innerWidth < 900){
      setActive(true)
    }
  },[active])
 

  return (
    <div>
      <Navbar toggle={toggle}/>
      <div className='drawer'>
        <Sidebar data={data} active ={active }/>
        <div className={active ? 'outletActive':'outlet'}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Main
