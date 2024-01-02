import axios from "axios";
export const BASE_API_URL = "http://localhost:/8080";
export const TOKEN =
"eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlIGZvciBjaGF0IiwiaWF0IjoxNzA0MTcxMDI1LCJleHAiOjE3MDQyNTc0MjUsImVtYWlsIjoidXNlckBnbWFpbC5jb20ifQ.77UdIgp7WCLmZF27H3WiqqfS9LhxswRkSCY6NmvcUg4";
export const httpsService = ({
  method,
  path,
  data = null,
  params = null,
  success = () => {},
  error = () => {},
}) => {
  // const token = localStorage.getItem("token");
  const token =TOKEN
      axios({
    baseURL: "",
    url: path,
    data,
    params,
    method,
    headers: {
      Authorization: "bearer " + token,
    },
  })
    .then((res) => {
      success(res?.data);
    })
    .catch((e) => {
      error(e);
    });
};
