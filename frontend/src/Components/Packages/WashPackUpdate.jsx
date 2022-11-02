import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WashPackService from "../../Service/WashPackService";
import RegisterFormIndicator from "../Register/RegisterFormIndicator";

const WashPackUpdate = (props) => {
  const washpack = useSelector((state) => state.washpack);

  const [title, setTitle] = useState(washpack.washpackTitle);
  const [description, setDescription] = useState(washpack.washpackDescription);
  const [price, setPrice] = useState(washpack.washpackPrice);

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
      console.log("WashPack updated success");
      newMessage = "Updation is successful";
      return true;
    }
    setMessage(newMessage);
    console.log("WashPack not updated......");
    setIndicator("message");
    console.log("WashPack not got updated");
    return false;
  };

  const handleUpdate = async () => {
    console.log("updating");
    setIndicator("spinner");
    if (inputIsValid()) {
      console.log("updatingg......");
      const data = await WashPackService.updateWashPack({
        washpackId: washpack.washpackId,
        washpackTitle: title,
        washpackDescription: description,
        washpackPrice: price,
      });
      if (data === "WashPack updated successfully") {
        console.log("updated");
        navigate("/user/washpacks");
      }
    }
  };

  return (
    <div className="container">
      <RegisterFormIndicator indicator={indicator} message={message} />

      <div>
        <div className="card-body text-center w-50 mx-auto">
          <div className="rounded" id="packTitle">
            <h3 className="card-title mb-5 fs-1 py-2">UPDATE WASHPACK</h3>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <input
            onChange={handleTitle}
            value={title}
            type="text"
            className="login-input d-block m-auto"
            placeholder="Title"
            required={true}
          />
        </div>

        <div className="col">
          <input
            onChange={handleDescription}
            value={description}
            type="text"
            className="login-input d-block m-auto"
            placeholder="Description"
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
            placeholder="Price"
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

export default WashPackUpdate;
