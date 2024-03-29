import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CarService from "../../Service/CarService";
import RegisterFormIndicator from "../Register/RegisterFormIndicator";

const CarUpdate = (props) => {
  const car = useSelector((state) => state.carpack);

  const [type, setType] = useState(car.carType);
  const [color, setColor] = useState(car.carColor);
  const [number, setNumber] = useState(car.carNumber);

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
      console.log("Car Pack updated success");
      newMessage = "Updation is successful";
      return true;
    }
    setMessage(newMessage);
    console.log("Car Pack not updated......");
    setIndicator("message");
    console.log("Car Pack not got updated");
    return false;
  };

  const handleUpdate = async () => {
    console.log("updating");
    setIndicator("spinner");
    if (inputIsValid()) {
      console.log("updatingg......");
      const data = await CarService.updateCar({
        carId: car.carId,
        carType: type,
        carColor: color,
        carNumber: number,
      });
      if (data === "Car updated successfully") {
        console.log("updated");
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
            <h3 className="card-title mb-5 fs-1 py-2">UPDATE CAR</h3>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <input
            onChange={handleType}
            value={type}
            type="text"
            className="login-input d-block m-auto"
            placeholder="Car Type"
            required={true}
          />
        </div>

        <div className="col">
          <select
            className="form-select"
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
      </div>

      <div className="row mb-3">
        <div className="col">
          <input
            onChange={handleNumber}
            value={number}
            type="text"
            className="login-input d-block m-auto"
            placeholder="Car Number"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <button
            onClick={handleUpdate}
            type="submit"
            className="btn btn-outline d-block m-auto fs-3 px-3 py-1 rounded text-white"
            id="packBox"
          >
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarUpdate;
