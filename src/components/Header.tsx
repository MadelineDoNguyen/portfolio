import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    flex-direction: column;
    gap: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 12px;
    gap: 12px;
  }
`;

const Logo = styled(Link)`
  font-family: 'Jersey 10', 'Arial Black', sans-serif;
  font-weight: bold;
  font-size: 32px;
  text-decoration: none;
  color: #000000;
  letter-spacing: 0.05em;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 50px;
  
  @media (max-width: 768px) {
    gap: 30px;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const NavLink = styled(Link)`
  font-family: 'Jersey 10', 'Arial Black', sans-serif;
  font-weight: bold;
  font-size: 32px;
  text-decoration: none;
  color: #000000;
  letter-spacing: 0.05em;
  transition: color 0.2s ease;

  &:hover {
    color: #F9CFD9;
  }
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo to="/about-me">madeline nguyen</Logo>
      <Navigation>
        <NavLink to="/about-me">about me</NavLink>
        <NavLink to="/work">work</NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header; 