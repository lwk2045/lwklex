'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c5364;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(45deg, #2c5364, #203a43);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #2c5364;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  font-size: 1.1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #FFD700, #FFA500);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #203a43;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  color: #2c5364;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: white;
  padding: 6rem 2rem 2rem;
  z-index: 1000;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const MobileNavLink = styled(Link)`
  color: #2c5364;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(44, 83, 100, 0.1);
  transition: color 0.3s ease;

  &:hover {
    color: #FFD700;
  }
`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav style={{ 
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'
    }}>
      <NavContainer>
        <Logo href="/">
          법무사 사무소
        </Logo>
        <NavLinks>
          <NavLink href="/about">소개</NavLink>
          <NavLink href="/services">서비스</NavLink>
          <NavLink href="/cases">사례</NavLink>
          <NavLink href="/contact">문의하기</NavLink>
        </NavLinks>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </MobileMenuButton>
      </NavContainer>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>
              소개
            </MobileNavLink>
            <MobileNavLink href="/services" onClick={() => setIsMobileMenuOpen(false)}>
              서비스
            </MobileNavLink>
            <MobileNavLink href="/cases" onClick={() => setIsMobileMenuOpen(false)}>
              사례
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              문의하기
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
} 