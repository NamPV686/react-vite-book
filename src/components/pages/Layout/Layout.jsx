import { Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
      <div className='layout-app'>
        <Header />
          <Outlet/>
        <Footer />
      </div>
    )
}

export default Layout;