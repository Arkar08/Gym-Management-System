import { createContext, useContext, useEffect, useState } from "react";
import supabase from '../superbase/superbase'
import { TableContext } from "./TableContext";

// eslint-disable-next-line react-refresh/only-export-components
export const ClassContext = createContext()


const ClassProvider = ({children}) =>{

    const [classes , setClasses] = useState([])
    const [error ,setError] = useState(false);
    const [createClass , setCreateClass] = useState({
        className:"",
        trainer:"",
        days:[],
        startTime:"",
        endTime:"",
        duration:"",
        price:"",
        capacity:"",
        notes:""
    })
    const {setOpen,setSelectedName} = useContext(TableContext)
    const daysType = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturaday",
        "Sunday"
    ]

    useEffect(()=>{
        getClass()
    },[])

    const getClass = async() =>{
        const {data:Classes, error} = await supabase.from("ClassTable").select("*")
        setError(error)
        setClasses(Classes)
    }

    const handleClassChange = (event) =>{
        return(
            setCreateClass((prev)=>{
                return{...prev,[event.target.name]:event.target.value}
            })
            
        )
    }


    const createClassChange = async() =>{
        const timeStart = new Date("01/01/2007 " + createClass.startTime);
        const timeEnd = new Date("01/01/2007 " + createClass.endTime);
        const difference = timeEnd - timeStart; 
        const durationName = Math.floor(difference / (60 * 60 * 1000))
        createClass.duration = durationName !== 0 ? `${durationName}hour`:'';
       try {
        const {data:Classes , error} = await supabase.from("ClassTable").insert([createClass]).select()
        setSelectedName("")
        setOpen(true)
        if(Classes === null || error === null){
            setCreateClass({
                className:"",
                trainer:"",
                startTime:"",
                endTime:"",
                duration:"",
                days:[],
                capacity:"",
                price:"",
                notes:""
            })
            alert("create Class successfully")
            const{data:Classes} = await supabase.from("ClassTable").select("*")
            setClasses(Classes)  
        }
        if(error !== null){
            alert(error.message)
        }
       } catch (error) {
         alert(error.message)
       } 
    }

    const handleCloseClass = () =>{
        setCreateClass({
            className:"",
            trainer:"",
            startTime:"",
            endTime:"",
            duration:"",
            days:[],
            capacity:"",
            price:"",
            notes:""
        })
        setSelectedName("")
        setOpen(true)
    }



    return(
        <ClassContext.Provider value={{error,classes ,createClass,handleClassChange,createClassChange,handleCloseClass,daysType}}>
            {children}
        </ClassContext.Provider>
    )
}

export default ClassProvider;