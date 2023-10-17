// import axios from "axios";
// import React,{useEffect,useState} from "react";
// import styled from "styled-components";
// import { useStateValue } from "../StateProvider";

// function Order(){
//   return(
//     <Container>
          
//     <FormContainer>
//       <h3>Welcome To Elegant! Please Sign In</h3>
//       <InptContainer>
//         <p> Email</p>
//         <input type="email"
//         placeholder='example@gmail.com'
//         name='email' onChange={e=> setValue({...value,email : e.target.value})}
//         autoComplete="email"/>
//       </InptContainer>
//       <InptContainer >
//         <p>Password</p>
//         <input type="password"
//         placeholder='********'
//         name='password' onChange={e=> setValue({...value,password : e.target.value})}
//         autoComplete="email"/>
//       </InptContainer>
//       <LoginButton type>Continue</LoginButton>
//       <InfoText>
//         ___________________________________________________________________New to Elegant_______________________________________________________________
//       </InfoText>
//       <SignUpButton>Create New Account</SignUpButton>
//       <InfoText>
//       By continuing an account, you agree to Elegant’s <span>Terms & Conditions</span> and <span>Privacy Policy</span>.
//       </InfoText>
//     </FormContainer>
//     <FormContainer1>
//     <Logo>
//       <img src="./elegantlogo.png" alt=""/>
//     </Logo>
//     </FormContainer1>
   

//   </Container>
// );
// }

// const Container = styled.div`
// width: 100%;
// min-width: 400px;
// height: 100vh;
// display: flex;
// flex-direction: column;
// align-items: center;
// padding: 0px;
// background-image: url('/login.jpg');
// background-size: cover;
// background-repeat: no-repeat;
// `;

// const Logo = styled.div`
// width: 100px;
// margin-bottom: 0px;
// img(
// width: 50%;
// )
// `;

// const FormContainer = styled.form`
// border: 1px solid lightgray;
// width: 50%;
// height: 500px;
// display: flex;
// flex-direction: column;
// align-items: center;
// padding: 10px;
// background-color: white;
// opacity: 0.6;
// border-radius: 30px;
// margin-top: 30px;


// h3{
// font-size: 20px;
// font-weight: 700;
// line-height: 33px;
// align-self: flex-start;
// margin-bottom: 10px;
// margin-left: 10px;

// }
// `;
