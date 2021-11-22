// Components
import Header from '../commons/Header';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
