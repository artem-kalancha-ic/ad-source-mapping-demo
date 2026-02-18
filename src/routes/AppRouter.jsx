import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Intro from '../pages/Intro/Intro';
import Overview from '../pages/Overview/Overview';
import MappingLevel from '../pages/MappingLevel/MappingLevel';
import MappingTable from '../pages/MappingTable/MappingTable';
import CreateGlobalLevelMapping from '../pages/Examples/CreateGlobalLevelMapping/CreateGlobalLevelMapping';
import CreateCompanyLevelMapping from '../pages/Examples/CreateCompanyLevelMapping/CreateCompanyLevelMapping';
import CreatePropertyLevelMapping from '../pages/Examples/CreatePropertyLevelMapping/CreatePropertyLevelMapping';
import DeletePropertyLevelMapping from '../pages/Examples/DeletePropertyLevelMapping/DeletePropertyLevelMapping';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Intro />,
  },
  {
    path: '/overview',
    element: <Layout />,
    children: [
      { index: true, element: <Overview /> },
      { path: 'mapping-level', element: <MappingLevel /> },
      { path: 'mapping-table', element: <MappingTable /> },
      { path: 'examples/create-global', element: <CreateGlobalLevelMapping /> },
      { path: 'examples/create-company', element: <CreateCompanyLevelMapping /> },
      { path: 'examples/create-property', element: <CreatePropertyLevelMapping /> },
      { path: 'examples/delete-property', element: <DeletePropertyLevelMapping /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
