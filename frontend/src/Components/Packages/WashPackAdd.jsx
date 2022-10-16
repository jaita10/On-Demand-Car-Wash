import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WashPackService from "../../Service/WashPackService";
import RegisterFormIndicator from "../Register/RegisterFormIndicator";

const WashPackAdd = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [indicator, setIndicator] = useState("blank");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const inputIsValid = () => {
    let newMessage = "";
    if (title === "") {
      newMessage = "Title is mandatory";
    } else if (description === "") {
      newMessage = "Description is mandatory";
    } else if (price === "") {
      newMessage = "Price is mandatory";
    } else {
      setIndicator("blank");
      console.log("WashPack added success");
      newMessage = "Addition is successful";
      return true;
    }
    setMessage(newMessage);
    console.log("WashPack not added......");
    setIndicator("message");
    console.log("WashPack not got added");
    return false;
  };

  const handleAdd = async () => {
    console.log("adding");
    setIndicator("spinner");
    if (inputIsValid()) {
      console.log("addingg......");
      const data = await WashPackService.addWashPack({
        washpackTitle: title,
        washpackDescription: description,
        washpackPrice: price,
      });
      if (data === "New WashPack saved successfully") {
        console.log("added");
        navigate("/user/washpacks");
      }
    }
  };

  return (
    <div className="container">
      <RegisterFormIndicator indicator={indicator} message={message} />

      <div className="row mb-3">
        <div className="col">
          <input
            onChange={handleTitle}
            value={title}
            type="text"
            className="login-input d-block m-auto"
            placeholder="WashPack Title"
            required={true}
          />
        </div>

        <div className="col">
          <input
            onChange={handleDescription}
            value={description}
            type="text"
            className="login-input d-block m-auto"
            placeholder="WashPack Description"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <input
            onChange={handlePrice}
            value={price}
            type="text"
            className="login-input d-block m-auto"
            placeholder="WashPack Price"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <button
            onClick={handleAdd}
            type="submit"
            className="btn btn-outline d-block m-auto fs-3 px-3 py-1 rounded text-white"
            id="packBox"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default WashPackAdd;
