import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const handlePayment = (event) =>{
    navigate('/')
  }
  return (
    <Container>
      <FormContainer onSubmit={handlePayment}>
        <h3>Payment Details</h3>

        <InputContainer>
          <p>Name</p>
          <input
            type="text"
            // onChange={(e) => setName(e.target.value)}
            // value={name}
          />
        </InputContainer>
        {/* Image input */}
        <InputContainer>
          {/* <p>Image</p>
          <input
            type="file"  // Corrected type to "file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}  
            
          /> */}
        </InputContainer>
        <InputContainer>
          <p>Address</p>
          <input
            type="text"
            // onChange={(e) => setPrice(e.target.value)}
            // value={price}
          />
        </InputContainer>
        <InputContainer>
          <p>Quantity</p>
          { <input
            type="number"
            // onChange={(e) => setRating(e.target.value)}
            // value={rating}
          /> }
        </InputContainer>
        <InputContainer>
          <p>Total Amount</p>
          { <input
            type="number"
          /> }
        </InputContainer>
        <InputContainer>
          <p>Card Number</p>
          { <input
            type="number"
          /> }
        </InputContainer>
        <InputContainer>
          <p>Card Holder Name</p>
          { <input
            type="text"
          /> }
        </InputContainer>
        <Button >Pay</Button>
        <Button onClick={handlePayment}>Cansel Order</Button>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-width: 450px;
  height: 100vh;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  background-repeat: no-repeat;
`;


const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 600px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: white;
  opacity: 0.7;
  border-radius: 30px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;

    margin-bottom: 0px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 0px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;

const Button = styled.button`
  width: 70%;
  height: 35px;
  background-color: orange;
  opacity: 1;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

export default Payment;