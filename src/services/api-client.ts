import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fa650e30ab6a4751a288875826d387e8",
  },
});
