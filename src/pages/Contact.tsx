import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  text-decoration: none;
`;

const ContactSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Icon = styled.span`
  font-size: 1.5rem;
  color: #1a73e8;
  min-width: 32px;
  text-align: center;
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const Label = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

const Link = styled.a`
  color: #1a73e8;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Contact: React.FC = () => {
  return (
    <Container>
      <Title>Contact</Title>
      
      <ContactSection>
        <ContactItem>
          <Icon>📧</Icon>
          <ContactInfo>
            <Label>Email</Label>
            <Text>
              <Link href="mailto:zliki@connect.ust.hk">zliki@connect.ust.hk</Link>
            </Text>
          </ContactInfo>
        </ContactItem>

        <ContactItem>
          <Icon>📍</Icon>
          <ContactInfo>
            <Label>Office</Label>
            <Text>
              Room 3654<br />
              Academic Building<br />
              The Hong Kong University of Science and Technology<br />
              Clear Water Bay, Kowloon<br />
              Hong Kong SAR, China
            </Text>
          </ContactInfo>
        </ContactItem>

        <ContactItem>
          <Icon>💬</Icon>
          <ContactInfo>
            <Label>WeChat</Label>
            <Text>lzylzylzy0817</Text>
          </ContactInfo>
        </ContactItem>

        <ContactItem>
          <Icon>🔗</Icon>
          <ContactInfo>
            <Label>Social & Academic</Label>
            <Text>
              <Link href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer">GitHub</Link>
              {' • '}
              <Link href="https://scholar.google.com/YOUR_GOOGLE_SCHOLAR" target="_blank" rel="noopener noreferrer">Google Scholar</Link>
              {' • '}
              <Link href="https://www.linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
            </Text>
          </ContactInfo>
        </ContactItem>
      </ContactSection>
    </Container>
  );
};

export default Contact; 