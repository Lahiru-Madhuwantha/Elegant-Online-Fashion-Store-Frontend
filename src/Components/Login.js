import React from 'react';
import styled from 'styled-components';

function Login() {
    return (
        <Container>
          <Logo>
            <img src="./elegantlogo.png" alt=""/>
          </Logo>

          <FormContainer>
            <h3>sign In</h3>
          </FormContainer>
        </Container>
    );
}

const Container = styled.div`
  width: 100%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  `;
const Logo = styled.div`
  width: 120px;

  img(
    width: 100%;
  )
  `;

const FormContainer = styled.form``;
  
export default Login;