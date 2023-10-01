import Item from "./Item";

const ItemList = ({items, category}) => {
    return(
        <>
            <h1>{category}</h1>
            <div className="d-flex flex-wrap container.xl">
                {items.map(item =><Item key={item.id} item = {item}/>)}
            </div>
        </>
        
    )
}
export default ItemList;