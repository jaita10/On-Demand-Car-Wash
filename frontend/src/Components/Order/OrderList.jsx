import { useEffect, useState } from "react";
import CarService from "../../Service/CarService";
import OrderService from "../../Service/OrderService";
import WashPackService from "../../Service/WashPackService";

const OrderList = (props) => {
  const [orderList, setOrderList] = useState([]);

  const fetchOrderList = async () => {
    const data = await OrderService.getOrdersList().then((response) => {
      setOrderList(response.orderList);
      return response.orderList;
    });
    console.log(data);
  };

  useEffect(() => {
    console.log("entering use effect");
    fetchOrderList();
    console.log("after entering use effect");
  }, []);

  let serial = 0;

  const dateToString = (str) => {
    let date = new Date(str);
    return date.toLocaleDateString("fr-CH");
  };

  return (
    <>
      <div className="container-fluid py-2 px-4">
        <div className="row bg-secondary bg-opacity-50 order-head text-center border border-dark py-2 rounded-3">
          <div className="col-1 p-0">S.No.</div>
          <div className="col-2 p-0">Date</div>
          <div className="col-3 p-0">Wash Pack</div>
          <div className="col-2 p-0">Car Type</div>
          <div className="col-2 p-0">Amount</div>
          <div className="col-2 p-0">Status</div>
        </div>
        {orderList?.map((element) => {
          return (
            <div
              key={serial}
              className="row bg-danger bg-opacity-50 order-head text-center border border-dark py-2 rounded-3 my-2"
            >
              <div className="col-1 p-0">{++serial}</div>
              <div className="col-2 p-0">
                {dateToString(element.bookingTime)}
              </div>
              <div className="col-3 p-0">{element.washpackTitle}</div>
              <div className="col-2 p-0">{element.carType}</div>
              <div className="col-2 p-0">{element.amount}</div>
              <div className="col-2 p-0">{element.orderStatus}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OrderList;
