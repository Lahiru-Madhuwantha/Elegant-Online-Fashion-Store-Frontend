import React , { useState } from 'react';
import styled from 'styled-components';
//import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
  const navigate = useNavigate();
  const handleSignUp = (event) =>{
    navigate('/signUp')
  }
  ////////////////////////////////////
    const [value, setValue] = useState({
      email: '',
      password: ''
    });
  
    const [error, setError] = useState(null);
    //const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:3005/api/v1/buyer/login', value);
  
        if (response.status === 200) {
          console.log('User logged in successfully');
          localStorage.setItem('authToken', response.data.token);

          if (response.data.role === 'admin') {
            navigate('/admin');
          } else {
            navigate('/');
          }
        
        }
      } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError('An error occurred');
        }
      }
    };
  
  
  //////////////////////////////////
    return (
        <Container>
          
          <FormContainer onSubmit={handleSubmit}>
            <h3>Welcome To Elegant! Please Sign In</h3>
            <InptContainer>
              <p> Email</p>
              <input type="email"
              placeholder='example@gmail.com'
              name='email' onChange={e=> setValue({...value,email : e.target.value})}
              autoComplete="email"/>
            </InptContainer>
            <InptContainer >
              <p>Password</p>
              <input type="password"
              placeholder='********'
              name='password' onChange={e=> setValue({...value,password : e.target.value})}
              autoComplete="email"/>
            </InptContainer>
            <LoginButton type='submit'>Continue</LoginButton>
            <InfoText>
              ___________________________________________________________________New to Elegant_______________________________________________________________
            </InfoText>
            <SignUpButton onClick={handleSignUp}>Create New Account</SignUpButton>
            <InfoText>
            By continuing an account, you agree to Elegant’s <span>Terms & Conditions</span> and <span>Privacy Policy</span>.
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
height: 500px;
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
  margin-bottom: 10px;
  margin-left: 10px;

}
`;

const InptContainer = styled.div`
width: 100%;
padding: 10px;
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
  margin-top: 5px;

  &:focus{
    otline: none;
  }

  &:hover{
   border: 1px solid purple;
  }

}
`;

const LoginButton = styled.button`
width: 70%;
height: 35px;
background-color: yellow;
border: none;
otline: none;
border-radius: 12px;
margin-top: 20px;

`;

const SignUpButton = styled.button`
width: 70%;
height: 35px;
background-color: red;
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
margin-top: 20px;
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

  
export default Login;