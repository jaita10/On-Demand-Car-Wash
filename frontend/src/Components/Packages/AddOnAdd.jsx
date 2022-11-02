import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddOnsService from "../../Service/AddOnsService";
import RegisterFormIndicator from "../Register/RegisterFormIndicator";

const AddOnAdd = (props) => {
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
      console.log("AddOn added success");
      newMessage = "Addition is successful";
      return true;
    }
    setMessage(newMessage);
    console.log("AddOn not added......");
    setIndicator("message");
    console.log("AddOn not got added");
    return false;
  };

  const handleAdd = async () => {
    console.log("adding");
    setIndicator("spinner");
    if (inputIsValid()) {
      console.log("addingg......");
      const data = await AddOnsService.addAddOn({
        addonTitle: title,
        addonDescription: description,
        addonPrice: price,
      });
      if (data === "New AddOn saved successfully") {
        console.log("added");
        navigate("/user/addons");
      }
    }
  };

  return (
    <div className="container">
      <RegisterFormIndicator indicator={indicator} message={message} />

      <div>
        <div className="card-body text-center w-50 mx-auto">
          <div className="rounded" id="packTitle">
            <h3 className="card-title mb-5 fs-1 py-2">ADD ADDON</h3>
          </div>
        </div>
      </div>

      <div className="row mb-3 m-3">
        <div className="row mt-5 mb-3">
          <input
            onChange={handleTitle}
            value={title}
            type="text"
            className="login-input d-block m-auto p-2 fs-4 text-center w-50 rounded"
            placeholder="AddOn Title"
            required={true}
          />
        </div>

        <div className="row mt-4 mb-3">
          <input
            onChange={handleDescription}
            value={description}
            type="text"
            className="login-input d-block m-auto p-2 fs-4 text-center w-50 rounded"
            placeholder="AddOn Description"
          />
        </div>

        <div className="row mt-4 mb-3">
          <input
            onChange={handlePrice}
            value={price}
            type="text"
            className="login-input d-block m-auto p-2 fs-4 text-center w-50 rounded"
            placeholder="AddOn Price"
          />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
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

export default AddOnAdd;
