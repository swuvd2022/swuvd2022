import ProjectMobile from 'pages/Project/mobile';
import ProjectDetailMobile from 'pages/ProjectDetail.tsx/mobile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useResponsive from '../../hooks/useResponsive';

import Designer from '../../pages/Designer';
import DesignerMobile from '../../pages/Designer/mobile';
import DesignerDetail from '../../pages/DesignerDetail';
import DesignerDetailMobile from '../../pages/DesignerDetail/mobile';
import Landing from '../../pages/Landing';
import LandingMobile from '../../pages/Landing/mobile';
import Project from '../../pages/Project';
import ProjectDetail from '../../pages/ProjectDetail.tsx';
import { ROUTE } from '../../route';

function App() {
  const isDesktop = useResponsive();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.Landing} element={isDesktop ? <Landing /> : <LandingMobile />} />

        {isDesktop ? (
          <>
            <Route path={ROUTE.Designer} element={<Designer />}>
              <Route path={ROUTE.DesignerDetail} element={<DesignerDetail />} />
            </Route>
            <Route path={ROUTE.Project} element={<Project />} />
            <Route path={ROUTE.ProjectDetail} element={<ProjectDetail />} />
          </>
        ) : (
          <>
            <Route path={ROUTE.Designer} element={<Designer />} />
            <Route path={ROUTE.DesignerDetail} element={<DesignerDetail />} />
            <Route path={ROUTE.Project} element={<ProjectMobile />} />
            <Route path={ROUTE.ProjectDetail} element={<ProjectDetailMobile />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
