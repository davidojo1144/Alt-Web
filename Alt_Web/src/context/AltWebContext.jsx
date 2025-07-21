import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AltWebContext = createContext()

const AltWebContextProvider = (props) => {
     const navigate = useNavigate()



    const value = {
        navigate
    }


    return (
        <AltWebContext.Provider  value={value} >
            {props.children}
        </AltWebContext.Provider>
    )
}


export default AltWebContextProvider