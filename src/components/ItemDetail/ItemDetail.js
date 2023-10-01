import { useState, useContext, useEffect } from "react";
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Alert } from "react-bootstrap";


const ItemDetail = ({item}) => {
    const {id, title, price, description, pictureUrl} = item;
    const [quantity, setQuantity] = useState(0);
    const [isAdded, setIsAdded] = useState(false);
    const [added, setAdded] = useState(false);

    const { addItem, isInCart } = useContext(CartContext);
    

    const handleOnAdd = (count) => {
        if(count>0){
            setQuantity(count);
            addItem({id, title, price, count})
            setAdded(true);
        }
    }

    useEffect(() => {
        if(isInCart(id))
            setIsAdded(true);
    }, [id])
    
    return(
    <>
        <div className="w-100 p-5"> 
        {added?<Alert variant={"success"}>Se {quantity>1?"agrearon":"agregó"} {quantity} {quantity>1?"elementos":"elemento"} al carrito</Alert>:<></>}
            <img src={pictureUrl} className="rounded float-end h-25 w-50 p-5" alt="..."/>
            <div className="card">
                    <h3 className="card-title">{title}</h3>
                    <p className="float-start">{description}</p>
                    <br/>
                    <div className="mx-auto">
                        <h4 className="">${price}USD</h4>
                        {!isAdded?<ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd}/>:
                        <Link to={"/cart"} className="btn btn-primary">Terminar Compra</Link> }
                        </div>
                </div>
            </div>
    </>
        
    )
}

export default ItemDetail