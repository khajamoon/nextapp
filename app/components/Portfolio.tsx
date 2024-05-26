import React from 'react';
import styled from 'styled-components';

const PortfolioSection = styled.section`
  padding: 5rem 2rem;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const Projects = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Project = styled.div`
  width: 30%;
  margin-bottom: 2rem;
`;

const ProjectImage = styled.img`
  width: 80%;
  border-radius: 10px;
`;

const ProjectTitle = styled.h3`
  text-align: center;
  margin-top: 1rem;
`;

const Portfolio: React.FC = () => {
    return (
        <>
            <PortfolioSection>
                <Title>My Amazing Works</Title>
                <Projects>
                    <Project>
                        <ProjectImage src="./project1.jpeg" alt="Project 1" />
                        <ProjectTitle>Project 1</ProjectTitle>
                    </Project>
                    <Project>
                        <ProjectImage src="./project1.jpeg" alt="Project 2" />
                        <ProjectTitle>Project 2</ProjectTitle>
                    </Project>
                    <Project>
                        <ProjectImage src="./project1.jpeg" alt="Project 3" />
                        <ProjectTitle>Project 3</ProjectTitle>
                    </Project>
                </Projects>
            </PortfolioSection>

            
           
        </>
    );
};

export default Portfolio;


