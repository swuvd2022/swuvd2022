import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Designer from '../../pages/Designer';
import DesignerDetail from '../../pages/DesignerDetail';
import Landing from '../../pages/Landing';
import Project from '../../pages/Project';
import { ROUTE } from '../../route';
import Gnb from '../common/Gnb';
import styled from 'styled-components';

function App() {
  return (
    <BrowserRouter>
      <StyledRoot>
        <Gnb />
        <Routes>
          <Route path={ROUTE.Landing} element={<Landing />} />
          <Route path={ROUTE.Designer} element={<Designer />} />
          <Route path={ROUTE.DesignerDetail} element={<DesignerDetail />} />
          <Route path={ROUTE.Project} element={<Project />} />
        </Routes>
      </StyledRoot>
    </BrowserRouter>
  );
}

export default App;

const StyledRoot = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;
