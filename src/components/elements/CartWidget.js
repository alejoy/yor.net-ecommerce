import { Link } from "react-router-dom";

const CartWidget = ({quantity}) => {
    return (
        <Link to={'/cart'} className="m-1 btn btn-secondary">
            <img src={"/images/shopping-cart.svg"} width={30} height={30} alt=""/>
            {quantity}
        </Link>
    )
}

export default CartWidget;