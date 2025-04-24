import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 2rem;
`;

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 2rem;
  border: 4px solid white;
  object-fit: cover;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: normal;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled(motion.p)`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }

  a {
    color: #1a73e8;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #1557b0;
      text-decoration: underline;
    }
  }
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <VideoBackground>
        <video autoPlay loop muted playsInline>
          <source src="/assets/background.mp4" type="video/mp4" />
        </video>
      </VideoBackground>
      <Content>
        <ProfileImage
          src="/assets/profile.jpg"
          alt="Profile"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <Title
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Zeyu LI
        </Title>
        <Subtitle
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          PhD Student at The Hong Kong University of Science and Technology
        </Subtitle>
        <Description
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I am a PhD student supervised by{' '}
          <a href="https://seng.hkust.edu.hk/about/people/faculty/wei-zhang" target="_blank" rel="noopener noreferrer">
            Prof. Wei ZHANG
          </a>{' '}
          at{' '}
          <a href="https://hkust.edu.hk/zh-hant" target="_blank" rel="noopener noreferrer">
            The Hong Kong University of Science and Technology
          </a>
          . My main research interest lies in MLsys. Previously, I obtained my Bachelor's Degree at{' '}
          <a href="https://www.fudan.edu.cn/" target="_blank" rel="noopener noreferrer">
            Fudan Univ.
          </a>{' '}
          majoring in{' '}
          <a href="https://sme.fudan.edu.cn/" target="_blank" rel="noopener noreferrer">
            microeletronics
          </a>{' '}
          under the supervision of{' '}
          <a href="http://eda.ee.ucla.edu/people/kun-wang/index.html" target="_blank" rel="noopener noreferrer">
            Prof. Kun WANG
          </a>
          .
        </Description>
      </Content>
    </HomeContainer>
  );
};

export default Home; 