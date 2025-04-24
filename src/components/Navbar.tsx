import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a73e8;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ active: boolean }>`
  color: ${props => props.active ? '#1a73e8' : '#333'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  position: relative;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: #1a73e8;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Publications', path: '/publications' },
    { name: 'Life', path: '/life' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo to="/">Zeyu LI</Logo>
        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              active={location.pathname === item.path}
            >
              {item.name}
            </NavLink>
          ))}
        </NavLinks>
        <MobileMenuButton>☰</MobileMenuButton>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 