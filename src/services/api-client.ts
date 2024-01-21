import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b4218326e0064353a3330ed4625226d8",
  },
});
