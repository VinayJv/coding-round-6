import { useNavigate } from "react-router";

export function RestaurantCard({ data }){
    const navigate = useNavigate();

    const navigateToRestaurant = () => {
        navigate(`/${data.name}`);
    }

    return(<div>
        <h4>Dishes By {data.name}</h4>
        <div style={{display: "flex", justifyContent: "center", gap: "0.5rem"}}>
            {data.menu.map(({name, imgSrc, price, qty},index)=><div className="menu-container" key={index} onClick={navigateToRestaurant}>
                <img src={imgSrc}></img>
                <h5>{name}</h5>
                <p className="grey">{price} for {qty}</p>
                <p className="grey">{data.name}</p>
            </div>)}
        </div>
    </div>)
}