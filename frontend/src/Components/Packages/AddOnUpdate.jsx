import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddOnsService from "../../Service/AddOnsService";
import RegisterFormIndicator from "../Register/RegisterFormIndicator";

const AddOnUpdate = (props) => {
  const addon = useSelector((state) => state.addonpack);

  const [title, setTitle] = useState(addon.addonTitle);
  const [description, setDescription] = useState(addon.addonDescription);
  const [price, setPrice] = useState(addon.addonPrice);

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
      console.log("Addon Pack updated success");
      newMessage = "Updation is successful";
      return true;
    }
    setMessage(newMessage);
    console.log("Addon Pack not updated......");
    setIndicator("message");
    console.log("Addon Pack not got updated");
    return false;
  };

  const handleUpdate = async () => {
    console.log("updating");
    setIndicator("spinner");
    if (inputIsValid()) {
      console.log("updatingg......");
      const data = await AddOnsService.updateAddOn({
        addonId: addon.addonId,
        addonTitle: title,
        addonDescription: description,
        addonPrice: price,
      });
      if (data === "AddOn updated successfully") {
        console.log("updated");
        navigate("/user/addons");
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
            placeholder="AddOn Title"
            required={true}
          />
        </div>

        <div className="col">
          <input
            onChange={handleDescription}
            value={description}
            type="text"
            className="login-input d-block m-auto"
            placeholder="AddOn Description"
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
            placeholder="AddOn Price"
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

export default AddOnUpdate;
