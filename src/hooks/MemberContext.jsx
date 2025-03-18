import { createContext, useEffect, useState } from "react";
import supabase from "../superbase/superbase";


// eslint-disable-next-line react-refresh/only-export-components
export const MemberContext = createContext();

const MemberProvider = ({children})=>{

    const [memberList,setMemberList] = useState([])
    const [error , setError] = useState(null)

    useEffect(()=>{
        getMember()
    },[])

    const getMember = async() =>{
        const{data:Member ,error} = await supabase.from("User").select("*").eq("roleId","customer")
        if(error){
            setError(error.message)
        }
        if(error === null || Member !== null){
            const data = Member.map((mem)=>{
                const memberObj = {...mem}
                delete memberObj.roleId;

                return memberObj;
            })

            setMemberList(data)
        }
    }

    return(
        <MemberContext.Provider value={{memberList,error}}>
            {children}
        </MemberContext.Provider>
    )
}

export default MemberProvider;