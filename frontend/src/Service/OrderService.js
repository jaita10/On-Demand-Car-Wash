import axios from "axios";

const OrderService = {
  getOrdersList: async () => {
    const data = await axios
      .get("http://localhost:8100/orders/list")
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },

  addOrder: async (orderpack) => {
    const data = await axios
      .post("http://localhost:8100/orders/add", orderpack)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },

  updateOrder: async (orderpack) => {
    const data = await axios
      .put("http://localhost:8100/orders/update", orderpack)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },

  deleteOrder: async (orderId) => {
    console.log(orderId);

    const config = {
      data: {
        stringList: [orderId],
      },
    };

    console.log(config);

    const data = await axios
      .delete("http://localhost:8100/orders/delete", config)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },
};

export default OrderService;
