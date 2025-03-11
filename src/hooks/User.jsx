import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../superbase/superbase";
import { TableContext } from "./TableContext";


// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext()


const UserProvider  = ({children}) =>{

    const {setOpen,setSelectedName} = useContext(TableContext)

    const [users,setUsers] = useState([])
    const [error ,setError] = useState(false)
    const [roles , setRoles] = useState([])
    const [createUser , setCreateUser] = useState({
        name:"",
        email:"",
        password:"",
        phoneNumber:"",
        address:"",
        roleId:"",
        createdDate:""
    })

    useEffect(()=>{
        getUser()
        getRole()
    },[])

    const getUser = async() =>{
        const { data: User,error } = await supabase
        .from('User')
        .select('*')
        setError(error)
        setUsers(User);
    }

    const getRole = async() =>{
        const {data:Role , error} = await supabase.from("Role").select('*')
        setError(error)
        setRoles(Role)
    }

    
    const handleChange = (event) => {
        setCreateUser(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value,
          createdDate:new Date()
        }));
      };

    const handleCreate = async() =>{
        const {data:User,error} = await supabase.from("User").insert([createUser])
        setError(error)
        if(User === null){
            setSelectedName("")
            setOpen(true)
            setCreateUser({
                name:"",
                email:"",
                password:"",
                phoneNumber:"",
                address:"",
                roleId:"",
                createdDate:""
            })
            alert("create User successfully")
            const{data:User} = await supabase.from("User").select("*")
            setUsers(User)
        }
    }

    const handleCloseUser = () =>{
        setCreateUser({
            name:"",
            email:"",
            password:"",
            phoneNumber:"",
            address:"",
            roleId:"",
            createdDate:""
        })
        setSelectedName("")
        setOpen(true)
    }

    return (
        <UserContext.Provider value={{users,error,roles,createUser,handleCreate,handleChange,handleCloseUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;