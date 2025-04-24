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

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin: 2rem 0 1.5rem;
  color: #1a73e8;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e8f0fe;
`;

const PublicationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PublicationItem = styled.div`
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const PubTitle = styled.h3`
  font-size: 1.2rem;
  color: #1a73e8;
  margin-bottom: 0.5rem;
`;

const Authors = styled.p`
  color: #666;
  margin-bottom: 0.5rem;
  font-style: italic;
`;

const Venue = styled.p`
  color: #333;
  font-weight: 500;
`;

const Links = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  color: #1a73e8;
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Publications: React.FC = () => {
  const conferencePublications = [
    {
      title: "Booth-NeRF: An FPGA Accelerator for Instant-NGP Inference with Novel Booth-Multiplier",
      authors: "Zihang Ma, Zeyu Li, Yuanfang Wang, Yu Li, Jun Yu, Kun Wang",
      venue: "29th Asia and South Pacific Design Automation Conference (ASP-DAC), 2024",
      pdf: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10473990"
    },
    // 可以继续添加更多会议论文
  ];

  const journalPublications = [
    {
      title: "Nothing",
      authors: "Nobody",
      venue: "Silence",
      pdf: ""
    },
    // 可以继续添加更多期刊论文
  ];

  const renderPublicationList = (publications: any[]) => (
    <PublicationList>
      {publications.map((pub, index) => (
        <PublicationItem key={index}>
          <PubTitle>{pub.title}</PubTitle>
          <Authors>{pub.authors}</Authors>
          <Venue>{pub.venue}</Venue>
          <Links>
            {pub.pdf && (
              <Link href={pub.pdf} target="_blank" rel="noopener noreferrer">
                📄 PDF
              </Link>
            )}
            {pub.code && (
              <Link href={pub.code} target="_blank" rel="noopener noreferrer">
                💻 Code
              </Link>
            )}
            {pub.project && (
              <Link href={pub.project} target="_blank" rel="noopener noreferrer">
                🔗 Project
              </Link>
            )}
          </Links>
        </PublicationItem>
      ))}
    </PublicationList>
  );

  return (
    <Container>
      <Title>Publications</Title>
      
      <SectionTitle>Conference Papers</SectionTitle>
      {renderPublicationList(conferencePublications)}
      
      <SectionTitle>Journal Articles</SectionTitle>
      {renderPublicationList(journalPublications)}
    </Container>
  );
};

export default Publications; 