import React from 'react';
import styled from 'styled-components';
 
const FooterSection = styled.footer`
  text-align: center;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;
 
const FooterText = styled.p`
  color: #555;
`;
 
const Footer: React.FC = () => {
  return (
    <FooterSection>
      <FooterText>© 2024 khaja shaik. All rights reserved.</FooterText>
    </FooterSection>
  );
};
 
export default Footer;

