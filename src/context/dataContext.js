import { createContext, useContext, useState } from "react";
import { data } from "../db/data";
import { cuisineData } from "../db/cuisine";


const Context = createContext(null);

export function ContextWrapper({children}){
    const [restaurantData, setRestaurantData] = useState(data);
    const [cuisinesData,setCuisineData] = useState(cuisineData);
    const [filter,setFilter] = useState(0);

    return(<Context.Provider value={{restaurantData, setRestaurantData,cuisinesData,setCuisineData, filter, setFilter}}>
        {children}
    </Context.Provider>);
}

export const useDataContext = () => useContext(Context);