import axios from "axios";

const AddOnsService = {
  getAllAddOns: async () => {
    const data = await axios
      .get("http://localhost:8100/washers/AddOn/list")
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },

  getFilteredAddOns: async () => {
    const data = await axios
      .get("http://localhost:8100/washers/AddOn/filter")
      .then((response) => response.data)
      .catch((error) => console.log(error));
      console.log(data);
      return data;
  },
};

export default AddOnsService;
