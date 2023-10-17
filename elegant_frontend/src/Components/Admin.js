import React from "react";
import styled from 'styled-components';
import Navbar from './Navbar';
import Card from "./Card";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Login from "./Login";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState("");
  const navigate = useNavigate();
  const handleAdd = (event) =>{
    navigate('/product')}
  //const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const headers = authToken ? { 'x-access-token': authToken } : {};

        const response = await axios.get('http://localhost:3005/api/v1/product/all',{headers}); // Replace 'yourProductId' with the actual ID
        //console.log(response.data);
        setProducts([response.data]);
      } catch (error) {
        //console.error('Error fetching product:', error.message);
      }
    };
  
    fetchData();
  }, []);

  return (
    <Container>
      <Navbar />

      <Line>
          <AddButton onClick={handleAdd}>Add Product</AddButton>
      </Line>
      
      <Main>
        
        {products && products.map((product) =>(
        <Card
        key={product._id}
        image={product.image}
        price={product.price}
        rating={product.rating}
        name={product.name}
        
      />
        ))}
      </Main>
    </Container>
  );
}

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
padding: 0px;
background-color: rgb(234,237,237);
`;

const Line = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
padding: 0px;
`;


const BannerLogo = styled.div`
margin-right: 0px;
crusor: pointer;
  img {
    width: 411px;
    margin-Button: 0px;
  }
  
`;
const Main = styled.div`
display: grid;
justify-content: center;
place-items: center;
width: 100%;
margin-top: 20px;
margin-bottom: 20px;

grid-auto-rows: 420px;
grid-template-columns : repeat(4,300px);
grid-gap: 20px;

`;

const AddButton = styled.button`
width: 20%;
height: 35px;
background-color: purple;
border: none;
otline: none;
border-radius: 12px;
margin-top: 20px;
margin-left: 20px;
`;

export default Home;