import React from 'react';
import styled from 'styled-components';
import WindowControls from './WindowControls';

interface DesktopTabProps {
  title: string;
  children: React.ReactNode;
  backgroundColor: string;
  backgroundGradient?: string;
  zIndex?: number;
  transform?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  showUrl?: boolean;
  url?: string;
  noPadding?: boolean;
}

const TabContainer = styled.div<{ 
  zIndex: number; 
  transform: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  backgroundGradient?: string;
}>`
  position: relative;
  background: ${props => props.backgroundGradient || '#FEFEFE'};
  border: 2px solid #29301B;
  border-radius: 2%;
  box-shadow: 3px 3px 0px #29301B;
  z-index: ${props => props.zIndex};
  transform: ${props => props.transform};
  min-width: ${props => props.minWidth || '300px'};
  max-width: ${props => props.maxWidth || '500px'};
  width: ${props => props.width || 'auto'};
  min-height: ${props => props.minHeight || 'auto'};
  max-height: ${props => props.maxHeight || 'none'};
  height: ${props => props.height || 'auto'};
  overflow: hidden;
  animation: slideUp 1.2s ease-out 0.4s both;
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: ${props => props.transform} translateY(50px);
    }
    to {
      opacity: 1;
      transform: ${props => props.transform} translateY(0);
    }
  }
`;

const TabContent = styled.div<{ noPadding?: boolean }>`
  padding: ${props => props.noPadding ? '0' : '24px 40px'};
`;

const DesktopTab: React.FC<DesktopTabProps> = ({ 
  title, 
  children, 
  backgroundColor, 
  backgroundGradient,
  zIndex = 1, 
  transform = 'translate(0, 0)',
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  showUrl = false,
  url = "",
  noPadding = false
}) => {
  return (
    <TabContainer 
      zIndex={zIndex} 
      transform={transform}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      height={height}
      minHeight={minHeight}
      maxHeight={maxHeight}
      backgroundGradient={backgroundGradient}
    >
      <WindowControls 
        backgroundColor={backgroundColor} 
        showUrl={showUrl}
        url={url}
        title={title}
      />
      <TabContent noPadding={noPadding}>
        {children}
      </TabContent>
    </TabContainer>
  );
};

export default DesktopTab; 