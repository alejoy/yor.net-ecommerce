import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../elements/Loading"
import { getDoc, doc} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { Alert } from "react-bootstrap";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(()=>{
        setLoading(true);
        const docRef = doc(db, 'items', id);
        getDoc(docRef)
        .then((doc)=>{
            const data = doc.data();
            const docAdapted = {id: doc.id, ...data};
            setItem(docAdapted);
        }).catch(error=> {
            console.log(error);
        }).finally(()=>setLoading(false))
    },[id])

   return (
        <div className="container w-100">
            {Object.keys(item).length===1?<Alert variant={"danger"}>No se encontró el producto</Alert>:
            <>
            {loading?<Loading/>:
                <ItemDetail item={item} />}
            </>
            }
        </div>
        
    )
}

export default ItemDetailContainer;