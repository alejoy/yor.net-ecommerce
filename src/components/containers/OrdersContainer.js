import { Container, Row, Col } from "react-bootstrap";
import { db } from "../../services/firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Loading from "../elements/Loading";
import { Link, useParams } from "react-router-dom";
import CheckoutList from "../checkout/CheckoutList";

const OrdersContainer = () => {
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        setLoading(true);
        const ordersRef = collection(db, 'orders');
        getDocs(ordersRef)
        .then((response)=>{
            const ordersAdapted = response.docs.map(doc => {
                const data = doc.data();
                return {id: doc.id, ...data}
            })
            setOrders(ordersAdapted);
        }).catch(error=>console.log(error))
        .finally(()=>setLoading(false))

    },[])
    if(id===undefined)
        return (
            <Container>
                <h3>Orders</h3>
                <Row>
                    <Col className="fw-bold">Id</Col>
                    <Col className="fw-bold">Cliente</Col>
                    <Col className="fw-bold">Fecha</Col>
                    <Col className="fw-bold">Total</Col>
                </Row>
                {loading?<Loading/>:
                orders?.map((order)=>{
                    return <Row key={order.id}>
                        <Col><Link to={"/orders/"+order.id}>{order.id}</Link></Col>
                        <Col>{order?.buyer?.name} {order?.buyer?.lname}</Col>
                        <Col>{order?.date}</Col>
                        <Col>${order?.total.toFixed(2)} USD</Col>
                        <hr/>
                    </Row>
                })}
            </Container>
        )
    else
        return (
            <CheckoutList cartList = {orders.items}/>
        )
}
export default OrdersContainer