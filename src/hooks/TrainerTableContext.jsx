import { createContext } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const TrainerTableContext = createContext()


const TrainerTableProvider = ({children})=>{
    return(
        <TrainerTableContext.Provider>
            {children}
        </TrainerTableContext.Provider>
    )
}

export default TrainerTableProvider;