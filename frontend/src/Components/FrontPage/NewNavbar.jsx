import { Link } from "react-router-dom";
import DropHome from "./DropHome";
import HomeButton from "./HomeButton";
import Sidebar from "./Sidebar";

const NewNavbar = (props) => {
  return (
    <nav
      className="navbar navbar-dark bg-dark py-3 bg-gradient page-top"
      style={{ borderBottom: "10px solid #cddc39" }}
    >
      <div className="container-fluid">
        <div className="container m-0 p-0" style={{ width: "35%" }}>
          <div className="rounded">
            <img
              id="logo"
              src="CarLogo3.jpg"
              style={{ width: "35%", height: "30%" }}
            />
          </div>

          <Link
            className="navbar-brand ms-3 fs-1"
            id="navbox"
            style={{ textAlign: "right" }}
            to={"/"}
          >
            CARWASH
          </Link>
        </div>

        <div className="container m-0" style={{ width: "max-content" }}>
          <HomeButton />

          <DropHome />

          <button
            className="navbar-toggler mx-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <Sidebar />
      </div>
    </nav>
  );
};
export default NewNavbar;
