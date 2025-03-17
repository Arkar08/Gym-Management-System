import React, { useEffect, useState } from 'react'
import dummy from '../utils/dummyData';
import trainer from '../utils/dummy';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const HomeScreen = () => {

    const [data, setData] = useState([]);
    const [active, setActive] = useState(false);
  
    useEffect(() => {
      const login = localStorage.getItem("token");
      if (login === "admin") {
        setData(dummy);
      } else if (login === "trainer") {
        setData(trainer);
      }
    }, [data]);
  
    const toggle = () => {
      setActive(!active);
      if (window.innerWidth < 900) {
        setActive(true);
      }
    };
  
    useEffect(() => {
      if (window.innerWidth < 900) {
        setActive(true);
      }
    }, [active]);

  return (
    <div>
      <Navbar toggle={toggle} />
      <div className="drawer">
        <Sidebar data={data} active={active} />
        <div className={active ? "outletActive" : "outlet"}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
