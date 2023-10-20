import React,{ useState }from 'react'; //1
//import Container from './path-to-Container-component';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';//2
import styled from 'styled-components';//3
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Product from './Components/Product';
import Order from './Components/Order';
import Admin from './Components/Admin';
import Payment from './Components/payment';


function App() {
  const [basket,setBasket] = useState([]);
  console.log('basket >>>>',basket);
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home basket={basket} setBasket={setBasket}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/product" element={<Product/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/admin" element={<Admin/>}/> 
          <Route path='/payment'element={<Payment/>}/>
          
        </Routes>
      </Container>
    </Router>
  );//5 Page hadana widiya
}

const Container = styled.div`
  width: 100vw;
 `; //4

export default App;