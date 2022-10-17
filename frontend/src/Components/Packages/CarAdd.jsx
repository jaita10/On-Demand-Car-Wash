import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarService from "../../Service/CarService";
import RegisterFormIndicator from "../Register/RegisterFormIndicator";

const CarAdd = (props) => {
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [number, setNumber] = useState("");

  const [indicator, setIndicator] = useState("blank");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleType = (event) => {
    setType(event.target.value);
  };

  const handleColor = (event) => {
    setColor(event.target.value);
  };

  const handleNumber = (event) => {
    setNumber(event.target.value);
  };

  const inputIsValid = () => {
    let newMessage = "";
    if (type === "") {
      newMessage = "Type is mandatory";
    } else if (color === "") {
      newMessage = "Color is mandatory";
    } else if (number === "") {
      newMessage = "Number is mandatory";
    } else {
      setIndicator("blank");
      console.log("Car added success");
      newMessage = "Addition is successful";
      return true;
    }
    setMessage(newMessage);
    console.log("Car not added......");
    setIndicator("message");
    console.log("Car not got added");
    return false;
  };

  const handleAdd = async () => {
    console.log("adding");
    setIndicator("spinner");
    if (inputIsValid()) {
      console.log("addingg......");
      const data = await CarService.addCar({
        carType: type,
        carColor: color,
        carNumber: number,
      });
      if (data === "Car saved successfully") {
        console.log("added");
        navigate("/user/cars");
      }
    }
  };

  return (
    <div className="container">
      <RegisterFormIndicator indicator={indicator} message={message} />

      <div>
        <div className="card-body text-center w-50 align-middle ms-5">
          <div className="rounded" id="packTitle">
            <h3 className="card-title mb-5 fs-1 py-2">ADD CAR</h3>
          </div>
        </div>
      </div>

      <div className="row mb-3 m-3">
        <div className="row mt-5 mb-3">
          <input
            onChange={handleType}
            value={type}
            type="text"
            className="login-input d-block m-auto p-2 fs-4 text-center w-50 rounded"
            placeholder="Car Type"
            required={true}
          />
        </div>

        <div className="row mt-4 mb-3">
          <label
            className="col fw-bold fs-4 m-3 text-center"
            htmlFor="carColorInput"
          >
            SELECT YOUR CAR COLOR :{" "}
          </label>
          <input
            onChange={handleColor}
            type="color"
            className="form-control form-control-color mt-3 d-inline-block"
            id="carColorInput"
            value={color}
            title="Choose your color"
            placeholder="Car Color"
          />

          {/* <input
            value={color}
            type="box"
            className="form-control m-auto"
            placeholder="Choose your car color"
          /> */}
        </div>

        <div className="row mt-4 mb-3">
          <input
            onChange={handleNumber}
            value={number}
            type="text"
            className="login-input d-block m-auto p-2 fs-4 text-center w-50 rounded"
            placeholder="Car Number"
          />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col ">
          <button
            onClick={handleAdd}
            type="submit"
            className="btn btn-outline d-block m-auto fs-2 px-3 py-2 rounded text-white "
            id="packBox"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarAdd;
