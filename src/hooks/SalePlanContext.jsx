import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../superbase/superbase";
import { TableContext } from "./TableContext";
import dayjs from "dayjs";


// eslint-disable-next-line react-refresh/only-export-components
export const SalePlanContext = createContext()


const SalePlanProvider = ({children})=>{

    const [salePlan , setSalePlan] = useState([])
    const {setOpen,setSelectedName} = useContext(TableContext)
    const [selectTrainers,setSelectTrainers] = useState('')
    const [totalAmounts , setTotalAmounts] = useState(0)
    const [planList ,setPlanList] = useState([])
    const [error , setError] = useState(false)
    const [accessTypeName,setAccessTypeName] = useState('')
    const [createSale , setCreateSale] = useState({
        customerName:"",
        planName:[],
        trainer:"",
        accessType:"",
        price:0,
        startDate:dayjs(Date.now()),
        endDate:dayjs(Date.now()),
        payment:"",
    })
    const [report,setReport] = useState({
        customerName:"",
        planList:"",
        trainer:"",
        packages:"",
        paymentType:"",
        total:0,
    })

    const [income,setIncome] = useState({
        memberName:"",
        planList:"",
        trainer:"",
        paymentType:"",
        total:0,
    })

    useEffect(()=>{
        getSale()
    },[])

    const getSale = async() =>{
        const {data:Sale , error} = await supabase.from("salePlan").select("*").order('createdDate', { ascending: false })
        setError(error)
        setSalePlan(Sale)
    }

    const handleSelectTrainer = async(event)=>{
        const data = event.target.value;
        setSelectTrainers(data)
        if(data !== ''){
            const {data:Plan , error} = await supabase.from("Plan").select().eq("trainer",data)
            setPlanList(Plan)
            setError(error)
        }else{
            setPlanList([])
        }
    }

    const handleDoublePlanChange = async(event)=>{

        let totalPrice = 0;
        setCreateSale((prev)=>{
            return (
                {...prev,[event.target.name]:event.target.value}
            )
        })
        const {data:Price , error} = await supabase.from("Plan").select("*").in("planName",event.target.value) 
        Price.forEach((priceName)=>{
            return totalPrice += Number(priceName.price);
        })
        const {data:Access } = await supabase.from("Plan").select("*").in("planName",event.target.value) 
        const accessName = Access.map((access)=>{
            return access.accessType;
        })
        setError(error)
        setTotalAmounts(totalPrice)
        setAccessTypeName(accessName.join(","))
    }

    const handleSaleChange = (event)=>{
        return(
            setCreateSale((prev)=>{
                return(
                    {...prev, [event.target.name]: event.target.value}
                )
            })
        )
    }

    const handleSaleClose = ()=>{
        setCreateSale({
            customerName:"",
            planName:[],
            trainer:"",
            accessType:"",
            price:0,
            startDate:dayjs(Date.now()),
            endDate:dayjs(Date.now()),
            payment:"",
        })
        setTotalAmounts(0)
        setAccessTypeName('')
        setSelectTrainers('')
        setSelectedName("")
        setOpen(true)
    }

    const handleSaleSave = async()=>{
        createSale.price = totalAmounts;
        createSale.trainer = selectTrainers;
        createSale.accessType = accessTypeName;
        try {
            const {data:Plans , error} = await supabase.from("salePlan").insert([createSale]).select()
            setSelectedName("")
            setOpen(true)
            if(Plans === null || error === null){
                setCreateSale({
                    customerName:"",
                    planName:[],
                    trainer:"",
                    accessType:"",
                    price:0,
                    startDate:dayjs(Date.now()),
                    endDate:dayjs(Date.now()),
                    payment:"",
                })
                setTotalAmounts(0)
                setAccessTypeName('')
                setSelectTrainers('')
                alert("create Sale Plan successfully")
                const{data:SalePlan} = await supabase.from("salePlan").select("*").order('createdDate', { ascending: false })
                setSalePlan(SalePlan)  
            }
            if(error !== null){
                alert(error.message)
            }
           } catch (error) {
             alert(error.message)
           } 
    }

    const handleAccept = async(event) =>{
        const {data:FindIdPlan} = await supabase.from("salePlan").select("*").eq("id",event)
        report.customerName = FindIdPlan[0].customerName,
        report.planList=FindIdPlan[0].planName,
        report.trainer=FindIdPlan[0].trainer,
        report.packages='Sale Plan',
        report.paymentType=FindIdPlan[0].payment,
        report.total=FindIdPlan[0].price


        income.memberName = FindIdPlan[0].customerName;
        income.planList = FindIdPlan[0].planName;
        income.trainer = FindIdPlan[0].trainer,
        income.paymentType =FindIdPlan[0].payment
        income.total = Math.floor(FindIdPlan[0].price * 0.25);

        const updateData = {
            status:"Accept",
            updatedDate:dayjs(new Date())
        }
        const {data:SalPlan,error} = await supabase.from("salePlan").update(updateData).eq('id',event).select()
            await supabase.from("Report").insert([report]).select()
            await supabase.from("Income").insert([income]).select()
        if(error){
            alert(error.message)
        }
        if(SalPlan !== null){
            alert('Accept successfully')
            const {data:SalePlan,error} = await supabase.from("salePlan").select("*").order('updatedDate', { ascending: false })
            setSalePlan(SalePlan)
            setReport({
                customerName:"",
                planList:"",
                trainer:"",
                packages:"",
                paymentType:"",
                total:0,
            })
            setIncome({
                memberName:"",
                planList:"",
                trainer:"",
                paymentType:"",
                total:0,
            })
            if(error){
                alert(error)
            }
        }
    }

    const handleCancelReject = async(event) =>{
        const updateData = {
            status:"Cancel",
            updatedDate:dayjs(new Date())
        }
        const {data:SalPlan,error} = await supabase.from("salePlan").update(updateData).eq('id',event).select()
        if(error){
            alert(error.message)
        }
        if(SalPlan !== null){
            alert('Reject successfully')
            const {data:SalePlan,error} = await supabase.from("salePlan").select("*").order('updatedDate', { ascending: false })
            setSalePlan(SalePlan)
            if(error){
                alert(error)
            }
        }
    }

    return (

        <SalePlanContext.Provider value={{salePlan,error,createSale,handleSelectTrainer,selectTrainers,planList,handleDoublePlanChange,totalAmounts,accessTypeName,handleSaleChange,handleSaleClose,handleSaleSave,handleAccept,handleCancelReject}}>
            {children}
        </SalePlanContext.Provider>
    )
}

export default SalePlanProvider;