import { Link } from "react-router-dom";
import CartList from "../cartList/CartList";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Container, Row } from "react-bootstrap";

const CartContainer = () =>{

    const { cartList } = useContext(CartContext);

    return (
        <div className="mb-3 p-3">
            <h1>Carrito de Compras</h1>
            <hr/>
            <Container>
                {cartList.length===0?
                    <>
                        {console.log(cartList.length)}
                        <Row>
                            <label>Carrito vacío.</label>
                        </Row>
                            <Link to="/" className="btn btn-secondary w-50">Regresar al inicio</Link>
                    </>
                    :<CartList/>
                }
            </Container>
        </div>
    )
}

export default CartContainer;