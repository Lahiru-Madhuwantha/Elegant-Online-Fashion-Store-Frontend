import React from "react";
import styled from "styled-components";
import {Rating} from '@mui/material';
import { useStateValue } from "../StateProvider";
import { useNavigate } from 'react-router-dom';

//import { useState } from 'react';
 function CardAD({  key,image, name ,price, rating }) {
  
  return (
    <Container>
      
      <Image>
      <img src={image} alt="image" width={100} height={70} />


      </Image>
      <Description>
        <h5>{name}</h5>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
        <p>Rs {price}</p>

        { <button >Update</button> }
        {<button>Delete</button>}
      </Description>
    </Container>
  );
  }

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
`;
const Image = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 180px;
    height: 200px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;

  h5 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }

  button {
    width: 100%;
    height: 33px;
    background-color: lightblue;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 10px;
  }
`;
export default CardAD;