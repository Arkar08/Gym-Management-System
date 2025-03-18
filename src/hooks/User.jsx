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
    const [trainer ,setTrainer] = useState([])
    const [customer ,setCustomer] = useState([])
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
        getTrainer()
        getCustomer()
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

    const getTrainer = async() =>{
        const {data:Trainer,error} = await supabase.from("User").select('*').eq("roleId","trainer")
        setError(error)
        setTrainer(Trainer)
    }

    const getCustomer = async() =>{
        const {data:Customer,error} = await supabase.from("User").select('*').eq("roleId","customer")
        setError(error)
        setCustomer(Customer)
    }


    
    const handleChange = (event) => {
        setCreateUser(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value,
          createdDate:new Date()
        }));
      };

    const handleCreate = async() =>{
        try{
            const {data:User,error} = await supabase.from("User").insert([createUser]).select()
            setError(error)
            setSelectedName("")
            setOpen(true)
            if(User === null || error === null){
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
                const { data, error } = await supabase.auth.signUp({
                    email: createUser.email,
                    password: createUser.password,
                    options: {
                        data: {
                          userRole: createUser.roleId,
                        }
                    }
                })
                if(data !== null){
                    alert(data)
                }
                if(error !== null){
                    alert(error.message)
                }
              
            }
            if(error !== null){
                alert(error.message)
            }
        }catch(error){
            alert(error.message)
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
        <UserContext.Provider value={{users,error,roles,createUser,handleCreate,handleChange,handleCloseUser,trainer,customer}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;