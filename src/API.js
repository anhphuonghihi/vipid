import axios from "axios";
const API = axios.create({ baseURL: "http://191.96.31.204:1337" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token") && localStorage.getItem("client")) {
    req.headers["x-access-token"] = localStorage.getItem("token");
    req.headers["x-client-id"] = localStorage.getItem("client");
  }
  req.headers["Content-Type"] = "application/json";
  req.headers["x-api-key"] =
    "z8j1jklsdmnfoiflksadnm23kszfhru38437823jhk12mn393u232";
  return req;
});

export default API;
