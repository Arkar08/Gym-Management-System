import { createContext, useEffect, useState } from "react";
import supabase from "../superbase/superbase";


// eslint-disable-next-line react-refresh/only-export-components
export const PlanContext = createContext()


const PlanProvider = ({children})=>{

    const [plan ,setPlan] = useState([])
    const [error , setError] = useState(false)

    useEffect(()=>{
        getPlan()
    },[])


    const getPlan = async() =>{
        const {data:Plan , error} = await supabase.from("Plan").select("*")
        setError(error);
        setPlan(Plan)

    }

    return (
        <PlanContext.Provider value={{plan,error}}>
            {children}
        </PlanContext.Provider>
    )
}


export default PlanProvider;