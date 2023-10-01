import { Col, Container, Row, Button, Alert } from "react-bootstrap"
import CheckoutForm from "../checkout/CheckoutForm"
import CheckoutList from "../checkout/CheckoutList"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore"
import Loading from "../elements/Loading"

const CheckoutContainer = () => {
    const { cartList, getTotal, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState("");
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);
    const [success, setSuccess] = useState(false);
    const [userData, setUserData] = useState({name:"",
                                        lname:"",
                                        email:"",
                                        phone:""});
    const date = new Date();

    const ordersCollection = collection(db,"orders");

    const handleCreateOrder = () => {
        if(cartList.length===0){
            setAlert("El carrito está vacío.");
        }
        else if(userData.name===""||userData.email===""||userData.phone===""){
            setAlert("Hay campos pendientes.")
        }
        else{
            setAlert(false);
            const objOrder = {
                buyer: userData,
                items: cartList,
                date: date.toLocaleString(),
                total: getTotal()
            }
            setLoading(true);
            addDoc(ordersCollection, objOrder)
            .then(({id})=>{
                    setOrderId(id)
                    setSuccess(true)
                    clearCart()
                    setUserData(({name:"",
                            email:"",
                            phone:""}))})
            .catch(error=>console.log(error))
            .finally(()=>{
                setLoading(false)})
        }
    }

    return (
        <Container>
            <h1>Checkout</h1>
            <hr/>
            {success?<Alert variant={"success"} onClose={()=>setAlert(false)} dimissible="true">
                Orden creada con el Id "{orderId}".
                </Alert>:<></>}
            {alert?<Alert variant={"danger"} onClose={()=>setAlert(false)} dimissible="true">
                {alert}
                </Alert>:<></>}
            {loading?<Loading/>:
            <Row>
                <Col>
                    <CheckoutForm user={userData} setUser={setUserData}/>
                </Col>
                <Col>
                    <CheckoutList cartList = {cartList}/>
                </Col>
            </Row>}
            <hr/>
            <Button className="btn btn-primary" onClick={handleCreateOrder}>Crear Orden</Button>
        </Container>
    )
}
export default CheckoutContainer