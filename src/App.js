import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Status from "./components/status/Status";
import StatusView from "./components/status/StatusView";
import Signin from "./components/register/Signin";
import Signup from "./components/register/Signup";
import { useEffect } from "react";
import Profile from "./components/profile/Profile";

function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/signIn");
    }else{
      navigate("/")
    }
  }, [token]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/status" element={<Status />} />
      <Route path="/status/:userId" element={<StatusView />} />
      <Route path="/signIn" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
