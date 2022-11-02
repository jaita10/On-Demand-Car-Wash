import React from "react";
import { Link } from "react-router-dom";
import CommonNav from "./CommonNav";

const FallBackPage = (props) => {
  return (
    <>
      <div>
        <CommonNav />
        <div
          className=""
          style={{
            backgroundImage: `url("./carwash_main.jpg")`,
            backgroundSize: "cover",
            height: "90vh",
          }}
        >
          <div className="conatiner-fluid p-5" id="fall-block">
            <div className="ms-5 fs-1 fw-bold">WORK IN PROGRESSS!!!!</div>
            <div className="ms-5 fs-4" style={{ width: "40%" }}>
              LOST!! Consider returning to the Homepage.
            </div>
            <Link className="btn btn-light m-5" to={"/"}>
              HOMEE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FallBackPage;
