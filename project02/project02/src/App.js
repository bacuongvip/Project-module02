import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Page from './page/Page';
import NotFound from './page/NotFound';
import Detail from './page/Detail';
import Apple from './category/Apple';
import Laptop from './category/Laptop';
import Screen from './category/Screen';
import Case from './category/Case';
import Cart from './cart/Cart';
import { useState } from 'react';
import Payment from './page/Payment';
import Success from './page/Success';

function App() {
    const [show, setShow] = useState(false);
    const [update, setUpdate] = useState(0);
    return (<>
        <Header show={show} setShow={setShow}/>

        <Routes>
          <Route path='/' element={<Page/>} />
          <Route path='/apple' element={<Apple  setUpdate={setUpdate}/>} />
          <Route path='/case' element={<Case  setUpdate={setUpdate}/>} />
          <Route path='/laptops' element={<Laptop  setUpdate={setUpdate}/>} />
          <Route path='/screen' element={<Screen  setUpdate={setUpdate}/>} />
          <Route path='/apple/:id' element={<Detail show={show} setShow={setShow} setUpdate={setUpdate}/>} />
          <Route path='/case/:id' element={<Detail show={show} setShow={setShow} setUpdate={setUpdate}/>} />
          <Route path='/laptops/:id' element={<Detail show={show} setShow={setShow} setUpdate={setUpdate}/>} />
          <Route path='/screen/:id' element={<Detail show={show} setShow={setShow} setUpdate={setUpdate}/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/success' element={<Success/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>

        <Footer/>
        <Cart show={show} setShow={setShow} setUpdate={setUpdate}/>
        </>
    );
}

export default App;
