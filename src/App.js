//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/Main/ItemListContainer';
import Form from './components/Form/Form';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';
// import Main from './components/Main/Main';


const App = () => {

  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path='/' element={
            <ItemListContainer saludo="Bienvenidos a Erased, el mejor sitio para vos." />} />

          <Route path='/categoria/:categoryName' element={<ItemListContainer />} />

          <Route path='/detail/:idProd' element={
            <ItemDetailContainer />} />

          <Route path='/cart' element={
            <Cart />} />

          <Route path='/checkout' element={
            <Form />} />

        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>

  );
};


export default App;

