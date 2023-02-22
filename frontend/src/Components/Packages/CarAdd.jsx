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
        <div className="card-body text-center w-50 mx-auto">
          <div className="rounded" id="packTitle">
            <h3 className="card-title mb-5 fs-1 py-2">ADD CAR</h3>
          </div>
        </div>
      </div>

      <div className="row mb-3 m-3">
        <div className="row mt-3 mb-3">
          <label
            className="col-auto fw-bold fs-4 m-3 ps-5 text-center "
            htmlFor="carTypeInput"
          >
            CAR TYPE :{" "}
          </label>
          <div className="col">
            <input
              onChange={handleType}
              value={type}
              type="text"
              className="login-input d-block m-3 p-2 fs-4 text-center w-50 rounded"
              placeholder="CAR TYPE"
              required={true}
            />
          </div>
        </div>

        <div className="row mt-3 mb-3">
          <label
            className="col-auto fw-bold fs-4 m-3 ps-5 text-center "
            htmlFor="carColorInput"
          >
            SELECT YOUR CAR COLOR :{" "}
          </label>
          <div className="col">
            <select
              className="form-select d-block m-3 fs-5 ps-0 text-center w-60 rounded"
              aria-label="Default select example"
              onChange={handleColor}
              value={color}
            >
              <option defaultValue={null}>CAR COLOR</option>
              <option value="BLACK">BLACK</option>
              <option value="PINK">PINK</option>
              <option value="YELLOW">YELLOW</option>
              <option value="WHITE">WHITE</option>
              <option value="GREEN">GREEN</option>
              <option value="BLUE">BLUE</option>
              <option value="RED">RED</option>
              <option value="GREY">GREY</option>
              <option value="BROWN">BROWN</option>
              <option value="PURPLE">PURPLE</option>
            </select>
          </div>

          {/* <input
            value={color}
            type="box"
            className="form-control m-auto"
            placeholder="Choose your car color"
          /> */}
        </div>

        <div className="row mt-4 mb-3">
          <label
            className="col-auto fw-bold fs-4 m-3 ps-5 text-center "
            htmlFor="carNumberInput"
          >
            CAR NUMBER :{" "}
          </label>
          <div className="col">
            <input
              onChange={handleNumber}
              value={number}
              type="text"
              className="login-input d-block m-auto p-2 fs-4 text-center w-50 rounded"
              placeholder="CAR NUMBER"
            />
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col ">
          <button
            onClick={handleAdd}
            type="submit"
            className="btn btn-outline d-block m-auto fs-2 px-3 py-2 rounded text-white border border-white"
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
