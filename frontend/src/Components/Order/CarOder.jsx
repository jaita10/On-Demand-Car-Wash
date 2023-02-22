import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CarOrder = (props) => {
  const car = useSelector((state) => state.carpack);
  return (
    <>
      <div className="container-fluid border mb-3">
        <div className="row m-2">
          <div
            className="col-5 ms-1"
            style={{
              backgroundImage: `url(/carimages/car_6.jpg)`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="col ms-3 my-3">
            <div className="row mb-2 fs-bold">
              {props.car.carType || "No Car Type Selected"} <br />{" "}
            </div>
            <div className="row mb-2 fs-bold">
            {props.car.carColor || "No Car Color Selected"} <br />{" "}
            </div>
            <div className="row mb-2 fs-bold">
            {props.car.carNumber || "No Car Number Selected"}
            </div>
            {/* {props.car.carType || "No Car Type Selected"} <br />{" "}
            {props.car.carColor || "No Car Color Selected"} <br />{" "}
            {props.car.carNumber || "No Car Number Selected"} */}
          </div>
          <div className="col-2 d-flex align-items-center">
            <Link
              to={"/user/selectcar"}
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

export default CarOrder;
