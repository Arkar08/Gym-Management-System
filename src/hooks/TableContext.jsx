import { createContext, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const TableContext = createContext()


const TableProvider = ({children}) =>{

    const [selectedName,setSelectedName] = useState('')
    const [open, setOpen] = useState(false);
    const [filterOpen , setFilterOpen] = useState(false)
    const [filterName , setFilterName] = useState('')
    const [show , setShow] = useState(true)

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

    const handleApprove =(event)=>{
        console.log(event)
        setShow(false)
    }




    return (
        <TableContext.Provider value={{selectedName,setSelectedName,open,setOpen,filterOpen,setFilterOpen,filterName,setFilterName,show,handleApprove,handleOpen,handleClose,filterClick,filterClose}}>
            {children}
        </TableContext.Provider>
    )
}

export default TableProvider
