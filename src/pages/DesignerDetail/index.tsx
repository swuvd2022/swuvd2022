import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Image from '../../components/common/Image';
import { getDesigner } from '../../util/designers';

const InformationItem = ({ title, text }) => {
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

  const { name, engName, email, insta, website, image_1, image_2 } = designer;

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
        <Image src={image_1} alt='이미지' />
        <Image src={image_2} alt='이미지' />
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
