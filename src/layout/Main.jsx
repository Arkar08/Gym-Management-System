import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import dummy from '../utils/dummyData.js'
import trainer from '../utils/dummy.js'

const Main = () => {

  const [data , setData] = useState([])

  useEffect(()=>{
    const login = localStorage.getItem("login")
    if(login === 'admin'){
      setData(dummy)
    }else if(login === 'trainer'){
      setData(trainer)
    }
  },[data])
 

  return (
    <div>
      <Navbar/>
      <div className='drawer'>
        <Sidebar data={data}/>
        <div className='outlet'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Main
