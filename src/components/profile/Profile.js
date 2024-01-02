import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsCheck2, BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { httpsService, TOKEN } from "../../config/Api";
import { Constants } from "../../config/Constants";
import axios from "axios";
import { Alert, Snackbar } from "@mui/material";

function Profile() {
  const navigate = useNavigate();
  const [flag, setFlag] = useState();
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState();
  const [imageUpload, setImageUpload] = useState("");
  const [profileError, setProfileError] = useState(" ");
  const [openSnackBar, setOpenSnackBar] = useState(false);

  // const token = localStorage.getItem("token");
  const token = TOKEN;

  // console.log("token : ", token);

  const handleSnackBar = () => {
    setOpenSnackBar(!openSnackBar);
  };

  const handleUpdateProfile = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        "http://localhost:8080/api/user/update",
        {
          displayName: inputValue,
          profilePicture:imageUpload
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUpdate(response.message);
      console.log("Update Profile Response:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  
  const handleImageUpload = async (e) => {
    try {
      const formData = new FormData();
      if (e.target.files) {
        formData.append("file", e.target.files[0]);
      }
      await httpsService({
        method: "POST",
        path: "http://localhost:8080/api/uploadFile",
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        success: (imageData) => {
          setImageUpload(imageData.fileDownloadUri);
          handleUpdateProfile()
          // console.log("imageData------", imageData);
        },
        error: (err) => {
          console.log("err------ ", err);
        },
      });
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  console.log("state ", imageUpload);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        setProfileError(error.message);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full h-full">
      <div className="flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5">
        <BsArrowLeft
          className="cursor-pointer text-2xl font-bold"
          onClick={() => navigate(-1)}
        />
        <p className="cursor-pointer font-semibold">Profile</p>
      </div>
      {/* update profile pic section */}
      <div className="flex flex-col justify-center items-center my-12">
        <label htmlFor="imgInput">
          <img
            className="rounded-full w-[15vw] h-[15vw] cursor-pointer"
            src="https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_640.jpg"
          />
        </label>
        <input
          type="file"
          id="imgInput"
          className="hidden"
          name="file"
          onChange={(e) => {
            handleImageUpload(e);
            // console.log("inner function ", imageUpload);
            // if (imageUpload === "") {
            //   handleUpdateProfile();
            //   console.log("useEffect function");
            // }
          }}
        />
      </div>
      {/* name section  */}
      <div className="p-3">
        <p className="py-3">{update ? update : data.displayName}</p>
        {!flag ? (
          <div className="w-fil; flex justify-between items-center">
            <p className="py-3">{inputValue || "display name"}</p>
            <BsPencil
              className="cursor-pointer"
              onClick={() => {
                setFlag(!flag);
              }}
            />
          </div>
        ) : (
          <div className="w-fil; flex justify-between items-center">
            <input
              name="displayName"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-[80%] outline-none border-b-2 border-blue-700 p-2"
            />
            <BsCheck2
              className="cursor-pointer text-2xl"
              onClick={() => {
                setFlag(false);
                handleUpdateProfile();
              }}
            />
          </div>
        )}
      </div>
      <div className="px-3 my-5">
        <p className="py-10">this is not your username, this name will </p>
      </div>
      {/* {profileError ?  (
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
            User not found exception warning!
          </Alert>
        </Snackbar>
      ): <Snackbar
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
    </Snackbar>} */}
    {profileError && <h1 style={{color:"orange"}}>user not found exception</h1>}
    </div>
  );
}

export default Profile;
