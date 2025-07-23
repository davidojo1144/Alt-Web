import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AltWebContext = createContext()

const AltWebContextProvider = (props) => {
     const navigate = useNavigate()
     const activeDelivery = "113"
     const pendingDelivery = "210"
     const successfulDelivery = "10,790"
     const totalDelivery = "19,250"



    const value = {
        navigate,
        activeDelivery,
        pendingDelivery,
        successfulDelivery,
        totalDelivery
    }
    


    return (
        <AltWebContext.Provider  value={value} >
            {props.children}
        </AltWebContext.Provider>
    )
}


export default AltWebContextProvider