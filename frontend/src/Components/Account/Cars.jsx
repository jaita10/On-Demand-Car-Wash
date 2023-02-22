import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCar } from "../../Actions/CarAction";
import CarService from "../../Service/CarService";

const Cars = (props) => {
  const [packList, setPackList] = useState([]);

  const [refresh, setRefresh] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let serial = 0;

  const getPacks = async () => {
    const data = await CarService.getAllCars();
    setPackList(data.carList);
    console.log(packList);
  };

  useEffect(() => {
    console.log(props.select);
    getPacks();
  }, []);

  useEffect(() => {
    getPacks();
  }, [refresh]);

  const handleDelete = async (carId) => {
    console.log("deleting");
    console.log("deletingg......");
    const data = await CarService.deleteCar(carId);
    if (data === "Car deleted successfully") {
      console.log("deleted successfully....");
      // navigate("/user/cars");
      setRefresh((previousRefresh) => !previousRefresh);
    }
  };

  const handleUpdate = (car) => {
    dispatch(setCar(car));
    navigate("/user/updatecar");
  };

  const handleSelect = (car) => {
    dispatch(setCar(car));
    navigate("/user/book");
  };

  return (
    <>
      <div className="container-fluid d-flex flex-wrap">
        {packList?.map((element) => {
          return (
            <div className="car-item">
              <div
                className="pack-image"
                style={{
                  backgroundImage: `url(/carimages/Car_${++serial}.jpg)`,
                }}
              ></div>
              <h2 className="p-2 fw-bold">{element.carType}</h2>
              {/* <label for="exampleColorInput" className="form-label">
                Color picker
              </label> */}
              <p className="py-0 px-2 fs-5">
                {/* <input
                  type="color"
                  className="form-control form-control-color "
                  id="exampleColorInput"
                  value={element.carColor}
                  title="Choose your color"
                  disabled
                /> */}
                {element.carColor} Color
              </p>
              <p className="fs-5 py-0 px-2">{element.carNumber}</p>
              <p className="d-flex justify-content-between">
                {props.select ? (
                  <>
                    <button
                      onClick={() => {
                        handleUpdate(element);
                      }}
                      type="button"
                      className="btn ms-5 buttonc"
                    >
                      UPDATE
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(element.carId);
                      }}
                      type="button"
                      className="btn me-5 buttonc"
                    >
                      DELETE
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      handleSelect(element);
                    }}
                    type="button"
                    className="btn me-5 buttonc ms-5"
                  >
                    SELECT
                  </button>
                )}
              </p>
            </div>
          );
        })}
      </div>
      <Link
        className="pack-add d-flex justify-content-center align-items-center text-yellow ms-4 mb-4"
        to={"/user/addCar"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          fill="currentColor"
          className="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </Link>
    </>
  );
};

export default Cars;
