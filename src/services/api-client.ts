import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6c15b7b1b41940ed8a62009da9f6030d",
  },
});
