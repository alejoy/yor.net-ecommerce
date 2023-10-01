import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../elements/Loading"
import { getDoc, doc} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { Alert, Col, Row } from "react-bootstrap";


const OrderDetailContainer = () => {
    const [loading,setLoading] = useState(false);
    const [order, setOrder] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        setLoading(true);
        const docRef = doc(db, 'orders', id);
        getDoc(docRef)
        .then((doc)=>{
            const data = doc.data();
            const docAdapted = {id: doc.id, ...data};
            setOrder(docAdapted);
        }).catch(error=> {
            console.log(error);
        }).finally(()=>setLoading(false))
    },[id])

    return(
        <>
            <h1>Orden {id}</h1>
            {console.log(Object.keys(order))}
            <hr/>
            {loading?<Loading/>:Object.keys(order).length>1?
            <Row>
                <Col className="border">
                    <Row>
                        <Col>
                            <p className="fw-bold">Fecha de la Orden:</p>
                            {order?.date}
                        </Col>
                        <Col>
                            <p className="fw-bold">Cliente:</p>
                            {order?.buyer?.name} {order?.buyer?.lname}
                        </Col>
                        <Col>
                            <p className="fw-bold">Total:</p>
                            ${order?.total.toFixed(2)} USD
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col className="fw-bold">Producto</Col>
                        <Col className="fw-bold">Cantidad</Col>
                        <Col className="fw-bold">Precio</Col>
                    </Row>
                    {order?.items?.map((item)=>{
                        return( 
                        <Row key={item.id}>
                            <Col>{item.title}</Col>
                            <Col>{item.count}</Col>
                            <Col>${item.price.toFixed(2)} USD</Col>
                            <hr/>
                        </Row>)
                    })}
                </Col>
            </Row>
            :<Alert variant = {"danger"}>No se econtró la orden</Alert>
            }
            <Link to = "/orders" className="btn btn-primary">Regresar a ordenes</Link>
        </>
    )
}

export default OrderDetailContainer