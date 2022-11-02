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

  addWashPack: async (washpack) => {
    const data = await axios
      .post("http://localhost:8100/washers/WashPack/add", washpack)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },

  getWashpackTitleById: async (id) => {
    const config = {
      headers: {
        "Content-Type": "text/plain",
      },
    };

    const data = await axios
      .post("http://localhost:8100/washers/WashPack/TitleById", id, config)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    console.log({id , config});
    return data;
  },

  updateWashPack: async (washpack) => {
    const data = await axios
      .put("http://localhost:8100/washers/WashPack/update", washpack)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },

  deleteWashPack: async (washpackId) => {
    console.log(washpackId);

    const config = {
      data: {
        stringList: [washpackId],
      },
    };

    console.log(config);

    const data = await axios
      .delete("http://localhost:8100/washers/WashPack/delete", config)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },
};

export default WashPackService;
