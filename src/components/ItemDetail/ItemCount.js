import { useState } from "react";

const ItemCount = ({initial, stock, onAdd}) =>{
    
    const [count, setCount] = useState(initial);

    const increment = () =>{
        if(count < stock){
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if(count>0)
            setCount(count-1);
    }

    return (
        <div className="container border border-primary p-1" >
            <div className="container">
                <h2>
                    <button type="button" onClick={()=>decrement()} className="btn m-2">-</button>
                    <label> {count} </label>
                    <button type="button" onClick={()=>increment()}className="btn m-2">+</button>
                </h2>
                
            </div>
            <button onClick={()=>onAdd(count)} className="btn btn-primary">Agregar al Carrito</button>
        </div>
    )
}
export default ItemCount;