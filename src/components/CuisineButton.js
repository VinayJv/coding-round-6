import { useDataContext } from "../context/dataContext"

export function CuisineButton({ data }){
    const { filter, setFilter, cuisinesData } = useDataContext();

    
    const changeFilter = (event) => {
        const { id } = cuisinesData.find(({id})=>parseInt(id) === parseInt(event.target.id));
        setFilter(id);
    }

    return(<div>
        <button className="btn" id={data.id} onClick={changeFilter}>{data.name}</button>
    </div>)
}