import { Link, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageTemplate from '../../components/common/PageTemplate';
import useResponsive from '../../hooks/useResponsive';
import { designers } from '../../util/designers';
const DesignerNav = () => {
  const { designerId } = useParams();

  return (
    <StyledListWrapper>
      {Object.values(designers).map(designer => (
        <Link
          key={designer.id}
          to={`./${designer.id}`}
          style={{
            fontWeight: designerId === designer.id ? 'bold' : '400',
            textDecoration: designerId === designer.id ? 'underline' : 'none',
          }}
        >
          {designer.name}
        </Link>
      ))}
    </StyledListWrapper>
  );
};

const StyledListWrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 16px;

  color: ${({ theme }) => theme.brandColor_1};

  height: fit-content;

  & > a {
    min-width: max-content;
  }

  padding: 10px;
  border-radius: 4px;
`;

function Designer() {
  const isDesktop = useResponsive();

  return (
    <PageTemplate>
      <StyledContainer>
        <StyledTitle>Designer</StyledTitle>

        <StyledDesignerRoot>
          <DesignerNav />
          {isDesktop && (
            <StyledDetailSection>
              <Outlet />
            </StyledDetailSection>
          )}
        </StyledDesignerRoot>
      </StyledContainer>
    </PageTemplate>
  );
}

const StyledContainer = styled.div`
  padding: 50px;

  flex: 1;

  overflow-x: scroll;
`;

const StyledTitle = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.brandColor_1};
`;

const StyledDesignerRoot = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 100px;

  gap: 50px;
`;

const StyledDetailSection = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default Designer;
