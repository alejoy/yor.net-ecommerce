import { Link } from "react-router-dom";

const Item = ({item}) => {

    return (
    <div className="card m-1" style={{width:"18rem"}}>
        <img src={item.pictureUrl} className="card-img-top p-2" alt={item.title}/>
        <div className="card-body mx-auto">
            <br/>
            <h5 className="card-title">{item.title}</h5>
            <p>${item.price.toFixed(2)}</p>
            <Link to={"/item/"+item.id} className="btn btn-primary">Detalles</Link>
        </div>
    </div>)
}
export default Item;