import React from 'react';
import styled from 'styled-components';
 
const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 5rem 2rem;
  background-color: #f9f9f9;
`;
 
const Feature = styled.div`
  text-align: center;
`;
 
const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
 
const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;
 
const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;
 
const Features: React.FC = () => {
  return (
    <FeaturesSection>
      <Feature>
        <FeatureIcon>🎨</FeatureIcon>
        <FeatureTitle>Pixel Perfect</FeatureTitle>
        <FeatureDescription>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</FeatureDescription>
      </Feature>
      <Feature>
        <FeatureIcon>🔧</FeatureIcon>
        <FeatureTitle>High Quality</FeatureTitle>
        <FeatureDescription>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</FeatureDescription>
      </Feature>
      <Feature>
        <FeatureIcon>💡</FeatureIcon>
        <FeatureTitle>Awesome Idea</FeatureTitle>
        <FeatureDescription>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</FeatureDescription>
      </Feature>
    </FeaturesSection>
  );
};
 
export default Features;
