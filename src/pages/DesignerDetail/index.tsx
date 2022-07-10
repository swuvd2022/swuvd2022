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

  const {
    id: id1,
    title: title1,
    artist: artist1,
  } = projects.find(project => project.id === project_1);
  const {
    id: id2,
    title: title2,
    artist: artist2,
  } = projects.find(project => project.id === project_2);

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
          <StyledLink key={id1} to={`/project/${id1}`}>
            <CroppedImage
              src={`../images/${id1}_thumbnail.png`}
              width='330px'
              ratio='66.67%'
              alt=''
            />
            <StyledHover>
              <h3>{title1}</h3>
              <div>
                {artist1.map((el, index) => (
                  <h4 key={el}>
                    {el}
                    {artist1.length - 1 !== index && ','}&nbsp;
                  </h4>
                ))}
              </div>
            </StyledHover>
          </StyledLink>
        )}
        {image_2.length !== 0 && (
          <StyledLink key={id2} to={`/project/${id2}`}>
            <CroppedImage
              src={`../images/${id2}_thumbnail.png`}
              width='330px'
              ratio='66.67%'
              alt=''
            />
            <StyledHover>
              <h3>{title2}</h3>
              <div>
                {artist2.map((el, index) => (
                  <h4 key={el}>
                    {el}
                    {artist2.length - 1 !== index && ','}&nbsp;
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

  gap: 20px;

  width: 100%;
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 28px;

  flex: 1;
`;

const StyledImageWrapper = styled.div`
  width: 100%;

  display: flex;
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
  }

  & > div > h4 {
    display: inline-block;
    font-size: 14px;
  }
`;
