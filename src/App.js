//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/Main/ItemListContainer';
import Cart from './components/Cart/Cart';
// import Main from './components/Main/Main';


const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={
          <ItemListContainer saludo="Bienvenidos a Erased, el mejor sitio para vos." />} />

        <Route path='/category/:categoryName' element={<ItemListContainer />}/>
        
        <Route path='/detail/:idProd' element={
          <ItemDetailContainer />} />

        <Route path='/cart' element={
          <Cart />} />

      </Routes>

      <Footer />

    </BrowserRouter>

  );
};


export default App;

