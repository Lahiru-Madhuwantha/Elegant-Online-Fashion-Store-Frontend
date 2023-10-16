import React from "react";
import styled from "styled-components";
import Rating from '@mui/material/Rating';
import { useStateValue } from "../StateProvider";


function Card({basket,setBasket,image,price,rating,title}){
    const addToBasket = () =>{
        setBasket([...basket,{image,price,rating,title}]);
    };
    return(
        <Container>
            <Image>
                <img src={image}alt=""/>
            </Image>
            <Discription>
                <h5>{title}</h5>
                <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                <p>{price}</p>
                <button onClick={addToBasket}>Add to Cart</button>
            </Discription>

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
flex:0.3;
img{
    width: 180px;
    height: 150px;
    
}
`;

 
const Discription = styled.div`
width: 90%;
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
flex:0.4;

h5{
    font-size: 16px;
    font-weight: 600;
}
p{
    font-weight: 600;
    color: red;
}
button{
    width: 100%;
    height: 32px;
    background-color: #FFC107;
    border: none;
    border-radius: 10px;
    crusor: pointer;
}
`;

export default Card;