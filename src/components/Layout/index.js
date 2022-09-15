import "./index.scss";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import backgroundVideo from "../../assets/images/backvid.mov";

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;

/*<video autoPlay loop muted id="video">
        <source src={backgroundVideo} />
      </video>*/
