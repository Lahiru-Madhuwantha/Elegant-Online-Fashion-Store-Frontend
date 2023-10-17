import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';


function SignUp() {
  const [value, setValue] = React.useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const navigate = useNavigate();
  const handleSubmit = (event) =>{
   event.preventDefault();
    axios.post('http://localhost:3005/api/v1/buyer',value)
    .then(res=> {
      console.log(res.status);
      if(res.status === 201){
        console.log('User registered successfully');
        navigate('/login')
      }else if(res.status === 400 && res.data.message === 'User already exists'){
        alert('User already exists');  
      }
      else
      {
        alert('An error occured');
      }
    })
    .catch((err) => console.log(err));
  }
    return (
        <Container>
          
          <FormContainer onSubmit={handleSubmit}>
            <h3>Create Account</h3>
            <InputContainer>
              <p>Your Name</p>
              <input type="text"
              placeholder='First and Last Name'
              name='name' onChange={e=> setValue({...value,name : e.target.value})}
              autoComplete="name"
              />
            </InputContainer>
            <InputContainer>
              <p>Email</p>
              <input type="email"
              placeholder='example@gmail.com'
              name='email' onChange={e=> setValue({...value,email : e.target.value})}
              autoComplete="email"
              />
            </InputContainer>
            <InputContainer>
              <p>Phone Number</p>
              <input type="phone"
              placeholder='+xx xx xxx xxxx'
              name='phone' onChange={e=> setValue({...value,phone : e.target.value})}
              autoComplete="phone"
              />
            </InputContainer>
            <InputContainer>
              <p>Enter Password</p>
              <input type="password"
              placeholder='********'
              name='password' onChange={e=> setValue({...value,password : e.target.value})}
              />
            </InputContainer>
            <SignUpButton type='submit'>Continue</SignUpButton>
            <InfoText>
            By creating an account, you agree to Elegant’s 
            <span>Terms & Conditions</span> and 
            <span>Privacy Policy</span>.
            </InfoText>
            <InfoText>
            Already You Have Elegant Account? <Link to="/login">Sign In</Link>
            </InfoText>
          </FormContainer>
          <FormContainer1>
          <Logo>
            <img src="./elegantlogo.png" alt=""/>
          </Logo>
          </FormContainer1>
         

        </Container>
    );
}
const Container = styled.div`
  width: 100%;
  min-width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  background-image: url('/login.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  `;
  
const Logo = styled.div`
  width: 100px;
  margin-bottom: 0px;
  img(
    width: 50%;
  )
  `;

const FormContainer = styled.form`
border: 1px solid lightgray;
width: 50%;
height: 600px;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
background-color: white;
opacity: 0.6;
border-radius: 30px;
margin-top: 30px;


h3{
  font-size: 20px;
  font-weight: 700;
  line-height: 33px;
  align-self: flex-start;
  margin-bottom: 5px;
  margin-left: 10px;

}
`;

const InputContainer = styled.div`
width: 100%;
padding: 5px;
margin-left: 20px;


p{
  font-size: 14px;
  font-weight: 600;
}
input{
  width: 95%;
  height: 33px;
  padding-left: 5px;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin-top: 2px;

  &:focus{
    otline: none;
  }

  &:hover{
   border: 1px solid purple;
  }

}
`;

const SignUpButton = styled.button`
width: 70%;
height: 35px;
background-color: yellow;
border: none;
otline: none;
border-radius: 12px;
margin-top: 20px;

`;



const InfoText = styled.p`
font-size: 12px;
font-weight: 600;
width: 100%;
word-wrap: normal;
word-break: normal;
margin-top: 10px;
margin-left: 20px;
alignment: center;


span{
  color: blue;
}
`;

const FormContainer1 = styled.form`
border: 1px solid lightgray;
width: 100%;
height: 80px;
display: flex;
flex-direction: row;
align-items: center;
padding: 20px;
background-color: white;
margin-top: 60px;


`;
export default SignUp;