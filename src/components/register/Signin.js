import { Alert, Button, Snackbar } from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/apiServices/AuthService";

function Signin() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [token, setToken] = useState(null)

  const [loginUser] = useLoginUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenSnackBar(true);
    try {
      const response = await loginUser(inputData);
      if (response.data && response.data.jwt) {
        localStorage.setItem("token", response.data.jwt);
        setToken(response.data.jwt);
      }
      
      setInputData({ email: "", password: "" });
     
      navigate("/");
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSnackBar = () => {
    setOpenSnackBar(!openSnackBar);
  };

  return (
    <div>
      <div className="flex justify-center h-screen items-center">
        <div className="w-[30%] p-10 shadow-md bg-white">
        <form onSubmit={inputData.email && inputData.password ? handleSubmit : (e) => { e.preventDefault(); alert("Enter user credential"); }} className="space-y-5">
 
            <div>
              <p className="md-2">Email</p>
              <input
                placeholder="Enter your Email"
                onChange={handleChange}
                type="text"
                value={inputData.email}
                name="email"
                className="py-2 outline outline-green-600 w-full rounded-md border"
              />
            </div>
            <div>
              <p className="md-2">Password</p>
              <input
                placeholder="Enter your Password"
                onChange={handleChange}
                type="password"
                value={inputData.password}
                name="password"
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
                SignIn{" "}
              </Button>
            </div>
            <div className="flex space-x-5 items-center mt-5">
              <p>Create New Account</p>
              <Button variant="text" onClick={() => navigate("/signup")}>
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
      {token ? (
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
            This is a success message!
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
            This is a warning message!
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}

export default Signin;
