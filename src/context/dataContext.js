import { createContext, useContext, useState } from "react";
import { data } from "../db/data";


const Context = createContext(null);

export function ContextWrapper({children}){
    const [recipe, setRecipe] = useState(data);

    return(<Context.Provider value={{recipe, setRecipe}}>
        {children}
    </Context.Provider>);
}

export const useDataContext = () => useContext(Context);