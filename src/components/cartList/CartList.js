import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Col, Row, Button } from "react-bootstrap";

const CartList = () => {
    const { cartList, clearCart, getTotal } = useContext(CartContext);

    return (
        <>
            {cartList.map((cartItem)=>{
                return <CartItem key = {cartItem.id} cartItem = {cartItem}/>
            })}
            <Row>
                <h2 className="fw-bold">Total: ${getTotal().toFixed(2)}</h2>
            </Row>
            <Row className="">
                <Col>
                    <Link to="/checkout" className="btn btn-primary">Checkout</Link>
                </Col>
                <Col>
                    <Button onClick={clearCart}>Vaciar Carrito</Button>
                </Col>
            </Row>

        </>
    )
}

export default CartList;