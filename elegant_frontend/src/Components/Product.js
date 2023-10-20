import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Product() {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  const navigate = useNavigate();
  const handleProduct = (event) =>{
    navigate('/')
  }
  const addProduct = async (e) => {
    e.preventDefault();

    
    try {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append('name', name);
      formData.append('image', image);
      formData.append('price', price);
      formData.append('rating', rating);
      formData.append('description', description);

      const response = await axios.post('http://localhost:3005/api/v1/product', formData);

      console.log('Product added successfully:', response.data);

      setName('');
      setImage(null);
      setPrice(0);
      setRating(0);
      setDescription('');
    } catch (error) {
      console.error('Error adding product:', error.message);
      alert('Error adding product. Please try again.');
    }
  };

  return (
    <Container>
      <FormContainer onSubmit={handleProduct}>
        <h3>Add Product</h3>

        <InputContainer>
          <p>Name</p>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </InputContainer>
        {/* Image input */}
        <InputContainer>
          <p>Image</p>
          <input
            type="file"  // Corrected type to "file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}  
            
          />
        </InputContainer>
        <InputContainer>
          <p>Price</p>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </InputContainer>
        <InputContainer>
          <p>Rating</p>
          <input
            type="number"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
        </InputContainer>
        <InputContainer>
          <p>Description</p>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </InputContainer>

        <Button onClick={(e)=>addProduct(e)}>Add Product</Button>
        <Button onClick={handleProduct}>Back</Button>
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
  background-image: url('/productPage.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

// const Logo = styled.div`
//   width: 200px;
//   margin-bottom: 0px;
//   img {
//     width: 100%;
//   }
// `;

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
  background-color: #009688;
  opacity: 1;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

export default Product;
