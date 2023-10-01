import { Row } from "react-bootstrap"
import CheckoutItem from "./CheckoutItem"
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CheckoutList = ({cartList}) => {
    const {getTotal} = useContext(CartContext);
    
    return (
        <>
        <h3>Productos</h3>
            {cartList.map((cartItem)=>{
                return <CheckoutItem key={cartItem.id} checkoutItem={cartItem}/>
            })}
            <Row>
                <h2 className="fw-bold">Total: ${getTotal().toFixed(2)}</h2>
            </Row>
        </>
    )
}
export default CheckoutList