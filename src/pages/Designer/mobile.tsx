import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageTemplate from '../../components/common/PageTemplate';
import { designers } from '../../util/designers';

function DesignerMobile() {
  return (
    <PageTemplate>
      <Container>
        <Title>DESIGNER</Title>
        <StyledListWrapper>
          {Object.values(designers).map(designer => (
            <Link key={designer.id} to={`./${designer.id}`}>
              {designer.name}
            </Link>
          ))}
        </StyledListWrapper>
      </Container>
    </PageTemplate>
  );
}

const Container = styled.div`
  display: flex;

  flex-direction: column;

  color: ${({ theme }) => theme.brandColor_1};

  padding: 10px;

  min-width: 100vw;

  gap: 24px;
`;

const Title = styled.h3``;

const StyledListWrapper = styled.div`
  width: 100%;
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 25px;

  height: fit-content;

  & > a {
    min-width: max-content;

    text-align: center;
  }

  border-radius: 4px;
`;

export default DesignerMobile;
