import React from 'react';
import styled from 'styled-components';
import { Linkedin, MailCheck, FileText } from 'lucide-react';

interface ContactButtonProps {
  icon: 'linkedin' | 'email' | 'resume';
  text: string;
  href: string;
}

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 16px;
  border: 1px solid #29301B;
  background-color: #FEFEFE;
  text-decoration: none;
  color: #000000;
  font-family: 'Jersey 10', 'Arial Black', sans-serif;
  font-size: 22px;
  transition: all 0.2s ease;
  border-radius: 4px;
  margin: 0 auto 12px auto;
  width: 250px;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 2px 2px 0px #29301B;
  }
  
  @media (max-width: 768px) {
    width: 200px;
    font-size: 18px;
    padding: 10px 14px;
  }
  
  @media (max-width: 480px) {
    width: 180px;
    font-size: 16px;
    padding: 8px 12px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactButton: React.FC<ContactButtonProps> = ({ icon, text, href }) => {
  const getIcon = () => {
    const iconProps = {
      size: 24,
      strokeWidth: 1.5,
      color: '#29301B',
      fill: '#F9CFD9'
    };

    switch (icon) {
      case 'linkedin':
        return <Linkedin {...iconProps} />;
      case 'email':
        return <MailCheck {...iconProps} />;
      case 'resume':
        return <FileText {...iconProps} />;
      default:
        return <MailCheck {...iconProps} />;
    }
  };

  return (
    <Button href={href} target="_blank" rel="noopener noreferrer">
      <IconWrapper>
        {getIcon()}
      </IconWrapper>
      {text}
    </Button>
  );
};

export default ContactButton; 