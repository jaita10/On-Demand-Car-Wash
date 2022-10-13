import axios from "axios";

const CarService = {
  getAllCars: async () => {
    const data = await axios
      .get("http://localhost:8100/users/car/list")
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },

  getFilteredAddOns: async () => {
    const data = await axios
      .get("http://localhost:8100/users/car/filter")
      .then((response) => response.data)
      .catch((error) => console.log(error));
      console.log(data);
      return data;
  },
};

export default CarService;
