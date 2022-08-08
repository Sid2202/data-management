import axios from "axios";
export default axios.create({
  baseURL: "https://resto-menu-analysis.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  }
});