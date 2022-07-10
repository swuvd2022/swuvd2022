import CroppedImage from 'components/common/CroppedImage';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { InformationItem } from '.';
import PageTemplate from '../../components/common/PageTemplate';
import { getDesigner } from '../../util/designers';
import projects from 'fixtures/projects.json';

function DesignerDetailMobile() {
  const { designerId } = useParams();

  const designer = getDesigner(designerId);

  if (!designer) {
    return <div>없어</div>;
  }

  const { name, engName, email, insta, website, image_1, image_2, project_1, project_2 } = designer;

  const project1 = projects.find(project => project.id === project_1);
  const project2 = projects.find(project => project.id === project_2);

  return (
    <PageTemplate>
      <Container>
        <Title>DESIGNER</Title>
        <Section>
          <InformationItem title={name} text={engName} />
        </Section>

        <Section>
          <InformationItem title='E-mail' text={email} />
          <InformationItem title='Instagram' text={insta} />
          <InformationItem title='Website' text={website} />
        </Section>

        <StyledImageWrapper>
          {image_1.length !== 0 && (
            <StyledLink key={project1.id} to={`/project/${project1.id}`}>
              <CroppedImage
                src={`../images/${project1.id}_thumbnail.png`}
                width='100%'
                ratio='66.67%'
                alt=''
              />
            </StyledLink>
          )}
          {image_2.length !== 0 && (
            <StyledLink key={project2.id} to={`/project/${project2.id}`}>
              <CroppedImage
                src={`../images/${project2.id}_thumbnail.png`}
                width='100%'
                ratio='66.67%'
                alt=''
              />
            </StyledLink>
          )}
        </StyledImageWrapper>
      </Container>
    </PageTemplate>
  );
}

export default DesignerDetailMobile;

const Title = styled.h3``;

const Container = styled.div`
  display: flex;

  flex-direction: column;

  color: ${({ theme }) => theme.brandColor_1};

  padding: 10px;

  min-width: 100vw;

  gap: 40px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
`;

const StyledImageWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 20px;

  & > img,
  & > div {
    flex: 1;

    min-width: 300px;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  cursor: pointer;
`;
