// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import Registration from "./components/Registration";
import Login from "./components/Login";
import UserComponent from "./components/UserComponent";
import Admin from "./components/Admin";
import NewProduct from "./components/NewProduct";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Admin />} />
          <Route path="/user" element={<UserComponent/>} />
          <Route path="/new/product" element={<NewProduct/>} />

          
        </Routes>
      </Router>
    </>
  );
}

export default App;
