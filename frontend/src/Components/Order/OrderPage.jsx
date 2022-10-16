import { useState } from "react";
import { useSelector } from "react-redux";
import AddOnOrder from "./AddOnOrder";
import CarOrder from "./CarOder";
import WashPackOrder from "./WashPackOrder";

const OrderPage = (props) => {
  // const car = useSelector((state) => state.carpack);

  const total = useSelector((state) => state.total);

  return (
    <>
      <div className="container-fluid p-3">
        <CarOrder />

        <WashPackOrder />

        <AddOnOrder />

        <div className="container-fluid fw-bold fs-2 text-center">
          Total: Rs. {total.washpackPrice + total.addonTotal}
        </div>
      </div>
    </>
  );
};

export default OrderPage;
