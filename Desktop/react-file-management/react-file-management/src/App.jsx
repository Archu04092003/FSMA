import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import {Login, Register, HomePage, Dashboard} from "./Pages";
import { checkIsLoggedIn } from "./redux/actionCreators/authActionCreator";

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(checkIsLoggedIn());
  },[]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<Dashboard/>} />
      </Routes>
    </div>
  );
};

export default App;
