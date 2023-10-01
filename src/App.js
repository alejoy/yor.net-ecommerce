import './App.css';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import ItemListContainer from './components/containers/ItemListContainer';
import CartContainer from './components/containers/CartContainer';
import CheckoutContainer from './components/containers/CheckoutContainer';
import OrdersContainer from './components/containers/OrdersContainer';
import OrderDetailContainer from './components/containers/OrderDetailContainer';
import NavBar from './components/elements/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
            <Routes>
              <Route exact path="/" element={<ItemListContainer greeting = "Bienvenidos a YOR.Net"/>} />
              <Route exact path="/category/:categoryid" element={<ItemListContainer greeting = "Bienvenidos a YOR.Net"/>} />
              <Route exact path="/item/:id" element={<ItemDetailContainer/>} />    
              <Route exact path="/cart" element={<CartContainer/>}/>  
              <Route exact path="/checkout" element={<CheckoutContainer/>}/>
              <Route exact path="/orders" element={<OrdersContainer/>}/>
              <Route exact path="/orders/:id" element={<OrderDetailContainer/>}/>
            </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;