import React, { useState, useEffect, useContext } from "react";
import logo from "../../assest/logo.png";
import { Outlet, Link } from "react-router-dom";
import DropDown from "../Util/DropDown";
import axios from "../Api"
import AuthContext from "../context/AuthContext";

const Navbar = (props) => {
    const s1 =
        "bg-white-900 drop-shadow-lg mx-3 px-7 py-2 rounded-md text-base font-medium hover:drop-shadow-xl hover:px-10 dark:hover:bg-midnight dark:hover:drop-shadow-dark-lg";
    const [theme, setTheme] = useState(0);
    const { getLoggedIn } = useContext(AuthContext);
    const doc = document.documentElement.classList;
    useEffect((e) => {
        let t = localStorage.getItem("theme");
        if (!t) {
            localStorage.setItem("theme", 0);
        }
        t = localStorage.getItem("theme");
        setTheme(t);
        if (t == 1) {
            doc.add("dark");
        }
    }, []);
    return (
        <>
            <nav className="p-3 bg-white-900 sticky top-0 z-10 dark:bg-gray-bg">
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <div className="flex items-center justify-between">
                            <img
                                className="h-20 w-auto ml-1"
                                src={logo}
                                draggable={false}
                                alt=""
                            />
                            <div className="text-3xl font-bold ml-2 text-blood">
                                HemoSys
                            </div>
                        </div>
                    </Link>
                    <div className="flex items-left justify-between">
                        <>
                            <DropDown title="More" children={["Home", "About HemoSys"]} links={["/", "/about"]}></DropDown>
                            {props.logIn ? (
                                <>
                                    <Link
                                        to={`/${props.user}/profile`}
                                        className={s1}
                                    >
                                        <i className="fa-solid fa-user"></i>
                                    </Link>
                                    <Link
                                        to="/"
                                        onClick={async () => {
                                            await axios.get("/auth/logout", { withCredentials: true }).then((r) => { });
                                            await getLoggedIn();
                                        }}
                                        className={s1}
                                    >
                                        Log Out
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <DropDown title="Receive Blood" children={[" Login/Register"]} links={["/register/patient"]}></DropDown>
                                    <DropDown title="Donate Blood" children={["Donor Login/Register", "About Blood Donation"]} links={["/register/donor", "/aboutBloodDonation"]}></DropDown>
                    
                                </>
                            )}
                       
                        </>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;
