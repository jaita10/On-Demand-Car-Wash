import { Link, useNavigate } from "react-router-dom";

const Sidebar = (props) => {
    const navigate = useNavigate();

    const goTo=(path)=>{
        navigate(path);
    }
    
    return (
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">

            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">SIDEBAR</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">

                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    {/* <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"/"} data-bs-dismiss="offcanvas" onClick={()=>goTo("/")}>Home</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link btn sidebutton mb-5 ms-5 mt-5" type="button" to={"/Contact"} data-bs-dismiss="offcanvas" onClick={()=>goTo("/Contact")}>Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn sidebutton mb-5 ms-5 " type="button" to={"/About"} data-bs-dismiss="offcanvas" onClick={()=>goTo("/About")}>About Us</Link>
                    </li>
                    <li className="nav-item">
                        {/* <Link className="nav-link btn sidebutton mb-5 ms-5 " type="button" to={"/Book"} data-bs-dismiss="offcanvas" onClick={()=>goTo("/Book")}>Book Now</Link> */}
                    </li>
                    <li className="nav-item">
                        {/* <Link className="nav-link btn sidebutton mb-5 ms-5 " type="button" to={"/Schedule"} data-bs-dismiss="offcanvas" onClick={()=>goTo("/Schedule")}>Schedule Later</Link> */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn sidebutton mb-5 ms-5 " type="button" to={"/Help"} data-bs-dismiss="offcanvas" onClick={()=>goTo("/Help")}>Help</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn sidebutton mb-5 ms-5 " type="button" to={"/user/profile"} data-bs-dismiss="offcanvas" onClick={()=>goTo("/user/profile")}>Profile</Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </Link>

                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><Link className="dropdown-item" to="#">Action</Link></li>
                            <li><Link className="dropdown-item" to="#">Another action</Link></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                        </ul>

                    </li> */}

                </ul>

                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-success" type="submit">Search</button>
                </form> */}

            </div>

        </div>
    );
};

export default Sidebar;
