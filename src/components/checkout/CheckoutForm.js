import { useState } from "react"
import { Alert, Form } from "react-bootstrap"

const CheckoutForm = ({user, setUser}) => {
    const [tempEmail, setTempEmail] = useState("");
    const [tempEmail2, setTempEmail2] = useState(""); //Para control interno del Alert

    const setName = (e) => {
        setUser({...user,name:e.target.value})
    }
    const setLName = (e) => {
        setUser({...user,lname:e.target.value})
    }
    const tEmail = (e) => {
        setTempEmail(e.target.value);
        
    }
    const setEmail = (e) => {
        
        if(tempEmail===e.target.value){
            setUser({...user,email:e.target.value})
        }
        else{
            setUser({...user,email:""})
        }
        setTempEmail2(e.target.value)
    }
    const setPhone = (e) => {
        setUser({...user,phone:e.target.value})
    }
    return (
        <>
            <h3>Datos de cliente</h3>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" value={user.name} onChange={(e)=>setName(e)}/>
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" value={user.lname} onChange={(e)=>setLName(e)}/>
            <Form.Label>E-Mail</Form.Label>
            <Form.Control type="text" value={tempEmail} onChange={(e)=>tEmail(e)}/>
            <Form.Label>Confirmar E-Mail</Form.Label>
            {user.email===""?<Alert variant={"danger"}>Los correos no coinciden</Alert>:""}
            <Form.Control type="text" value={tempEmail2} onChange={(e)=>setEmail(e)}/>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="text" value={user.phone} onChange={(e)=>setPhone(e)}/>
        </>
    )
}
export default CheckoutForm