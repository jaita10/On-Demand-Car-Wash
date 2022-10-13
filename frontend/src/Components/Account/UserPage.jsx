import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { changeUser } from "../../Actions/UserAction";
import UserService from "../../Service/UserService";
import NewNavbar from "../FrontPage/NewNavbar";
import PrivacyPolicy from "../Static Pages/PrivacyPolicy";
import ProfilePage from "./ProfilePage";

const UserPage = (props) => {

    const dispatch = useDispatch();

    const [user, setUser] = useState({});

    const loadUser = async () => {
        const data = await UserService.getUser();
        setUser(data)
        dispatch(changeUser(data))
    }

    useEffect(() => {
        loadUser();
    }, [])


    return (
        <>
            <NewNavbar />

            <div className="container-fluid text-light py-5" style={{ height: "100vh" }}>
                <div
                    className="container" id="profile-box"
                    style={{ height: "100vh", width: "70%" }}
                >
                    <div className="row fw-bold py-3 border-bottom">
                        Account
                        <div
                            className="row fw-lighter"
                            style={{ fontSize: "12px" }}
                        >
                            Jaita Kapuria
                        </div>
                    </div>
                    <div className="row" style={{ height: "100vh" }}>
                        <div className="col-2 pe-5">
                            <Link className="row fw-light border-bottom py-4" to={"/user/profile"}>
                                Overview
                            </Link>
                            <div className="row fw-light border-bottom py-4">
                                <div
                                    className="row py-2"
                                    style={{ fontSize: "12px" }}
                                >
                                    ORDERS
                                </div>
                                <Link
                                    className="row"
                                    style={{ fontSize: "12px" }}
                                    to={"/user/orders"}
                                >
                                    Orders & Returns
                                </Link>
                            </div>
                            <div className="row fw-light border-bottom py-4">
                                <div
                                    className="row py-2"
                                    style={{ fontSize: "12px" }}
                                >
                                    ACCOUNT
                                </div>
                                <Link
                                    className="row"
                                    style={{ fontSize: "12px" }}
                                    to={"/user/profile"}
                                >
                                    Profile
                                </Link>
                            </div>
                            <div className="row fw-light border-bottom py-4">
                                <div
                                    className="row py-2"
                                    style={{ fontSize: "12px" }}
                                >
                                    PACKAGES
                                </div>
                                <Link
                                    className="row"
                                    style={{ fontSize: "12px" }}
                                    to={"/user/washpacks"}
                                >
                                    WashPacks
                                </Link>
                                <Link
                                    className="row"
                                    style={{ fontSize: "12px" }}
                                    to={"/user/addons"}
                                >
                                    Add-Ons
                                </Link>
                                <Link
                                    className="row"
                                    style={{ fontSize: "12px" }}
                                    to={"/user/cars"}
                                >
                                    Cars
                                </Link>
                            </div>
                            <div className="row fw-light border-bottom py-4">
                                <div
                                    className="row py-2"
                                    style={{ fontSize: "12px" }}
                                >
                                    LEGAL
                                </div>
                                <Link
                                    className="row"
                                    style={{ fontSize: "12px" }}
                                    to={"/user/termsofuse"}
                                >
                                    Terms Of Use
                                </Link>
                                <Link
                                    className="row"
                                    style={{ fontSize: "12px" }}
                                    to={"/user/privacypolicy"}
                                >
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                        <div className="col p-3 border-start">
                            <div
                                className="container border p-0 position-relative scroll"
                                style={{ height: "90vh" }}
                            >

                                <Outlet />

                                {/* <ProfilePage user={user}/> */}

                                {/* <PrivacyPolicy /> */}

                                {/* <div
                                    className="row w-50 m-auto"
                                    style={{ height: "90vh" }}
                                >
                                    <div className="col">
                                        <div className="row fw-bold border-bottom ps-4 pt-5 pb-4">
                                            Profile Details
                                        </div>
                                        <div
                                            className="row pt-4"
                                            style={{ height: "60vh" }}
                                        >
                                            <div className="row ps-4">
                                                <div className="col-4">
                                                    Full Name
                                                </div>
                                                <div className="col-8">
                                                    {`${user?.firstName} ${user?.lastName}`}
                                                </div>
                                            </div>

                                            <div className="row ps-4">
                                                <div className="col-4">
                                                    Mobile Number
                                                </div>
                                                <div className="col-8">
                                                    {user?.phoneNumber}
                                                </div>
                                            </div>

                                            <div className="row ps-4">
                                                <div className="col-4">
                                                    Email ID
                                                </div>
                                                <div className="col-8">
                                                    {user?.email}
                                                </div>
                                            </div>

                                            <div className="row ps-4">
                                                <div className="col-4">
                                                    Gender
                                                </div>
                                                <div className="col-8">
                                                    {user?.gender}
                                                </div>
                                            </div>

                                            <div className="row ps-4">
                                                <div className="col-4">
                                                    Date Of Birth
                                                </div>
                                                <div className="col-8">
                                                    {user?.dateOfBirth}
                                                </div>
                                            </div>

                                            <div className="row ps-4">
                                                <div className="col-4">
                                                    Hint Name
                                                </div>
                                                <div className="col-8">
                                                    {user?.hintName}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <button className="btn btn-danger">
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserPage;
