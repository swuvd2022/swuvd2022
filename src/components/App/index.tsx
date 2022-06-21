import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useResponsive from '../../hooks/useResponsive';

import Designer from '../../pages/Designer';
import DesignerDetail from '../../pages/DesignerDetail';
import Landing from '../../pages/Landing';
import Project from '../../pages/Project';
import ProjectDetail from '../../pages/ProjectDetail.tsx';
import { ROUTE } from '../../route';

function App() {
  const isDesktop = useResponsive();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.Landing} element={<Landing />} />

        {isDesktop ? (
          <Route path={ROUTE.Designer} element={<Designer />}>
            <Route path={ROUTE.DesignerDetail} element={<DesignerDetail />} />
          </Route>
        ) : (
          <>
            <Route path={ROUTE.Designer} element={<Designer />} />
            <Route path={ROUTE.DesignerDetail} element={<DesignerDetail />} />
          </>
        )}
      </Routes>
      <Route path={ROUTE.Project} element={<Project />} />
      <Route path={ROUTE.ProjectDetail} element={<ProjectDetail />} />
    </BrowserRouter>
  );
}

export default App;
