import React, { useState } from 'react';
import styled from 'styled-components';
import DesktopTab from '../components/DesktopTab';
import { Folder } from 'lucide-react';

const WorkContainer = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  position: relative;
  animation: slideUp 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 5px;
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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
  animation: slideUp 1s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ProjectFoldersContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 100px;
  padding: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
  
  @media (max-width: 480px) {
    gap: 30px;
    padding: 15px;
  }
`;

const FolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const FolderIcon = styled.div`
`;

const FolderName = styled.div`
  font-family: 'Jersey 10', 'Arial Black', sans-serif;
  font-size: 20px;
  color: #000000;
  text-align: center;
`;

const ErrorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
`;

const Error404 = styled.div`
  font-family: 'Jersey 10', 'Arial Black', sans-serif;
  font-size: 96px;
  color: #F9CFD9;
  text-shadow: 2px 2px 0px #29301B;
  margin-bottom: 2px;
`;

const ErrorTitle = styled.div`
  font-family: 'Jersey 10', 'Arial Black', sans-serif;
  font-size: 32px;
  color: #000000;
  margin-bottom: 12px;
`;

const ErrorInstructions = styled.div`
  font-family: 'Jersey 10', 'Arial Black', sans-serif;
  font-size: 20px;
  color: #000000;
  line-height: 1.4;
  max-width: 400px;
  animation: pulse 2s ease-in-out infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const ProjectShowcaseContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 0px;
  height: 700px;
  overflow-y: auto;
  overflow-x: hidden;
  background: linear-gradient(to bottom, #FCF3F8 0%, #FEFEFE 100%);
  position: relative;
  animation: slideUp 0.6s ease-out;
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #D3D977;
    border-radius: 4px;
    border: 1px solid #29301B;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #F9CFD9;
  }
`;

const ModoProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 0px;
  height: 700px;
  overflow-y: auto;
  overflow-x: hidden;
  background: #FEFEFE;
  position: relative;
  animation: slideUp 0.6s ease-out;
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #D3D977;
    border-radius: 4px;
    border: 1px solid #29301B;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #F9CFD9;
  }
`;

const ProjectTitle = styled.div`
  font-family: 'Jersey 10', 'Arial Black', sans-serif;
  font-size: 0px;
  color: #000000;
  text-align: center;
  margin-bottom: 0px;
`;

const GraphicDesign = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  flex-shrink: 0;
  max-height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 0;
  }
`;

const OverviewSection = styled.div`
  margin-bottom: 0px;
  padding: 0 40px;
  flex-shrink: 0;
  min-height: fit-content;
  margin-bottom: 20px;
  display: flex;
  gap: 40px;
  align-items: flex-start;
  min-height: 600px;
`;

const OverviewContent = styled.div`
  flex: 1;
`;

const OverviewTitle = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const OverviewText = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #000000;
  margin-bottom: 24px;
`;

const ProjectMockup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 300px;
  height: 100%;
  
  img {
    max-width: 100%;
    max-height: 400px;
    height: auto;
    border-radius: 8px;
    object-fit: contain;
  }
`;

const CenteredMockup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  margin: 20px 0;
  
  img {
    max-width: 100%;
    max-height: 300px;
    height: auto;
    border-radius: 8px;
    object-fit: contain;
  }
