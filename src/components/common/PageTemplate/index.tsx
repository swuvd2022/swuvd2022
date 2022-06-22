import { ReactNode } from 'react';
import styled from 'styled-components';
import useResponsive from '../../../hooks/useResponsive';
import Gnb from '../Gnb';
import MobileGnb from '../Gnb/mobile';

function PageTemplate({ children }: { children: ReactNode }) {
  const isDesktop = useResponsive();

  return (
    <StyledRoot flexDirection={isDesktop ? 'row' : 'column'}>
      {isDesktop ? <Gnb /> : <MobileGnb />}
      {children}
    </StyledRoot>
  );
}

export default PageTemplate;

const StyledRoot = styled.div<{ flexDirection: 'column' | 'row' }>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  position: relative;

  height: 100%;
`;
