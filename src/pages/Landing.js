import { useDataContext } from "../context/dataContext";
import { CuisineButton } from "../components/CuisineButton";
import { RestaurantCard } from "../components/RestaurantCard";

export function Landing(){
    const { cuisinesData, filter, restaurantData } = useDataContext();

    const filterData = () => {
        return filter === 0 ? restaurantData : restaurantData.filter((restaurant)=>restaurant.cuisine_id === filter);
    }

    return(
    <div>
        <h1>Food Ordering App</h1>
        <h3>Select Your Cuisine:</h3>
        <div className="btn-container">
            {cuisinesData.map((cuisine,index)=><CuisineButton data={cuisine} key={index}/>)}
        </div>
        <div>
            {filterData().map((restaurant,index)=><RestaurantCard data={restaurant} key={index}/>)}
        </div>
    </div>);
}