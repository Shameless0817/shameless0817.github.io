import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TitleSection = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-decoration: none;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  color: #1a73e8;
  font-style: italic;
  margin: 0;
  font-weight: 300;
`;

const ContentSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const PhotoCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PhotoInfo = styled.div`
  padding: 1rem;
`;

const PhotoTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const PhotoDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const Life: React.FC = () => {
  return (
    <Container>
      <TitleSection>
        <Title>Life</Title>
        <Subtitle>Exploring the world is all you need!</Subtitle>
      </TitleSection>
      
      <ContentSection>
        <PhotoGrid>
          {/* 这里可以添加您的生活照片和描述 */}
          <PhotoCard>
            <Photo src="/path-to-your-photo.jpg" alt="Photo description" />
            <PhotoInfo>
              <PhotoTitle>照片标题</PhotoTitle>
              <PhotoDescription>照片描述...</PhotoDescription>
            </PhotoInfo>
          </PhotoCard>
        </PhotoGrid>
      </ContentSection>
    </Container>
  );
};

export default Life; 