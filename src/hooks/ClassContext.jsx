import { createContext, useEffect, useState } from "react";
import supabase from '../superbase/superbase'


// eslint-disable-next-line react-refresh/only-export-components
export const ClassContext = createContext()


const ClassProvider = ({children}) =>{

    const [classes , setClasses] = useState([])
    const [error ,setError] = useState(false);

    useEffect(()=>{
        getClass()
    },[])

    const getClass = async() =>{
        const {data:Classes, error} = await supabase.from("Class").select("*")
        setError(error)
        setClasses(Classes)
    }



    return(
        <ClassContext.Provider value={{error,classes}}>
            {children}
        </ClassContext.Provider>
    )
}

export default ClassProvider;