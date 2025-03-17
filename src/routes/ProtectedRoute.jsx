import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoute = () =>{
    const token = localStorage.getItem("token")

    return(
        token ? <Outlet /> : <Navigate to='/auth/login' />
    )
}

export default ProtectedRoute;