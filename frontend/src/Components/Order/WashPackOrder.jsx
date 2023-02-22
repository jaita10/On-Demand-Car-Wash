import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WashPackOrder = (props) => {
  const washpack = useSelector((state) => state.washpack);
  
  return (
    <>
      <div className="container-fluid border mb-3">
        <div className="row">
          <div
            className="col-5 ms-2"
            style={{
              backgroundImage: `url(/washimages/WashPack_8.jpg)`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="col ms-3 my-3">
            <div className="row mb-2 fs-bold">
              {washpack.washpackTitle
                ? washpack.washpackTitle
                : "No Wash Title Selected"}{" "}
              <br />{" "}
            </div>
            <div className="row mb-2 fs-bold">
              {washpack.washpackDescription
                ? washpack.washpackDescription
                : "No Wash Description Selected"}{" "}
              <br />{" "}
            </div>
            <div className="row mb-2 fs-bold">
              {washpack.washpackPrice
                ? washpack.washpackPrice
                : "No Wash Price Selected"}
            </div>
          </div>
          <div className="col-2 d-flex align-items-center">
            <Link
              to={"/user/selectwashpack"}
              type="button"
              className="btn buttonc p-2 m-3"
            >
              CHANGE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WashPackOrder;
