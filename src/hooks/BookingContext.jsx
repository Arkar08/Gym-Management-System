import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../superbase/superbase";
import { TableContext } from "./TableContext";


// eslint-disable-next-line react-refresh/only-export-components
export const BookingContext = createContext()


const BookingProvider = ({children}) =>{

    const [bookings, setBookings] = useState([])
    const [selectTrainer , setSelectTrainer] = useState("")
    const [trainerClass , setTrainerClass] = useState([])
    const [error , setError] = useState('')
    const {setOpen,setSelectedName} = useContext(TableContext)
    const [totalAmount, setTotalAmount] = useState(0)
    const [createBooking , setCreateBooking] = useState({
        name:"",
        classlist:[],
        trainer:"",
        classCount:"",
        payment:"",
        price:0
    })
    const [report,setReport] = useState({
        customerName:"",
        classList:"",
        trainer:"",
        packages:"",
        paymentType:"",
        total:0,
    })

    useEffect(()=>{
        getBooking()
    },[])

    const getBooking = async() =>{
        const {data:Booking,error} = await supabase.from("Bookings").select("*")
        setError(error)
        setBookings(Booking)
    }

    const handleSelect = async(event) =>{
        const data  = event.target.value;
        setSelectTrainer(data)
       if(data !== ''){
        const {data:Trainer,error} = await supabase.from("ClassTable").select("*").eq("trainer",data)
        setTrainerClass(Trainer)
        setError(error)
       }else if(data === ''){
            setTrainerClass ([])
       }
    }

    const handleBookingChange = (event)=>{
        setCreateBooking((prev)=>{
            return(
                {...prev , [event.target.name]:event.target.value}
            )
        })
    }

    const handleDoubleBookingChange = async(event)=>{
        setCreateBooking((prev)=>{
            return(
                {...prev,[event.target.name]:event.target.value}
            )
        })
        let totalPrice = 0;
        const {data:Price , error} = await supabase.from("ClassTable").select("*").in("className",event.target.value) 
        Price.forEach((priceName)=>{
            return totalPrice += Number(priceName.price);
        })
        setError(error)
        setTotalAmount(totalPrice)
    }


    const handleBookingCreate = async()=>{
        createBooking.trainer = selectTrainer;
        createBooking.classCount = createBooking.classlist.length;
        createBooking.price = totalAmount;
        report.customerName = createBooking.name,
        report.classList=createBooking.classlist,
        report.trainer=createBooking.trainer,
        report.packages='Booking',
        report.paymentType=createBooking.payment,
        report.total=createBooking.price
        try {
            const {data:Bookings,error} = await supabase.from("Bookings").insert([createBooking]).select()
            setSelectedName("")
            setOpen(true)
            if(Bookings === null || error === null){
                setCreateBooking({
                    name:"",
                    classlist:"",
                    trainer:"",
                    classCount:"",
                    payment:"",
                    price:""
                })
                setReport({
                    customerName:"",
                    classList:"",
                    trainer:"",
                    packages:"",
                    paymentType:"",
                    total:0,
                })
                setSelectTrainer("")
                setTrainerClass([])
                setTotalAmount(0)
                alert("create Booking successfully")
                await supabase.from("Report").insert([report]).select()
                const{data:Booking} = await supabase.from("Bookings").select("*")
                setBookings(Booking) 
            }
            if(error !== null){
                alert(error.message)
            }
           } catch (error) {
             alert(error.message)
           } 
    }

    const handleBookingClose = () =>{
        setCreateBooking({
            name:"",
            classlist:"",
            trainer:"",
            classCount:"",
            payment:"",
            price:""
        })
        setSelectTrainer("")
        setTrainerClass([])
        setTotalAmount(0)
        setSelectedName("")
        setOpen(true)
    }

    return(
        <BookingContext.Provider value={{error,totalAmount,bookings,selectTrainer,handleSelect,trainerClass,createBooking,handleBookingChange,handleBookingCreate,handleBookingClose,handleDoubleBookingChange}}>
            {children}
        </BookingContext.Provider>
    )
}

export default BookingProvider;
