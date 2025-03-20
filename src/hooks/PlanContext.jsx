import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../superbase/superbase";
import { TableContext } from "./TableContext";


// eslint-disable-next-line react-refresh/only-export-components
export const PlanContext = createContext()


const PlanProvider = ({children})=>{

    const [plan ,setPlan] = useState([])
    const [error , setError] = useState(false)
    const [type , setType] = useState([])
    const {setOpen,setSelectedName} = useContext(TableContext)
    const [createPlan ,setCreatePlan] = useState({
        planName:"",
        trainer:"",
        accessType:"",
        price:"",
        duration:"",
        capacity:"",
        features:""
    })
    const durationMonths = [
        "1 Months",
        "6 Months",
        "12 Months",
    ]

    useEffect(()=>{
        getPlan()
        getAccessType()
    },[])


    const getPlan = async() =>{
        const {data:Plan , error} = await supabase.from("Plan").select("*").order('createdDate', { ascending: false })
        setError(error);
        setPlan(Plan)
    }

    const getAccessType = async() =>{
        const { data: Access, error } = await supabase
        .from('Access Type')
        .select('*')
        setType(Access)
        setError(error)
    }

    const handlePlanChange = (event) =>{
        return(
            setCreatePlan((prev)=>{
                return{...prev,[event.target.name]:event.target.value}
            })
        )
    }

    const handleCreatePlan = async() =>{
        try {
            const {data:Plan , error} = await supabase.from("Plan").insert([createPlan]).select()
            setSelectedName("")
            setOpen(true)
            if(Plan === null || error === null){
                setCreatePlan({
                    planName:"",
                    trainer:"",
                    accessType:"",
                    price:"",
                    duration:"",
                    capacity:"",
                    features:""
                })
                alert("create Plan successfully")
                const{data:Plan} = await supabase.from("Plan").select("*").order('createdDate', { ascending: false })
                setPlan(Plan)  
            }
            if(error !== null){
                alert(error.message)
            }
           } catch (error) {
             alert(error.message)
           } 
    }

    const handlePlanClose = ()=>{
        setCreatePlan({
            planName:"",
            trainer:"",
            accessType:"",
            price:"",
            duration:"",
            capacity:"",
            features:""
        })
        setSelectedName("")
        setOpen(true)
    }
    

    return (
        <PlanContext.Provider value={{plan,error,durationMonths,type,createPlan,handlePlanChange,handleCreatePlan,handlePlanClose}}>
            {children}
        </PlanContext.Provider>
    )
}


export default PlanProvider;