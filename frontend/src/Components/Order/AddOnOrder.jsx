import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { removeFromCart } from "../../Actions/AddOnAction";
import { removeFromAddOnTotal, setWashPackPrice } from "../../Actions/TotalAction";

const AddOnOrder = (props) => {
  const addonList = useSelector((state) => state.addonpack);

  const [refresh, setRefresh] = useState(true);

  const dispatch = useDispatch();

  const handleDelete = (addonId , price) => {
    dispatch(removeFromCart(addonId));
    dispatch(removeFromAddOnTotal(price))
    setRefresh((previousRefresh) => !previousRefresh);
  };

  useEffect(() => {}, [refresh]);

  return (
    <>
      <div className="container-fluid d-flex flex-wrap p-0 ">
        {addonList?.map((element) => {
          return (
            <div
              className="slot-item border p-2 text-center fw-bold fs-4 position-relative me-3 mb-3 "
              key={element.addonId}
              style={{
                backgroundImage: `url(/washimages/AddOn_1.jpg)`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              {element.addonTitle || "No Addon Title Selected"}
              <button
                onClick={() => handleDelete(element.addonId, element.addonPrice)}
                className="btn buttonc p-2 position-absolute end-0 bottom-0 m-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
              </button>
            </div>
          );
        })}

        <Link
          to={"/user/selectaddon"}
          role="button"
          className="slot-item border p-2 text-center fw-bold fs-4 position-relative text-yellow me-3 mb-3"
        >
          <span className="position-absolute top-50 start-50 translate-middle text-nowrap">
            ADD ADD-ONS
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-cart-plus bottom-50 position-absolute translate-middle"
            viewBox="0 0 16 16"
          >
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default AddOnOrder;
