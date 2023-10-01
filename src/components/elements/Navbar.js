import { Navbar, Nav, Container} from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const NavBar = () => {
    const { getQuantity } = useContext(CartContext);

    const totalQuantity = getQuantity();
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight:'100px'}}
                >
                <Link className="navbar-brand" to={'/'}>YOR.Net Ecommerce</Link>
                <Link className="nav-link" to={'/'}>Inicio</Link>
                <Link className="nav-link" to={'/category/celulares'}>Celulares</Link>
                <Link className="nav-link" to={'/category/tablets'}>Tablets</Link>
                <Link className="nav-link" to={'/category/accesorios'}>Accesorios</Link>
                </Nav>
            </Container>
            <Link className="navbar-brand" to={'/orders'}>Ordenes</Link>
            <CartWidget quantity = {totalQuantity}/>
        </Navbar>
    )
}
export default NavBar;