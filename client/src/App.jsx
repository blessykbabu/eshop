// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomeComponent from "./components/HomeComponent";
import Registration from "./components/Registration";
import Login from "./components/Login";
import UserComponent from "./components/UserComponent";
import Admin from "./components/Admin";
import NewProduct from "./components/NewProduct";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import ResetPassword from './components/ResetPassword';
import Seller from './components/Selller';
import { Logout } from './components/Logout';
import Products from './components/Product';
// import Profile from './components/profile';
import Product_Details from './components/Product_Deatails';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout/>}/>

          <Route path="/admin/dashboard/*" element={<Admin />} />
          <Route path="/user/*" element={<UserComponent/>} />
          {/* <Route path="/user/profile" element={<Profile/>} /> */}

          <Route path="/seller/*" element={<Seller/>} />

          {/* <Route path="/add/product" element={<NewProduct/>} /> */}
          <Route path="/shop" element={<Products/>} />
          <Route path="/order/product/:id" element={<Product_Details/>} />



          {/* <Route path="/forgot/password" element={<ResetPassword/>} /> */}


          
        </Routes>
        <Footer/>
      </Router>
      
      {/* <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/registration" component= {Registration}/>
          <Route path="/login" component= {Login}/>
          <Route path="/admin/dashboard" component= {Admin}/>
          <Route path="/user" component= {UserComponent/>}/>
          <Route path="/new/product" component= {<NewProduct/>}/>




        </Switch>
        <Footer/>
      </div>
    </Router> */}
    
    </>
  );
}

export default App;
