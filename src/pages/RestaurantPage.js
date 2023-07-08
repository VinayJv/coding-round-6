import { useDataContext } from "../context/dataContext";
import { useParams } from "react-router";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";

export function RestaurantPage(){
    const { cuisinesData, filter, restaurantData } = useDataContext();
    const navigate = useNavigate();
    const { restaurantName } = useParams();
    const clickedRestaurant = restaurantData.find(({name})=>name === restaurantName);
    const [rating,setRating] = useState(clickedRestaurant.averageRating);
    const [ratingData,setRatingData] = useState(clickedRestaurant.ratings);
    const [showForm, setShowForm] = useState(false);

    const addReview = (event) => {
        let userComment = {
            rating: event.target.elements[0].value,
            comment: event.target.elements[1].value,
            revName: "Vinay",
            pp: "https://source.unsplash.com/random/?doodle?people"
          };

        setRatingData([...ratingData, userComment]);
        event.preventDefault();
        event.target.reset();
        setShowForm(false);
    }

    return(
    <div style={{position: "relative"}}>
        <div className="restaurant-container">
            <div style={{position: "absolute", left: "-10%", cursor: "pointer"}} onClick={()=>navigate("/")}>
                <BiArrowBack size={30}/>
            </div>
            <div>
                <h1>{restaurantName}</h1>
                <div style={{display: "flex"}}>
                    {clickedRestaurant.menu.map(({name, index})=><li key={index}>{name}, </li>)}
                </div>
                <p>{clickedRestaurant.address}</p>
                <p>Average Rating: {rating}</p>
            </div>
            <div>
                <button className="btn" onClick={()=>setShowForm(!showForm)}>Add Review</button>
            </div>
        </div>
        <div className="divider"></div>
        <div className="review-container">
            <h1>Review</h1>
            <div>
                {ratingData.map(({rating, comment, revName, pp }, index)=><div key={index}>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <div className="review-container-inner">
                            <img src={pp} className="user-rating-img"></img>
                            <h5>{revName}</h5>
                        </div>
                        <div>
                            <div className="rating-bg">{rating} ⭐</div>
                        </div>
                    </div>
                    <div>
                        <p>{comment}</p>
                    </div>
                    <div className="divider-2"></div>
                </div>)}
            </div>
        </div>
        <div className="form-container" style={{display: showForm ? "flex" : "none"}}>
            <form onSubmit={addReview}>
                <h2 style={{textAlign: "center"}}>Add Your Review</h2>
                <label>
                    Rating: 
                    <select>
                        <option defaultChecked disabled>Select Rating</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </label>
                <label>
                    Comment: 
                    <textarea></textarea>
                </label>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    </div>);
}