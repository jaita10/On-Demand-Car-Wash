import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, setAddOn } from "../../Actions/AddOnAction";
import { Link, useNavigate } from "react-router-dom";
import AddOnsService from "../../Service/AddOnsService";
import { addToAddOnTotal } from "../../Actions/TotalAction";

const AddOns = (props) => {
  const [packList, setPackList] = useState([]);

  const [refresh, setRefresh] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let serial = 0;

  const getPacks = async () => {
    const data = await AddOnsService.getAllAddOns();
    setPackList(data.addonList);
    console.log(packList);
  };

  useEffect(() => {
    getPacks();
  }, []);

  useEffect(() => {
    getPacks();
  }, [refresh]);

  const handleDelete = async (addonId) => {
    console.log("deleting");
    console.log("deletingg......");
    const data = await AddOnsService.deleteAddOn(addonId);
    if (data === "AddOn deleted successfully") {
      console.log("deleted successfully....");
      // navigate("/user/addons");
      setRefresh((previousRefresh) => !previousRefresh);
    }
  };

  const handleUpdate = (addon) => {
    dispatch(setAddOn(addon));
    navigate("/user/updateaddon");
  };

  const handleSelect = (addonpack) => {
    dispatch(addToCart(addonpack));
    dispatch(addToAddOnTotal(addonpack.addonPrice));
    navigate("/user/book");
  };

  return (
    <>
      <div className="container-fluid d-flex flex-wrap">
        {packList?.map((element) => {
          return (
            <div className="pack-item">
              <div
                className="pack-image"
                style={{
                  backgroundImage: `url(/washimages/AddOn_${++serial}.jpg)`,
                }}
              ></div>
              <h2 className="p-2">{element.addonTitle}</h2>
              <div className="py-0 px-2 text-wrap">
                {element.addonDescription}
              </div>
              <p className="fs-5 py-0 px-2">Price: Rs. {element.addonPrice}</p>
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
                        handleDelete(element.addonId);
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
        className="pack-item d-flex justify-content-center align-items-center text-yellow"
        to={"/user/addAddOn"}
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

export default AddOns;
