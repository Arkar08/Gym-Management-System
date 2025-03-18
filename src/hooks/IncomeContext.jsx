import { createContext, useEffect, useState } from "react";
import supabase from "../superbase/superbase";


// eslint-disable-next-line react-refresh/only-export-components
export const IncomeContext = createContext()

const IncomeProvider = ({children})=>{


    const [income,setIncome] = useState([])
    const [error , setError] = useState(null)

    useEffect(()=>{
        getUser1()
    },[])

    const email = localStorage.getItem("email")
    const getUser1 = async()=>{
        const{data:User , error} = await supabase.from("User").select("*").eq("email",email)
        if(User !== null || error === null){
            getIncome(User[0].name)
        }
    }

    const getIncome = async (name)=>{
        const {data:Income,error} = await supabase.from("Income").select("*").eq("trainer",name)
        const data = Income.map((money)=>{
            const obj = {...money}
            delete obj.trainer;
            return obj;
        })
        setIncome(data)
        if(error){
            setError(error.message)
        }
    }

   

    return(
        <IncomeContext.Provider value={{income,error}}>
            {children}
        </IncomeContext.Provider>
    )
}

export default IncomeProvider;