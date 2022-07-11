import CroppedImage from 'components/common/CroppedImage';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import projects from 'fixtures/projects.json';
import { getDesigner } from '../../util/designers';

export const InformationItem = ({ title, text }: { title: string; text: string }) => {
  return (
    <StyledInformationItemWrapper>
      <StyledInformationTitle>{title}</StyledInformationTitle>
      <StyledInformationText>{text}</StyledInformationText>
    </StyledInformationItemWrapper>
  );
};

const StyledInformationItemWrapper = styled.div`
  display: flex;

  gap: 20px;

  color: ${({ theme }) => theme.brandColor_1};
`;

const StyledInformationTitle = styled.div`
  width: 70px;

  font-weight: bold;
`;

const StyledInformationText = styled.div``;

function DesignerDetail() {
  const { designerId } = useParams();

  const designer = getDesigner(designerId);

  if (!designer) {
    return <div>없어</div>;
  }

  const { name, engName, email, insta, website, image_1, image_2, project_1, project_2 } = designer;

  const project1 = projects.find(project => project.id === project_1);
  const project2 = projects.find(project => project.id === project_2);

  return (
    <StyledWrapper>
      <StyledInformationWrapper>
        <StyledSection>
          <InformationItem title={name} text={engName} />
        </StyledSection>
        <StyledSection>
          <InformationItem title='E-mail' text={email} />
          <InformationItem title='Instagram' text={insta} />
          <InformationItem title='Website' text={website} />
        </StyledSection>
      </StyledInformationWrapper>
      <StyledImageWrapper>
        {image_1.length !== 0 && (
          <StyledLink key={project1.id} to={`/project/${project1.id}`}>
            <CroppedImage
              src={`../images/${project1.id}_thumbnail.png`}
              width='330px'
              ratio='66.67%'
              alt=''
            />
            <StyledHover>
              <h3>{project1.title}</h3>
              <div>
                {project1.artist.map((el, index) => (
                  <h4 key={el}>
                    {el}
                    {project1.artist.length - 1 !== index && ','}&nbsp;
                  </h4>
                ))}
              </div>
            </StyledHover>
          </StyledLink>
        )}
        {image_2.length !== 0 && (
          <StyledLink key={project2.id} to={`/project/${project2.id}`}>
            <CroppedImage
              src={`../images/${project2.id}_thumbnail.png`}
              width='330px'
              ratio='66.67%'
              alt=''
            />
            <StyledHover>
              <h3>{project2.title}</h3>
              <div>
                {project2.artist.map((el, index) => (
                  <h4 key={el}>
                    {el}
                    {project2.artist.length - 1 !== index && ','}&nbsp;
                  </h4>
                ))}
              </div>
            </StyledHover>
          </StyledLink>
        )}
      </StyledImageWrapper>
    </StyledWrapper>
  );
}

export default DesignerDetail;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 700px;

  gap: 50px;
`;

const StyledInformationWrapper = styled.div`
  display: flex;

  width: 100%;
`;

const StyledSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  gap: 28px;

  word-wrap: break-word;
`;

const StyledImageWrapper = styled.div`
  width: 100%;

  display: flex;

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
  &:hover > div {
    display: flex;
  }
`;

const StyledHover = styled.div`
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2e319260;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.brandColor_3};

  & > h3 {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    padding: 0 20px;
  }

  & > div > h4 {
    display: inline-block;
    font-size: 14px;
  }
`;