`;

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleFolderClick = (projectName: string) => {
    setSelectedProject(projectName);
  };

  const renderRightTabContent = () => {
    if (selectedProject === 'a happier me') {
      return (
        <ProjectShowcaseContent>
          <ProjectTitle></ProjectTitle>
          
          <GraphicDesign>
            <img src={`${process.env.PUBLIC_URL}/ahm-illustration.png`} alt="a happier me banner illustration" />
          </GraphicDesign>
          
          <OverviewSection>
            <OverviewContent>
              <OverviewTitle>Overview</OverviewTitle>
              <OverviewText>
                A Happier Me is a mobile app designed to provide a safe, culturally sensitive space 
                for Vietnamese youth to reflect on their mental health through guided journaling and 
                mindfulness. The project's goal was to encourage self-awareness and emotional expression 
                in a community where mental health is often stigmatized or overlooked.
              </OverviewText>
              <OverviewText>
              I contributed to the design process, including user research to ensure the experience was grounded 
              in real needs. I created low and high fidelity prototypes in Figma, and worked alongside developers 
              to bring the app to life in Flutter. I also maintained regular communication with stakeholders to 
              ensure the design aligned with the mission and vision of the organization.
              </OverviewText>
            </OverviewContent>
            <ProjectMockup>
              <img src={`${process.env.PUBLIC_URL}/ahm-mock.png`} alt="a happier me iPhone mockup" />
            </ProjectMockup>
          </OverviewSection>
        </ProjectShowcaseContent>
      );
    }

    if (selectedProject === 'modo') {
      return (
        <ModoProjectContent>
          <ProjectTitle></ProjectTitle>
          
          <GraphicDesign>
            <img src={`${process.env.PUBLIC_URL}/modo-illustration.png`} alt="modo banner illustration" />
          </GraphicDesign>
          
          <CenteredMockup>
            <img src={`${process.env.PUBLIC_URL}/modo-mockup.png`} alt="modo project mockup" />
          </CenteredMockup>
          
          <OverviewSection>
            <OverviewContent>
              <OverviewTitle>Overview</OverviewTitle>
              <OverviewText>
                Modo is a modern medication management system that combines a portable pill 
                case with a companion mobile app to streamline daily wellness routines. The pill case 
                magnetically attaches to the back of a phone via MagSafe, making it easy to carry 
                essential medications or vitamins on the go.
              </OverviewText>
              <OverviewText>
              Originally designed for older adults managing daily prescriptions, Modo evolved to
               support a broader, multigenerational audience. We focused on Gen Z and Millennials
                first, encouraging healthy habits through smart reminders and customizable
                 medicine cabinets.
              </OverviewText>
              <OverviewText>
              I worked alongside a team and led the UI/UX design and prototyping of the app and physical 
              product experience, while also considering long-term accessibility and user adoption across age groups.
              </OverviewText>
            </OverviewContent>
          </OverviewSection>
        </ModoProjectContent>
      );
    }

    return (
      <ErrorContent style={{ animation: 'slideUp 0.6s ease-out' }}>
        <Error404>404</Error404>
        <ErrorTitle>file not found</ErrorTitle>
        <ErrorInstructions>
          good news: my projects are stored in the tab 'my-work'
          <br />
          click on a folder to view my project
        </ErrorInstructions>
      </ErrorContent>
    );
  };

  return (
    <WorkContainer>
      <TabsContainer>
        {/* Project Folders Tab - positioned to the left */}
        <DesktopTab
          title="my-work"
          backgroundColor="#F9CFD9"
          zIndex={1}
          transform="translate(10px, -200px)"
          minWidth="380px"
          maxWidth="400px"
          minHeight="200px"
          maxHeight="250px"
        >
          <ProjectFoldersContent>
            <FolderContainer onClick={() => handleFolderClick('modo')}>
              <FolderIcon>
                <Folder size={58} color="#29301B" fill="#D3D977" strokeWidth={0.75} />
              </FolderIcon>
              <FolderName>modo</FolderName>
            </FolderContainer>
            <FolderContainer onClick={() => handleFolderClick('a happier me')}>
              <FolderIcon>
                <Folder size={58} color="#29301B" fill="#D3D977" strokeWidth={0.75} />
              </FolderIcon>
              <FolderName>a happier me</FolderName>
            </FolderContainer>
          </ProjectFoldersContent>
        </DesktopTab>

        {/* Project Showcase / 404 Error Tab - positioned to the right and overlapping */}
        <DesktopTab
          title=""
          backgroundColor="#D3D977"
          backgroundGradient="linear-gradient(to bottom, #FCF3F8 0%, #FEFEFE 100%)"
          zIndex={2}
          transform="translate(-20px, 80px)"
          minWidth="850px"
          maxWidth="900px"
          minHeight="600px"
          maxHeight="700px"
          showUrl={selectedProject === 'a happier me' || selectedProject === 'modo'}
          url={selectedProject === 'a happier me' ? "https://www.a-happier-me.com" : selectedProject === 'modo' ? "https://www.modo.com" : "https://www.page-not-found"}
          noPadding={selectedProject === 'a happier me' || selectedProject === 'modo'}
        >
          {renderRightTabContent()}
        </DesktopTab>
      </TabsContainer>
    </WorkContainer>
  );
};

export default Work; 