import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CarOrder = (props) => {
  const car = useSelector((state) => state.carpack);
  return (
    <>
      <div className="container-fluid border mb-3">
        {/* <div className="row">
            <div className="col">car picture</div>
            <div className="col">car details</div>
          </div> */}
        <div className="row">
          <div className="col">
            {car.carType ? car.carType : "No Car Type Selected"} <br />{" "}
            {car.carColor ? car.carColor : "No Car Color Selected"} <br />{" "}
            {car.carNumber ? car.carNumber : "No Car Number Selected"}
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
