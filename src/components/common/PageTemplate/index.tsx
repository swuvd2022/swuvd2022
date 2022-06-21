import styled from 'styled-components';
import Gnb from '../Gnb';

function PageTemplate({ children }) {
  return (
    <StyledRoot>
      <Gnb />
      {children}
    </StyledRoot>
  );
}

export default PageTemplate;

const StyledRoot = styled.div`
  display: flex;
  position: relative;

  height: 100%;
`;
