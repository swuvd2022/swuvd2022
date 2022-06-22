import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { InformationItem } from '.';
import Image from '../../components/common/Image';
import PageTemplate from '../../components/common/PageTemplate';
import { getDesigner } from '../../util/designers';

function DesignerDetailMobile() {
  const { designerId } = useParams();

  const designer = getDesigner(designerId);

  if (!designer) {
    return <div>없어</div>;
  }

  const { name, engName, email, insta, website, image_1, image_2 } = designer;

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
          <Image src={image_1} alt='이미지' />
          <Image src={image_2} alt='이미지' />
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
