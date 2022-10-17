import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { changeUser } from "../../Actions/UserAction";
import UserService from "../../Service/UserService";
import NewNavbar from "../FrontPage/NewNavbar";

const UserPage = (props) => {
  const dispatch = useDispatch();
  const refresh = useSelector((state) => state.refresh);
  const [user, setUser] = useState({});

  const userName = useSelector((state) => state.user);

  const loadUser = async () => {
    const data = await UserService.getUser();
    setUser(data);
    dispatch(changeUser(data));
  };

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    loadUser();
  }, [refresh]);

  return (
    <>
      <NewNavbar />

      <div
        className="container-fluid text-light py-5"
        style={{ height: "100vh" }}
      >
        <div
          className="container"
          id="profile-box"
          style={{ height: "100vh", width: "70%" }}
        >
          <div className="row fw-bold py-3 border-bottom fs-4">
            Account
            <div className="row fw-lighter" style={{ fontSize: "14px" }}>
              {`${userName?.firstName} ${userName?.lastName}`}
            </div>
          </div>
          <div className="row text-yellow" style={{ height: "100vh" }}>
            <div className="col-2 pe-5">
              <Link
                className="row fw-light border-bottom py-4 text-yellow text-decoration-none"
                to={"/user/profile"}
              >
                Overview
              </Link>
              <div className="row fw-light border-bottom py-4">
                <div className="row py-2 " style={{ fontSize: "18px" }}>
                  ORDERS
                </div>
                <Link
                  className="row text-yellow text-decoration-none"
                  style={{ fontSize: "14px" }}
                  to={"/user/orderlist"}
                >
                  Orders & Returns
                </Link>
                <Link
                  className="row text-yellow text-decoration-none"
                  style={{ fontSize: "14px" }}
                  to={"/user/book"}
                >
                  Book Now
                </Link>
              </div>
              <div className="row fw-light border-bottom py-4">
                <div className="row py-2 fs-bold" style={{ fontSize: "18px" }}>
                  ACCOUNT
                </div>
                <Link
                  className="row text-yellow text-decoration-none"
                  style={{ fontSize: "14px" }}
                  to={"/user/profile"}
                >
                  Profile
                </Link>
              </div>
              <div className="row fw-light border-bottom py-4">
                <div className="row py-2" style={{ fontSize: "18px" }}>
                  PACKAGES
                </div>
                <Link
                  className="row text-yellow text-decoration-none"
                  style={{ fontSize: "14px" }}
                  to={"/user/washpacks"}
                >
                  WashPacks
                </Link>
                <Link
                  className="row text-yellow text-decoration-none"
                  style={{ fontSize: "14px" }}
                  to={"/user/addons"}
                >
                  Add-Ons
                </Link>
                <Link
                  className="row text-yellow text-decoration-none"
                  style={{ fontSize: "14px" }}
                  to={"/user/cars"}
                >
                  Cars
                </Link>
              </div>
              <div className="row fw-light border-bottom py-4">
                <div className="row py-2" style={{ fontSize: "18px" }}>
                  LEGAL
                </div>
                <Link
                  className="row text-yellow text-decoration-none"
                  style={{ fontSize: "14px" }}
                  to={"/user/termsofuse"}
                >
                  Terms Of Use
                </Link>
                <Link
                  className="row text-yellow text-decoration-none"
                  style={{ fontSize: "14px" }}
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

                {/* <div className="row w-50 m-auto" style={{ height: "90vh" }}>
                  <div className="col">
                    <div className="row fw-bold border-bottom ps-4 pt-5 pb-4">
                      Profile Details
                    </div>
                    <div className="row pt-4" style={{ height: "60vh" }}>
                      <div className="row ps-4">
                        <div className="col-4">Full Name</div>
                        <div className="col-8">
                          {`${user?.firstName} ${user?.lastName}`}
                        </div>
                      </div>

                      <div className="row ps-4">
                        <div className="col-4">Mobile Number</div>
                        <div className="col-8">{user?.phoneNumber}</div>
                      </div>

                      <div className="row ps-4">
                        <div className="col-4">Email ID</div>
                        <div className="col-8">{user?.email}</div>
                      </div>

                      <div className="row ps-4">
                        <div className="col-4">Gender</div>
                        <div className="col-8">{user?.gender}</div>
                      </div>

                      <div className="row ps-4">
                        <div className="col-4">Date Of Birth</div>
                        <div className="col-8">{user?.dateOfBirth}</div>
                      </div>

                      <div className="row ps-4">
                        <div className="col-4">Hint Name</div>
                        <div className="col-8">{user?.hintName}</div>
                      </div>
                    </div>
                    <div className="row">
                      <button className="btn btn-danger">Edit</button>
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
