import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import MyJob from "./Components/pages/MyJob/MyJob";
import MyPayment from "./Components/pages/MyPayment/MyPayment";
import HomeF from "./Components/pages/HomeF";
import MyOfferletter from "./Components/pages/MyOfferletter/MyOfferletter";
import MyCertificate from "./Components/pages/MyCertificate/MyCertificate";

function App() {
  return (
    <Router>
     <Routes>
     <Route className="App" exact path="/" element={<HomeF/>}>
        </Route>  
        <Route className="App" exact path="/my-job" element={<MyJob/>}>
        </Route>  
        <Route className="App" exact path="/my-payment" element={<MyPayment/>}>
        </Route>   
        <Route className="App" exact path="/my-offerlatter" element={<MyOfferletter/>}>
        </Route>   
        <Route className="App" exact path="/my-certificate" element={<MyCertificate/>}>
        </Route>   
    </Routes>
    </Router>
  );
}

export default App;
