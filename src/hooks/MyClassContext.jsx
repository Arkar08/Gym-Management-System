import { createContext, useEffect, useState } from "react";
import supabase from "../superbase/superbase";


// eslint-disable-next-line react-refresh/only-export-components
export const MyClassContext = createContext()

export const MyClassProvider = ({children})=>{


    const [myClassList,setMyClassList] = useState([])
    const[error , setError] = useState(null)

    useEffect(()=>{
        getUser()
    },[])

    const email = localStorage.getItem("email")
    const getUser = async()=>{
        const{data:User , error} = await supabase.from("User").select("*").eq("email",email)
        if(User !== null || error === null){
            getClassList(User[0].name)
        }
    }

    const getClassList = async(name) =>{
        const{data:ClassList,error} = await supabase.from("ClassTable").select("*").eq("trainer",name).order('createdDate', { ascending: false })
        setMyClassList(ClassList)
        if(error){
            setError(error.message)
        }
    }


    return(
        <MyClassContext.Provider value={{myClassList,error}}>
            {children}
        </MyClassContext.Provider>
    )
}