import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useContext } from 'react';
import AuthContext from "./Components/context/AuthContext";
import Home from "./Components/Main/Home";
import Navbar from "./Components/Main/Navbar";
import About from "./Components/Main/About";
import Events from "./Components/Main/Events";
import AboutDonation from "./Components/Main/AboutDonation";
import Auth from "./Components/Auth/Auth";
import User from "./Components/User/User";
import "./App.css";

export default function App() {
  const { loggedIn, user } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar logIn={loggedIn} user={loggedIn && user.latitude ? "bank" : "user"} />}>
            <Route index element={<Home />} />
            {!loggedIn && <>
              <Route path="/:type/:handle" element={<Auth logIn={loggedIn} />} />
            </>}
            loggedIn && (user.hospital 
              <Route path="/user/:handle?" element={<div><User /></div>} />)
            <Route path="about" element={<About />} />
            <Route path="aboutBloodDonation" element={<AboutDonation />} />
            <Route path="Event" element={<Events />} />

            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}



