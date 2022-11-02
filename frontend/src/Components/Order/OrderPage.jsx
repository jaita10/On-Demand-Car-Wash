import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrderService from "../../Service/OrderService";
import AddOnOrder from "./AddOnOrder";
import CarOrder from "./CarOder";
import WashPackOrder from "./WashPackOrder";

const OrderPage = (props) => {
  const { washpack, addonpack: addonList } = useSelector((state) => state);
  const car = useSelector((state) => state.carpack);

  const navigate = useNavigate();

  // const total = useSelector((state) => state.total);

  const calculateTotal = () => {
    let total = 0;
    total += washpack.washpackPrice || 0;
    addonList?.forEach((element) => {
      total += element.addonPrice || 0;
    });
    console.log(total);
    return total;
  };

  const handleCheckout = async () => {
    const order = {
      carId: car.carId,
      washPackId: washpack.washpackId,
      addOnIdList: {stringList : addonList.map((addon) => addon.addonId)},
      amount: calculateTotal(),
      orderStatus: "PENDING",
      carType: car.carType,
      washpackTitle: washpack.washpackTitle,
    }
    console.log(order);
    await OrderService.addOrder(order);
    navigate("/user/orderlist");
  };

  const handleCancel = async () => {
    navigate("/user/profile");
  };

  return (
    <>
      <div className="container-fluid p-3">
        <CarOrder car={car} />

        <WashPackOrder />

        <AddOnOrder />

        <div className="container-fluid fw-bold fs-2 text-center">
          Total: Rs. {calculateTotal()}
        </div>

        <div className="row mb-3 mt-4">
          <div className="col">
            <button
              onClick={handleCheckout}
              type="submit"
              className="btn btn-outline d-block m-auto fs-3 px-3 py-1 rounded text-white border-white"
              id="registerBox"
            >
              CHECKOUT
            </button>
          </div>
          <div className="col">
            <button
              onClick={handleCancel}
              type="submit"
              className="btn btn-outline btn-danger d-block m-auto fs-3 px-3 py-1 rounded text-white"
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
