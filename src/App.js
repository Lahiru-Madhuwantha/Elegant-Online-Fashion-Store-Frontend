import React from 'react'; //1
//import Container from './path-to-Container-component';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';//2
import styled from 'styled-components';//3
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp/>} />
        </Routes>
      </Container>
    </Router>
  );//5 Page hadana widiya
}

const Container = styled.div`
  width: 100vw;
 `; //4

export default App;