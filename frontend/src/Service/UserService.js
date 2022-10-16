import axios from "axios";

const UserService = {
  validateCredentials: async (username, password) => {
    const request = {
      username: username,
      password: password,
    };

    const data = await axios
      .post("http://localhost:8100/users/authenticate", request)
      .then((response) => response.data)
      .catch((error) => console.log(error));

    // if (username === "username" && password === "password") return true;

    if (data === undefined) return false;
    if (data.jwt === "Failed") return false;

    localStorage.setItem("JWT", `Bearer ${data.jwt}`);
    return true;
  },

  getUser: async () => {
    let config = {
      headers: {
        Authorization: localStorage.getItem("JWT"),
      },
    };
    const data = await axios
      .get("http://localhost:8100/users/getUsers", config)
      .then((response) => response.data)
      .catch((error) => console.log(error));

    if (data == null) return null;
    return data;
  },

  addUser: async (user) => {
    const data = await axios
      .post("http://localhost:8100/users/add", user)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },

  updateUser: async (user) => {
    const data = await axios
      .put("http://localhost:8100/washers/users/update", user)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },

  deleteUser: async (userId) => {
    console.log(userId);

    const config = {
      data: {
        stringList: [userId],
      },
    };

    console.log(config);

    const data = await axios
      .delete("http://localhost:8100/washers/users/delete", config)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  },


};

export default UserService;
