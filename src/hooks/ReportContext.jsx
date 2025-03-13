import { createContext, useEffect, useState } from "react";
import supabase from "../superbase/superbase";


// eslint-disable-next-line react-refresh/only-export-components
export const ReportContext = createContext()

const ReportProvider = ({children})=>{

    const [report,setReport] = useState([])
    const [error,setError] = useState(false)

    useEffect(()=>{ 
        getReport()
    },[])

    const getReport = async()=>{
        const {data:Reports, error} = await supabase.from("Report").select("*")
        setError(error)
        setReport(Reports)
    }

    return(
        <ReportContext.Provider value={{report,error}}>
            {children}
        </ReportContext.Provider>
    )
}

export default ReportProvider;