import { useState } from "react";
import { useSelector } from "react-redux";
import AddOnOrder from "./AddOnOrder";
import CarOrder from "./CarOder";
import WashPackOrder from "./WashPackOrder";

const OrderPage = (props) => {
  const {washpack, addonpack} = useSelector(state=> state)

  // const total = useSelector((state) => state.total);

  const calculateTotal = ()=>{
    let total = 0;
    total += washpack.washpackPrice || 0;
    addonpack?.forEach((element)=>{
      total+= element.addonPrice || 0;
    })
    console.log(total)
    return total;
  }

  return (
    <>
      <div className="container-fluid p-3">
        <CarOrder />

        <WashPackOrder />

        <AddOnOrder />

        <div className="container-fluid fw-bold fs-2 text-center">
          Total: Rs. {calculateTotal()}
        </div>
      </div>
    </>
  );
};

export default OrderPage;
