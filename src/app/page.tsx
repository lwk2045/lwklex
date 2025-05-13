'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
  color: white;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
`;

const Subtitle = styled(motion.p)`
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const CTAButton = styled(motion.button)`
  padding: 1.2rem 2.5rem;
  font-size: 1.3rem;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  color: #000;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 50%;
  filter: blur(60px);
`;

const Section = styled.section`
  padding: 120px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

const Card = styled(motion.div)`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 215, 0, 0.3);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #2c5364;
  font-weight: 600;
`;

const CardText = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
  color: #2c5364;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(45deg, #FFD700, #FFA500);
    border-radius: 2px;
  }
`;

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Floating shapes animation
    const shapes = document.querySelectorAll('.floating-shape');
    shapes.forEach((shape, index) => {
      gsap.to(shape, {
        y: 'random(-100, 100)',
        x: 'random(-100, 100)',
        duration: 'random(3, 5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2,
      });
    });
  }, []);

  return (
    <main>
      <HeroSection>
        <FloatingShape
          className="floating-shape"
          style={{
            width: '400px',
            height: '400px',
            top: '20%',
            left: '10%',
          }}
        />
        <FloatingShape
          className="floating-shape"
          style={{
            width: '300px',
            height: '300px',
            bottom: '20%',
            right: '10%',
          }}
        />
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            법무사 사무소
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            전문적인 법률 서비스로 여러분의 권리를 보호합니다
          </Subtitle>
          <CTAButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            무료 상담 신청하기
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <Section ref={ref}>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            주요 서비스
          </SectionTitle>
          <Grid>
            {[
              {
                title: '법률 상담',
                text: '전문 법무사가 여러분의 법적 문제를 해결해드립니다. 신속하고 정확한 상담으로 최적의 해결책을 제시합니다.',
              },
              {
                title: '소송 대리',
                text: '효율적이고 전문적인 소송 대리를 제공합니다. 승소율 높은 전략적 소송 진행으로 최상의 결과를 도출합니다.',
              },
              {
                title: '계약 검토',
                text: '계약서 검토 및 작성 서비스를 제공합니다. 법적 리스크를 최소화하고 당사자의 권리를 최대한 보호합니다.',
              },
            ].map((service, index) => (
              <Card
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <CardTitle>{service.title}</CardTitle>
                <CardText>{service.text}</CardText>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </main>
  );
} 