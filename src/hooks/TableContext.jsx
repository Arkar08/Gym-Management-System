import { createContext, useState } from "react";
import supabase from "../superbase/superbase";
import dayjs from "dayjs";


// eslint-disable-next-line react-refresh/only-export-components
export const TableContext = createContext()


const TableProvider = ({children}) =>{

    const [selectedName,setSelectedName] = useState('')
    const [open, setOpen] = useState(false);
    const [filterOpen , setFilterOpen] = useState(false)
    const [filterName , setFilterName] = useState('')
    const [show , setShow] = useState(true)
    const [editedName,setEditedName] = useState('')
    const [editId,setEditId] = useState(null)
    const [editOpen , setEditOpen] = useState(false)
    const [updateUser , setUpdateUser] = useState({
            name:"",
            email:"",
            password:"",
            phoneNumber:"",
            address:"",
            roleId:"",
            updatedDate:""
        })

    const [updateClass,setUpdateClass] = useState({
        className:"",
        trainer:"",
        startTime:"",
        endTime:"",
        duration:"",
        days:[],
        capacity:"",
        price:"",
        notes:"",
        updatedDate:""
    }) 

    const filterClick = ({name})=>{
        setFilterName(name)
        setFilterOpen(true)
    }

    const filterClose = ()=>{
        setFilterOpen(false)
        setFilterName("")
    }

    const handleOpen = ({name}) => {
        setSelectedName(name)
        setOpen(true);
    };

      
    const handleClose = () => {
        setSelectedName("")
        setOpen(false);
    };



    // update User
    const handleEdit = async({name,selectedId}) =>{
        setEditedName(name)
        setEditId(selectedId)
        setEditOpen(true)
        if(name === 'User Listings'){
            const {data:User , error} = await supabase.from("User").select("*").eq("id",selectedId)
            setUpdateUser(User[0])
            if(error){
                alert(error.message)
            }
        }
        if(name === 'Class Listings'){
            const {data:ClassList,error} = await supabase.from("ClassTable").select("*").eq("id",selectedId)
            setUpdateClass(ClassList)
            if(error){
                alert(error.message)
            }
        }
    }

    const handleEditClose = () =>{
        setEditedName("")
        setEditOpen(false)
        if(editedName === 'User Listings'){
            setUpdateUser({
                name:"",
                email:"",
                password:"",
                phoneNumber:"",
                address:"",
                roleId:"",
                updatedDate:""
            })
        }else if(editedName === 'Class Listings'){
            setUpdateClass({
                className:"",
                trainer:"",
                startTime:"",
                endTime:"",
                duration:"",
                days:[],
                capacity:"",
                price:"",
                notes:"",
                updatedDate:""
            })
        }
    }

    const handleUpdateUser = async()=>{
        updateUser.updatedDate = dayjs(new Date())
        try {
            const {data:User,error} = await supabase.from("User").update(updateUser).eq('id',editId).select()
            if(error){
                alert(error.message)
            }
            setEditedName("")
            setEditOpen(false)
            if(User !== null || error === null){
                setUpdateUser({
                    name:"",
                    email:"",
                    password:"",
                    phoneNumber:"",
                    address:"",
                    roleId:"",
                    updatedDate:""
                })
                alert("update User successfully")
                window.location.reload()
            }
            if(error !== null){
                alert(error.message)
            }
        } catch (error) {
            alert(error.message)
        }
    }

    const userOnChange = (event) =>{
        if(editedName === 'User Listings'){
            setUpdateUser((prev)=>{
                return {...prev,[event.target.name]:event.target.value}
            })
        }else if(editedName === 'Class Listings'){
            setUpdateClass((prev)=>{
                return {...prev,[event.target.name]:event.target.value}
            })
        }
    }

    // update Class
    const handleUpdateClass = async()=>{
        updateClass.updatedDate = dayjs(new Date())
        try {
            const {data:ClassList,error} = await supabase.from("User").update(updateClass).eq('id',editId).select()
            if(error){
                alert(error.message)
            }
            setEditedName("")
            setEditOpen(false)
            if(ClassList !== null || error === null){
                setUpdateClass({
                    className:"",
                    trainer:"",
                    startTime:"",
                    endTime:"",
                    duration:"",
                    days:[],
                    capacity:"",
                    price:"",
                    notes:"",
                    updatedDate:""
                })
                alert("update Class successfully")
                window.location.reload()
            }
            if(error !== null){
                alert(error.message)
            }
        } catch (error) {
            alert(error.message)
        }
    }


    return (
        <TableContext.Provider value={{selectedName,setSelectedName,open,setOpen,filterOpen,setFilterOpen,filterName,setFilterName,show,handleOpen,handleClose,filterClick,filterClose,setShow,editedName,editId,handleEdit,editOpen,handleEditClose,updateUser,handleUpdateUser,userOnChange,handleUpdateClass,updateClass}}>
            {children}
        </TableContext.Provider>
    )
}

export default TableProvider
