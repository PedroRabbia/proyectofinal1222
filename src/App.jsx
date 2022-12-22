import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContainer } from './components/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';
import { Checkout } from './components/Checkout/Checkout';
import { Footer } from './components/Footer/Footer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavbarComp } from './components/Navbar/Navbar';
import { NoPage } from './components/NoPage/NoPage';

function App() {
  return (
      <BrowserRouter>
        <CartProvider>
          <NavbarComp/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<NoPage/>}/>
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </CartProvider>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;