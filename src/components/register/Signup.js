import { Alert, Button, Snackbar } from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { httpsService } from "../../config/Api";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [data, setData] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenSnackBar(true);
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        { ...inputData, }
      );
      console.log("signup response : ", response);
      setLoading(false);
      setInputData({ email: "", password: "", username: "" });
      if (response) {
        navigate("/signIn");
      }
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSnackBar = () => {
    setOpenSnackBar(!openSnackBar);
  };

  loading && <p>Loading...</p>
  return (
    <div>
      <div className="flex justify-center h-screen items-center">
        <div className="w-[30%] p-10 shadow-md bg-white">

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <p className="md-2">User Name</p>
              <input
                placeholder="Enter your User Name"
                onChange={(e) => handleChange(e)}
                type="text"
                name="username"
                value={inputData.username}
                className="py-2 outline outline-green-600 w-full rounded-md border"
              />
            </div>
            <div>
              <p className="md-2">Email</p>
              <input
                placeholder="Enter your Email"
                onChange={(e) => handleChange(e)}
                type="text"
                name="email"
                value={inputData.email}
                className="py-2 outline outline-green-600 w-full rounded-md border"
              />
            </div>
            <div>
              <p className="md-2">Password</p>
              <input
                placeholder="Enter your Password"
                onChange={(e) => handleChange(e)}
                type="password"
                name="password"
                value={inputData.password}
                className="py-2 outline outline-green-600 w-full rounded-md border"
              />
            </div>
            <div>
              <Button
                variant={"contained"}
                className="w-full bg-green-600"
                type="submit"
                sx={{ backgroundColor: green[900], padding: ".5rem 0rem" }}
              >
                {" "}
                Sign Up{" "}
              </Button>
            </div>
            <div className="flex space-x-5 items-center mt-5">
              <p>If you are a registered user </p>
              <Button
                variant="text"
                onClick={() => {
                  navigate("/signin");
                }}
              >
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>
      {data ? (
        <Snackbar
          open={openSnackBar}
          autoHideDuration={6000}
          onClose={handleSnackBar}
        >
          <Alert
            onClose={handleSnackBar}
            severity="success"
            sx={{ width: "100%" }}
          >
            User registered successfully!
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar
          open={openSnackBar}
          autoHideDuration={6000}
          onClose={handleSnackBar}
        >
          <Alert
            onClose={handleSnackBar}
            severity="warning"
            sx={{ width: "100%" }}
          >
            User registration warning!
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}

export default Signup;
