import { Link, useNavigate } from "react-router-dom";

const DropHome = (props) => {
  const handleHover = () => {
    console.log("mouse is on the button ");
    document.getElementById("dropdownButton").click();
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("JWT", "");
    navigate("/");
  };

  const LoginButton = () => {
    return (
      <Link
        type="button"
        className="btn btn-outline-light ms-5 mb-2 mt-2 fs-7 text-1 d-block end-0"
        style={{
          width: "max-content",
          marginLeft: "0%",
          borderBlockColor: "#cddc39",
          width: "60%",
        }}
        to={"/login"}
      >
        LOGIN
      </Link>
    );
  };

  const RegisterButton = () => {
    return (
      <Link
        type="button"
        className="btn btn-outline-light ms-5 mb-2 mt-2 fs-7 text-5"
        style={{ borderBlockColor: "#cddc39", width: "60%" }}
        to={"/register"}
      >
        REGISTER
      </Link>
    );
  };

  const LogoutButton = () => {
    return (
      <button
        type="button"
        className="btn btn-outline-light ms-5 mb-1 mt-2 fs-7 text-1"
        style={{ borderBlockColor: "#cddc39", width: "60%" }}
        onClick={handleLogout}
      >
        LOGOUT
      </button>
    );
  };

  return (
    <>
      <div className="dropdown d-inline">
        <button
          className="btn btn-secondary dropdown-toggle bg-dark me-5"
          type="button"
          id="dropdownButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onMouseEnter={() => handleHover()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </button>

        <ul
          className="dropdown-menu dropdown-menu-dark rounded-5"
          onMouseLeave={() => handleHover()}
        >
          {/* <Link
            type="button"
            className="btn btn-outline-light ms-5 mb-2 mt-2 fs-7 text-1 d-block end-0"
            style={{
              width: "max-content",
              marginLeft: "0%",
              borderBlockColor: "#cddc39",
              width: "60%",
            }}
            to={"/login"}
          >
            {LOGIN}
          </Link> */}

          {["", undefined].includes(localStorage.getItem("JWT")) ? (
            <>
            <LoginButton />
            <RegisterButton />
            </>
          ) : (
            <LogoutButton />
          )}

          {/* <Link
            type="button"
            className="btn btn-outline-light ms-5 mb-2 mt-2 fs-7 text-5"
            style={{ borderBlockColor: "#cddc39", width: "60%" }}
            to={"/register"}
          >
            REGISTER
          </Link> */}
          {/* <Link
            type="button"
            className="btn btn-outline-light ms-5 mb-1 mt-2 fs-7 text-1"
            style={{ borderBlockColor: "#cddc39", width: "60%" }}
            to={"/logout"}
          >
            LOGOUT
          </Link> */}
        </ul>
      </div>
    </>
  );
};

export default DropHome;
