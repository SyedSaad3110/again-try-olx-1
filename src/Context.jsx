import { createContext } from "react";
import { allData } from "./AllData";
import { all_cards } from "./Data";

  

export  const Context = createContext(null);

const ContextProvider = (props)=>{
    const contextValue ={allData , all_cards}

    return(
        <>
        <Context.Provider value={contextValue}>
          {props.children}
        </Context.Provider>
        </>
    )
}
export default ContextProvider



