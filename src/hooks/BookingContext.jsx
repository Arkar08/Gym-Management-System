import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../superbase/superbase";
import { TableContext } from "./TableContext";
import dayjs from "dayjs";


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

    const [income,setIncome] = useState({
        memberName:"",
        classList:"",
        trainer:"",
        paymentType:"",
        total:0,
    })


    useEffect(()=>{
        getBooking()
    },[])

    const getBooking = async() =>{
        const {data:Booking,error} = await supabase.from("Bookings").select("*").order('createdDate', { ascending: false })
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
                setSelectTrainer("")
                setTrainerClass([])
                setTotalAmount(0)
                alert("create Booking successfully")
                const{data:Booking} = await supabase.from("Bookings").select("*").order('createdDate', { ascending: false })
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

    const handleApprove = async(event) =>{
        const {data:FindIdPlan} = await supabase.from("Bookings").select("*").eq("id",event)
        report.customerName = FindIdPlan[0].name,
        report.classList=FindIdPlan[0].classlist,
        report.trainer=FindIdPlan[0].trainer,
        report.packages='Booking',
        report.paymentType=FindIdPlan[0].payment,
        report.total=FindIdPlan[0].price


        income.memberName = FindIdPlan[0].name;
        income.classList = FindIdPlan[0].classlist;
        income.trainer = FindIdPlan[0].trainer,
        income.paymentType =FindIdPlan[0].payment
        income.total = Math.floor(FindIdPlan[0].price * 0.25);

        const updateData = {
            status:"Approve",
            updatedDate:dayjs(new Date())
        }
        const {data:Booking,error} = await supabase.from("Bookings").update(updateData).eq('id',event).select()
        await supabase.from("Report").insert([report]).select()
        await supabase.from("Income").insert([income]).select()
        if(error){
            alert(error.message)
        }
        if(Booking !== null){
            alert('Approve successfully')
            const {data:Bookings,error} = await supabase.from("Bookings").select("*").order('updatedDate', { ascending: false })
            setBookings(Bookings)
            setReport({
                customerName:"",
                classList:"",
                trainer:"",
                packages:"",
                paymentType:"",
                total:0,
            })
            setIncome({
                memberName:"",
                classList:"",
                trainer:"",
                paymentType:"",
                total:0,
            })
            if(error){
                alert(error)
            }
        }
    }

    const handleCancel = async(event) =>{
        const updateData = {
            status:"Reject",
            updatedDate:dayjs(new Date())
        }
        const {data:Booking,error} = await supabase.from("Bookings").update(updateData).eq('id',event).select()
        if(error){
            alert(error.message)
        }
        if(Booking !== null){
            alert('Cancel successfully')
            const {data:Bookings,error} = await supabase.from("Bookings").select("*").order('updatedDate', { ascending: false })
            setBookings(Bookings)
            if(error){
                alert(error)
            }
        }
    }

    return(
        <BookingContext.Provider value={{error,totalAmount,bookings,selectTrainer,handleSelect,trainerClass,createBooking,handleBookingChange,handleBookingCreate,handleBookingClose,handleDoubleBookingChange,handleApprove,handleCancel}}>
            {children}
        </BookingContext.Provider>
    )
}

export default BookingProvider;
