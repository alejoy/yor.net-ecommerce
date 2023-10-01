import { Row, Col, Button } from "react-bootstrap";
import { CartContext  } from "../../context/CartContext";
import { useContext } from "react";

const CartItem = ({cartItem}) => {

    const { removeItem } = useContext(CartContext);

    const remove = () => {
        removeItem(cartItem.id);
    }

    return (
            <Row className="border d-flex">
                <Col>{cartItem.title}</Col>
                <Col className="fw-bold">Cantidad: {cartItem.count}</Col>
                <Col className="fw-bold">${cartItem.price.toFixed(2)}</Col>
                <Col className="fw-bold">Subtotal: ${(cartItem.price*cartItem.count).toFixed(2)}</Col>
                <Col><Button onClick={remove}className="btn btn-danger">Remover</Button></Col>
            </Row>
    )
}
export default CartItem;