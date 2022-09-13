import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const NewNavbar = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark py-2 fixed-top" style={{ borderBottom: '10px solid var(--bs-success)'}}>

            <div className="container-fluid">

                <div className="container m-0 p-0" style={{width: "35%"}}>
                    <img id='logo' src="carLogo1.jpg"  style={{ width: "35%" , height: "30%" }}/>
                    <Link className="navbar-brand ms-3 fs-1" id='navbox' style={{ textAlign: "right" }} to={"/"}>CARWASH</Link>
                </div>

                <div className="container m-0" style={{ width: "max-content" }}>
                    <Link type="button" className="btn btn-outline-light mx-2 fs-4 text-1" to={"/login"}>LOGIN</Link>
                    <Link type="button" className="btn btn-outline-light mx-2 fs-4" to={"/register"}>REGISTER</Link>

                    <button className="navbar-toggler mx-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <Sidebar />

            </div>

        </nav>

    );
};
export default NewNavbar;