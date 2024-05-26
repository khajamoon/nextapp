import React from 'react';
import styled from 'styled-components';
 
const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem 2rem;
  background: linear-gradient(to right, #ff6347, #ff9478);
  color: #fff;
  border-radius:10px;
`;
 
const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;
 
const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;
 
const Button = styled.a`
  padding: 0.5rem 2rem;
  background-color: #fff;
  color: #ff6347;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
`;
 
const Hero: React.FC = () => {
  return (
    <HeroSection className='herosection' style={{overflow:"hidden"}}>

        <img style={{position:"absolute",height:"400px",width:"99%" ,borderRadius:"10px"}} src="./acRepair.jpeg" alt="" />
      <Title>Hello, I'm James Smith</Title>
      <Subtitle>A Creative Designer From New York</Subtitle>
      <Button href="#">About Me</Button>
    </HeroSection>
  );
};
 
export default Hero;


