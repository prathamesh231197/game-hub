import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "191d70548ab249bc8f58a01e5272fe6d",
  },
});
