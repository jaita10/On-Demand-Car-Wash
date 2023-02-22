import React from 'react';
import { Link } from 'react-router-dom';

const CommonNav = props => {
    return (
        <>
        <nav className="navbar navbar-dark bg-dark py-3 bg-gradient page-top" style={{ borderBottom: '10px solid var(--bs-success)' }}>

            <div className="container-fluid">

                <div className="container m-0 p-0" style={{ width: "35%" }}>
                    <img id='logo' src="CarLogo3.jpg" style={{ width: "35%", height: "30%" }} />
                    <Link className="navbar-brand ms-3 fs-1" id='navbox' style={{ textAlign: "right" }} to={"/"}>CARWASH</Link>
                </div>

            </div>

        </nav>
        </>
    );
};

export default CommonNav;