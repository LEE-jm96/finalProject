import { Outlet } from 'react-router-dom';

import Header from '../../outlets/Header';
import Footer from '../../outlets/Footer';
import Sidebar from '../../outlets/Sidebar';

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      {/* Outlet이 렌더링 해주는 JSX는 라우트에서 감싸주고 있는 라우트  */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
