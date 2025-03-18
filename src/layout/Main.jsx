import React, { useEffect, useState } from 'react'
import dummy from '../utils/dummyData';
import trainer from '../utils/dummy';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Navigate, Outlet } from 'react-router-dom';
const Main = () => {

    const [data, setData] = useState([]);
    const [active, setActive] = useState(false);
    const token = localStorage.getItem("token")
  
    useEffect(() => {
      const login = localStorage.getItem("token");
      if (login === "admin") {
        setData(dummy);
      } else if (login === "trainer") {
        setData(trainer);
      }

      if (window.innerWidth < 900) {
        setActive(true);
      }
    }, [data,active]);

    const locationName = location.pathname
    if(locationName === '/'){
      localStorage.removeItem("token")
      localStorage.removeItem("sb-xhlxxupjsinesrueccyo-auth-token")
      return <Navigate to="/auth/login" replace/>;
    }
    
    const toggle = () => {
      setActive(!active);
      if (window.innerWidth < 900) {
        setActive(true);
      }
    };
    if (!token) {
      return <Navigate to="/auth/login" replace/>;
    }

    

    

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
  );
};

export default Main;
