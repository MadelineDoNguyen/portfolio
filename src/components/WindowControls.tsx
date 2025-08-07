import React from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WindowControlsProps {
  backgroundColor: string;
  showUrl?: boolean;
  url?: string;
  title?: string;
}

const ControlsContainer = styled.div<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background-color: ${props => props.backgroundColor};
  border-bottom: 2px solid #29301B;
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #29301B;
  background-color: transparent;
`;

const ArrowContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.div`
  font-family: 'Jersey 10', 'Arial Black', sans-serif;
  font-size: 20px;
  color: #000000;
  text-align: center;
  flex: 0.75;
`;

const UrlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.85;
  margin: 0 12px;
`;

const UrlInput = styled.div`
  background-color: #FEFEFE;
  border: 1px solid #29301B;
  border-radius: 4px;
  padding: 2px 12px;
  font-family: 'Jersey 10', 'Arial Black', sans-serif;
  font-size: 20px;
  color: #000000;
  min-width: 300px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const WindowControls: React.FC<WindowControlsProps> = ({ backgroundColor, showUrl = false, url = "", title = "" }) => {
  return (
    <ControlsContainer backgroundColor={backgroundColor}>
      <Circle />
      <Circle />
      <Circle />
      <ArrowContainer>
        <ArrowIcon>
          <ChevronLeft size={16} color="#29301B" strokeWidth={3} />
        </ArrowIcon>
        <ArrowIcon>
          <ChevronRight size={16} color="#29301B" strokeWidth={3} />
        </ArrowIcon>
      </ArrowContainer>
      {title && <TitleText>{title}</TitleText>}
      {showUrl && (
        <UrlContainer>
          <UrlInput>{url}</UrlInput>
        </UrlContainer>
      )}
    </ControlsContainer>
  );
};

export default WindowControls; 