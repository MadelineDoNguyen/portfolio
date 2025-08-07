import React from 'react';
import styled from 'styled-components';
import DesktopTab from '../components/DesktopTab';
import ContactButton from '../components/ContactButton';

const HomeContainer = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 5px;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  max-width: 1000px;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    gap: 30px;
  }
`;

const AboutMeContent = styled.div`
  h1 {
    font-family: 'DM Serif Display', serif;
    font-size: 42px;
    margin-bottom: 24px;
    color: #000000;
    
    @media (max-width: 768px) {
      font-size: 32px;
    }
    
    @media (max-width: 480px) {
      font-size: 28px;
    }
  }

  p {
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;
    line-height: 1.6;
    margin-bottom: 16px;
    color: #000000;
    
    @media (max-width: 768px) {
      font-size: 18px;
    }
    
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100% - 60px);
  gap: 8px;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <TabsContainer>
        {/* Let's Connect Tab - positioned to the left and underneath */}
        <DesktopTab
          title="lets-connect"
          backgroundColor="#D3D977"
          zIndex={1}
          transform="translate(10px, 130px)"
          minWidth="350px"
          maxWidth="350px"
          minHeight="350px"
          maxHeight="350px"
        >
          <ContactContent>
            <ContactButton
              icon="linkedin"
              text="LinkedIn"
              href="https://www.linkedin.com/in/madeline-n/"
            />
            <ContactButton
              icon="email"
              text="Email"
              href="mailto:madelinedonguyen1@gmail.com"
            />
            <ContactButton
              icon="resume"
              text="Resume"
              href="/MN_Resume.pdf"
            />
          </ContactContent>
        </DesktopTab>

        {/* About Me Tab - positioned to the right and on top */}
        <DesktopTab
          title=""
          backgroundColor="#F9CFD9"
          zIndex={2}
          transform="translate(-20px, -20px)"
          minWidth="50px"
          maxWidth="600px"
          minHeight="550px"
          maxHeight="600px"
          showUrl={true}
          url="https://www.about.me"
        >
          <AboutMeContent>
            <h1>Hi, I'm Madeline</h1>
            <p>
            I am a recent graduate from UC San Diego with a degree in Cognitive Science, 
            specializing in Design and Interaction, where I explored the intersection of 
            psychology, design, and technology.
            </p>
            <p>
            I'm currently looking to grow as a UI/UX designer by broadening 
            my skills in graphic design. 
            </p>
            <p>
            Outside of work, you'll find me practicing yoga, exploring new food spots, 
            or getting creative with nail designs!
            </p>
          </AboutMeContent>
        </DesktopTab>
      </TabsContainer>
    </HomeContainer>
  );
};

export default Home; 