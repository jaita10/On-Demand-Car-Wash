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

  addAddOn: async (addonpack) => {
    const data = await axios
      .post("http://localhost:8100/washers/AddOn/add", addonpack)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },

  updateAddOn: async (addonpack) => {
    const data = await axios
      .put("http://localhost:8100/washers/AddOn/update", addonpack)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },

  deleteAddOn: async (addonId) => {
    console.log(addonId);

    const config = {
      data: {
        stringList: [addonId],
      },
    };

    console.log(config);

    const data = await axios
      .delete("http://localhost:8100/washers/AddOn/delete", config)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },

};

export default AddOnsService;
