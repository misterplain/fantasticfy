import axios from "axios";

export default axios.create({
//   baseURL: "https://activeserver.onrender.com/fantasticfy/api",
  baseURL: "http://localhost:5000/api/",
});