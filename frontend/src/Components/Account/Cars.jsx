import { useEffect, useState } from "react";
import CarService from "../../Service/CarService";

const Cars = (props) => {
  const [packList, setPackList] = useState([]);

  let serial = 0;

  const getPacks = async () => {
    const data = await CarService.getAllCars();
    setPackList(data.carList);
    console.log(packList);
  };

  useEffect(() => {
    getPacks();
  }, []);

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
              <h2 className="p-2">{element.carType}</h2>
              {/* <label for="exampleColorInput" className="form-label">
                Color picker
              </label> */}
              <p className="py-0 px-2"><input
                type="color"
                className="form-control form-control-color "
                id="exampleColorInput"
                value={element.carColor}
                title="Choose your color"
                disabled
              /></p>
              <p className="fs-5 py-0 px-2">{element.carNumber}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cars;
