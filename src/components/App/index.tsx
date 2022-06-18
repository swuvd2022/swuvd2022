import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Designer from '../../pages/Designer';
import DesignerDetail from '../../pages/DesignerDetail';
import Landing from '../../pages/Landing';
import Project from '../../pages/Project';
import { ROUTE } from '../../route';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.Landing} element={<Landing />} />
        <Route path={ROUTE.Designer} element={<Designer />} />
        <Route path={ROUTE.DesignerDetail} element={<DesignerDetail />} />
        <Route path={ROUTE.Project} element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
