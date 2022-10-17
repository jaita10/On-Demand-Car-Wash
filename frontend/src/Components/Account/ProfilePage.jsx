import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfilePage = (props) => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="row w-50 m-auto" style={{ height: "90vh" }}>
        <div className="col">
          <div className="row fw-bold border-bottom ps-4 pt-5 pb-4">
            Profile Details
          </div>
          <div className="row pt-4" style={{ height: "60vh" }}>
            <div className="row ps-4">
              <div className="col-4">Name</div>
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
            <Link to={"/user/editProfile"} className="btn btn-danger">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
