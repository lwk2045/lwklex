'use client';

import Link from 'next/link';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const FooterLink = styled(Link)`
  color: #cccccc;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const FooterText = styled.p`
  color: #cccccc;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  color: #cccccc;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 3rem;
  margin-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #888888;
  font-size: 0.9rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>법무사 사무소</FooterTitle>
          <FooterText>
            전문적인 법률 서비스로 여러분의 권리를 보호합니다.
            신속하고 정확한 법률 상담을 제공합니다.
          </FooterText>
          <SocialLinks>
            <SocialLink
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </SocialLink>
            <SocialLink
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </SocialLink>
            <SocialLink
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
              </svg>
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>바로가기</FooterTitle>
          <FooterLink href="/about">소개</FooterLink>
          <FooterLink href="/services">서비스</FooterLink>
          <FooterLink href="/cases">사례</FooterLink>
          <FooterLink href="/contact">문의하기</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>연락처</FooterTitle>
          <FooterText>
            서울특별시 강남구 테헤란로 123<br />
            법무사 사무소 빌딩 5층
          </FooterText>
          <FooterText>
            Tel: 02-123-4567<br />
            Email: info@lawfirm.com
          </FooterText>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} 법무사 사무소. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
} 