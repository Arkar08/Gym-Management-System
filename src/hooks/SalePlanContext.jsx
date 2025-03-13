import { createContext, useEffect, useState } from "react";
import supabase from "../superbase/superbase";


// eslint-disable-next-line react-refresh/only-export-components
export const SalePlanContext = createContext()


const SalePlanProvider = ({children})=>{

    const [salePlan , setSalePlan] = useState([])
    const [error , setError] = useState(false)

    useEffect(()=>{
        getSale()
    },[])

    const getSale = async() =>{
        const {data:Sale , error} = await supabase.from("salePlan").select("*")
        setError(error)
        setSalePlan(Sale)
    }

    return (

        <SalePlanContext.Provider value={{salePlan,error}}>
            {children}
        </SalePlanContext.Provider>
    )
}

export default SalePlanProvider;