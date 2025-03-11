import { createContext, useEffect, useState } from "react";
import supabase from "../superbase/superbase";


// eslint-disable-next-line react-refresh/only-export-components
export const BookingContext = createContext()


const BookingProvider = ({children}) =>{

    const [bookings, setBookings] = useState([])
    const [error , setError] = useState('')

    useEffect(()=>{
        getBooking()
    },[])

    const getBooking = async() =>{
        const {data:Booking,error} = await supabase.from("Bookings").select("*")
        setError(error)
        setBookings(Booking)
    }

    return(
        <BookingContext.Provider value={{error,bookings}}>
            {children}
        </BookingContext.Provider>
    )
}

export default BookingProvider;
