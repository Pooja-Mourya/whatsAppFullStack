import { Alert, Button, Snackbar } from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddUserMutation } from "../../redux/apiServices/AuthService";

function Signup() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [apiError, setApiError] = useState("");

  const [addUser, { isLoading, isError, isSuccess }] = useAddUserMutation();

  const handleApiError = (error) => {
    setApiError(error.message);
    console.error("API Error:", error.message);
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized access!");
    }
  };

  console.log("apiError : ", apiError);
  const handleSubmit = async (e) => {
    // e.preventDefault();
    setOpenSnackBar(true);

    try {
      const newUser = {
        ...inputData,
      };
      await addUser(newUser);
      setInputData({ email: "", password: "", username: "" });

      console.log("User added successfully!");
    } catch (error) {
      console.error("Failed to add user:", error);
      handleApiError(error);
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
          <form
            onSubmit={() =>
            !inputData?.email && !inputData?.password
                ? handleApiError()
                : handleSubmit()
            }
            className="space-y-5"
          >
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
            <h6 style={{ color: "red" }}>{apiError}</h6>
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
                {/* {isLoading ? "Signing up..." : "Sign Up"} */}
                Sign Up
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
      {isError && <h1>{isError.message}</h1>}
      {isSuccess ? (
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
