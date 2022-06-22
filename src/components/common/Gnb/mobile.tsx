import { ReactComponent as MobileLogo } from 'assets/images/mobile-logo.svg';
import { ReactComponent as Hamburger } from 'assets/icons/hamburger.svg';
import { ReactComponent as ExButton } from 'assets/icons/ex-button.svg';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navButtons } from '.';
import useResponsive from 'hooks/useResponsive';

const MobileGnb = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const isDesktop = useResponsive();

  return (
    <StyledRoot isOpenNav={isOpenNav}>
      <StyledHeader>
        <button onClick={() => setIsOpenNav(el => !el)}>
          {isOpenNav ? <ExButton /> : <Hamburger />}
        </button>
        <MobileLogo />
      </StyledHeader>

      {isOpenNav && (
        <StyledContent>
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
          <StyledBottom>
            조형예술관 바롬전시갤러리
            <br />
            22.07.07(목) - 07.17(일)
            <br />
            AM 10:00 - PM 20:00
          </StyledBottom>
        </StyledContent>
      )}
    </StyledRoot>
  );
};

export default MobileGnb;

const StyledRoot = styled.div<{ isOpenNav: boolean }>`
  padding: 20px;

  ${({ isOpenNav }) =>
    isOpenNav &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 3;
      background-color: white;
      display: flex;
      flex-direction: column;
      gap: 44px;
    `}
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
  font-size: 18px;
  ${({ active, theme }) =>
    active &&
    css`
      text-decoration: ${theme.brandColor_1} underline 3px;
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
  font-size: 14px;
  height: 96px;
  line-height: 32px;
`;
