import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Status from "./components/status/Status";
import StatusView from "./components/status/StatusView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/status" element={<Status/>}/>
      <Route path="/status/:userId" element={<StatusView/>}/>
    </Routes>
  );
}

export default App;
