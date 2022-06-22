import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import useResponsive from '../../../hooks/useResponsive';
import { ROUTE } from '../../../route';

export const navButtons = {
  About: ROUTE.Landing,
  Project: ROUTE.Project,
  Designer: ROUTE.Designer,
};

const Gnb = () => {
  const location = useLocation();

  const isDesktop = useResponsive();

  return (
    <StyledRoot>
      <StyledContainer>
        <StyledTop>
          <h1>제39회 서울여자대학교 시각디자인전공 졸업전시회</h1>
          <StyledNav>
            {Object.keys(navButtons).map(key => {
              if (key === 'Designer') {
                return (
                  <span key={key}>
                    <StyledLink
                      to={isDesktop ? '/designer/1' : navButtons[key]}
                      active={`/${location.pathname.split('/')[1]}` === navButtons[key] ? 1 : 0}
                    >
                      {key}
                    </StyledLink>
                  </span>
                );
              }

              return (
                <span key={key}>
                  <StyledLink
                    to={navButtons[key]}
                    active={`/${location.pathname.split('/')[1]}` === navButtons[key] ? 1 : 0}
                  >
                    {key}
                  </StyledLink>
                </span>
              );
            })}
          </StyledNav>
        </StyledTop>
        <StyledBottom>
          조형예술관 바롬전시갤러리
          <br />
          22.07.07(목) - 07.17(일)
          <br />
          AM 10:00 - PM 20:00
        </StyledBottom>
      </StyledContainer>
    </StyledRoot>
  );
};

export default Gnb;

const StyledRoot = styled.div`
  height: 100%;
  width: 348px;
`;

const StyledContainer = styled.div`
  height: 100%;
  width: 348px;
  padding: 40px;
  color: ${({ theme }) => theme.brandColor_1};
  background-color: ${({ theme }) => theme.brandColor_3};
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* position: fixed;
  top: 0;
  left: 0; */
  box-shadow: 5px 0 10px rgba(0, 0, 0, 5%);
`;

const StyledTop = styled.div`
  & > h1 {
    font-weight: 700;
    font-size: inherit;
    margin-top: 0;
    margin-bottom: 40px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  font-weight: 700;
`;

const StyledLink = styled(Link)<{ active: number }>`
  color: ${({ theme }) => theme.brandColor_1};
  height: 60px;
  line-height: 60px;
  ${({ active, theme }) =>
    active &&
    css`
      text-decoration: ${theme.brandColor_1} underline 3px;
      -webkit-text-decoration: ${theme.brandColor_1} underline 3px;

      ::after {
        content: '';
        display: inline-block;
        margin-left: 8px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: ${theme.brandColor_1};
      }
    `}
`;

const StyledBottom = styled.div`
  font-size: 20px;
  height: 108px;
  line-height: 36px;
`;
