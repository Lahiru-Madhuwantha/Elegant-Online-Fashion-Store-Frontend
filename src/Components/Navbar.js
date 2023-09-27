import React from 'react';
import styled from 'styled-components';

function Navbar() {

    return (
        <Container>
          <Inner>
            <Logo>
              <img src="./elegantlogo.png" alt=""/>
            </Logo>
            <Logo1>
            <img src="./Text.png" alt=""/>
            </Logo1>
            <SearchBar>
              <input type="text" placeholder=' Search...'/>
              <SearchIcon>
                <img src="searchIcon.png" alt="" />
              </SearchIcon>
            </SearchBar>
            <SignInButton>Sign In</SignInButton>
            <RightContainer></RightContainer>
          </Inner>
        </Container>
    );

    
}

const Container = styled.div`
width: 100%;
height: 60px;
Background-color: #EDE51E;
display: flex;
align-items: center;
position: relative;
`;
const Inner = styled.div`
width: 100%;
display: flex;
align-items: center;
`;
const Logo = styled.div`
margin-left: 20px;
crusor: pointer;
  img {
    width: 100px;
    margin-top: 10px;
  }
`;
const SearchBar = styled.div`
height: 35px;
flex: 1;
margin:0px 300px 0px 90px;
display: flex;
align-items: center;

input{
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px 0px 0px 5px;
}
`;
const RightContainer = styled.div``;
const SearchIcon  = styled.div`
background-color: red;
height:100%;
width:40px;
display: flex;
align-items: center;
justify-content: center;

img {
  width:22px;
}
`;

const SignInButton = styled.button`
width: 5%;
height: 35px;
background-color: red;
border: none;
otline: none;
border-radius: 12px;
margin: 0px 200px 0px 0px;


`;

const Logo1 = styled.div`
margin-left: 50px;
crusor: pointer;
  img {
    width: 200px;
    margin-top: 0px;
  }
`;
export default Navbar;