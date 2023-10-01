import { Col, Row } from "react-bootstrap"

const CheckoutItem = ({checkoutItem}) => {
    return (
        <Row>
            <Col className="fw-bold">{checkoutItem.title}</Col>
            <Col className="fw-bold">Cantidad: {checkoutItem.count}</Col>
            <Col className="fw-bold">${checkoutItem.price.toFixed(2)}</Col>
        </Row>
    )
}

export default CheckoutItem