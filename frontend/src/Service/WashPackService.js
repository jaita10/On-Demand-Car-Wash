import axios from "axios";

const WashPackService = {
  getAllWashPacks: async () => {
    // let config = {
    //     headers: {
    //         Authorization: localStorage.getItem("JWT"),
    //     },
    // };
    const data = await axios
      .get("http://localhost:8100/washers/WashPack/list")
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },

  getFilteredWashPacks: async () => {
    const data = await axios
      .get("http://localhost:8100/washers/WashPack/filter")
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },

  addWashPack: async (pack) => {
    const data = await axios
        .post("http://localhost:8100/washers/WashPack/add", pack)
        .then((response) => response.data)
        .catch((error) => console.log(error))
        console.log(data);
        return data;
},
};

export default WashPackService;
