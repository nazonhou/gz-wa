import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import WebAdminDashboard from './pages/Dashboard/WebAdminDashboard';
import CreatePackage from './pages/Form/CreatePackage';
import CreateDelivery from './pages/Form/CreateDelivery';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Web Admin Dashboard" />
              <WebAdminDashboard />
            </>
          }
        />
        <Route
          path='/package/create'
          element={
            <>
              <PageTitle title="Web Admin Create Package" />
              <CreatePackage />
            </>
          }
        />
        <Route
          path='/delivery/create'
          element={
            <>
              <PageTitle title="Web Admin Create Delivery" />
              <CreateDelivery />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
