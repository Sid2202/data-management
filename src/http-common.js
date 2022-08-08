import axios from "axios";
export default axios.create({
  baseURL: "https://resto-menu-analysis.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  }
});