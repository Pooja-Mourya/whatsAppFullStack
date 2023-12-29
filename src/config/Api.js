import axios from "axios";
export const BASE_API_URL = "http://localhost:/8080";
export const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlIGZvciBjaGF0IiwiaWF0IjoxNzAzODMzNDQyLCJleHAiOjE3MDM5MTk4NDIsImVtYWlsIjoibmljZUBnbWFpbC5jb20ifQ.jUTrr31zXn2ZFQuZ_ODRAytKhZhI_pKOkWH1IHUnU5Q";
export const httpsService = ({
  method,
  path,
  data = null,
  params = null,
  success = () => {},
  error = () => {},
}) => {
  const token = localStorage.getItem("token");
  axios({
    baseURL: BASE_API_URL,
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


