// import React from 'react';
// import styled from 'styled-components';
// import Navbar from './Navbar';


// function Home() {
//   return (
//     <Container>
//       <Navbar/>
//       <h1>Lahir</h1>
//     </Container>
//   );
// }
// const Container = styled.div``;

// export default Home;

import React from "react";
import styled from 'styled-components';
import Navbar from './Navbar';

function Home() {
  return(
    <Container>
      <Navbar/>
      <Banner1>
              <Banner1Text>
              “Unleash her inner charm with our latest sunglass collection
              tailored exclusively for girls. From vibrant shades to adorable
              designs, these sunglasses are the ultimate style companion for
              every little fashionista”

                <Banner1Button>
                  SHOP NOW
                </Banner1Button> 
              </Banner1Text>
              <BannerLogo>
                <img src="./Banner1.png" alt=""/>
              </BannerLogo>           
        </Banner1>
    </Container>
  );
}

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
padding: 0px;
`;

//Banner 1
const Banner1 = styled.div`
width: 100%;
height: 270px;
background: linear-gradient(to right, White,#E91E63);
display: flex;
align-items: center;
position: relative;
margin-top: 0px;
`;
const Banner1Text = styled.div`
font-size: 28px;
font-weight: 600;
color: #607D8B; 
font-family: Judson;
width: 100%;
word-wrap: break-word;
word-break: normal;
margin: 50px 150px 90px 200px;

alignment: center;
`;

const Banner1Button = styled.button`
width: 15%;
height: 35px;
display: flex;
align-items: center;
justify-content: center;
background-color: red;
border: none;
otline: none;
border-radius: 12px;
color: white;
font-size: 15px;

`;
const BannerLogo = styled.div`
margin-right: 0px;
crusor: pointer;
  img {
    width: 411px;
    margin-Button: 0px;
  }
`;

export default Home;