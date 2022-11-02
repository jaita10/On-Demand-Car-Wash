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

  addCar: async (carpack) => {
    const data = await axios
      .post("http://localhost:8100/users/pack/add", carpack)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },

  getCarTypeById: async (id) => {
    let config = {
      headers: {
        "Content-Type": "text/plain",
      },
    };
    
    const data = await axios
      .post("http://localhost:8100/users/car/TypeById", id, config)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },

  updateCar: async (carpack) => {
    const data = await axios
      .put("http://localhost:8100/users/car/update", carpack)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },

  deleteCar: async (carId) => {
    console.log(carId);

    const config = {
      data: {
        stringList: [carId],
      },
    };

    console.log(config);

    const data = await axios
      .delete("http://localhost:8100/users/car/delete", config)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },
};

export default CarService;
