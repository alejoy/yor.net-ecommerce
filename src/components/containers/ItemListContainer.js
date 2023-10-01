import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../elements/Loading";
import { getDocs, collection, query, where} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const {categoryid} = useParams();

    useEffect(()=>{
        
        setLoading(true);
        
        const collectionRef = categoryid?
        query(collection(db,'items'), where('categoryId', '==', categoryid))
        :collection(db,'items');
        console.log(categoryid)
        console.log(collectionRef)
        getDocs(collectionRef).then(response => {
            const itemsAdapted = response.docs.map(doc => {
                const data = doc.data();
                return {id: doc.id, ...data}
            })
            setItems(itemsAdapted);
        }).catch(error=>console.log(error))
        .finally(()=>setLoading(false));
    }, [categoryid])

    return (
        <>
            <h1>{greeting}</h1>
            <hr/>
            {loading?<Loading/>:
                <div className="d-flex">
                    <ItemList items = {items}/>
                </div>  
            }    
        </>
    )
}
export default ItemListContainer;