import React, { useState, useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from "../Api";
import mapboxgl from "mapbox-gl";
import "./map.css";

let Auth = (props) => {
    axios.defaults.withCredentials = true;

    const { type, handle } = useParams();
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("male");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [blood, setBlood] = useState(0);
    const [auth, setAuth] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const { getLoggedIn } = useContext(AuthContext);
    let [formData] = useState({});
    const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    const navigate = useNavigate();
    const s1 = "mx-2 px-9 py-2 font-semibold rounded-full shadow-sm text-white-900 bg-blood hover:drop-shadow-md hover:opacity-80 cursor-pointer";
    useEffect(() => {
        setAuth(type === "register" ? 0 : 1);
    }, [type]);

    useEffect(() => {
        if (longitude === 0) return;
        mapboxgl.accessToken = 'pk.eyJ1IjoiY29yb2JvcmkiLCJhIjoiY2s3Y3FyaWx0MDIwbTNpbnc4emxkdndrbiJ9.9KeSiPVeMK0rWvJmTE0lVA';

        var map = new mapboxgl.Map({
            container: 'map', style: 'mapbox://styles/mapbox/streets-v12',
            center: [longitude, latitude], zoom: 10.7
        });
        new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
    }, [latitude, longitude]);

    let signUp = async (e) => {
        e.preventDefault();
            formData = {
                name: name,
                age: age,
                gender: gender,
                bloodGroup: bloodGroups[blood],
                email: mail,
                password: password,
                phone: phone,
                address: address,
            };
        

        await axios.post(`/auth/${handle}`, formData, { withCredentials: true }).then(async (res) => { }, (err) => alert(err.response.data.errorMessage));
        await getLoggedIn();
        navigate(`/${handle === "user" ? handle : "user"}/profile`)
    };

    const logIn = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                phone: phone,
                password: password,
            };
            await axios.post(`/auth/login/{handle}`, formData, { withCredentials: true }).then(async (res) => { });
            await getLoggedIn();
            navigate(`/${handle === "user" ? handle : "user"}/profile`)
        } catch (err) {
            alert(err.response.data.errorMessage);
        }
    }

    const fetchGeo = async () => {
        await navigator.geolocation.getCurrentPosition((p) => {
            setLatitude(p.coords.latitude);
            setLongitude(p.coords.longitude);
        }, () => {
            alert("Please allow location access");
            setLatitude(0);
            setLongitude(0);
        }, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });

    };

    return (
        <div className="dark:bg-gray-bg">
            <section className="flex justify-center items-center">
                <div className={`bg-white-900 rounded-xl p-6 w-${auth === 0 ? "10/12" : "4/12"} mt-5 drop-shadow-2xl pb-10 dark:drop-shadow-dark-2xl`}>
                    <form
                        className="space-y-7"
                        action=""
                        onSubmit={auth === 0 ? signUp : logIn}
                    >
                        <fieldset className="border border-solid border-gray-300 px-12 py-5">
                            <legend className={`text-2xl font-bold mb-1 ${auth === 1 && "text-center"}`}>
                                &nbsp;{(handle === "donor" ? "Donor" : "Patient")} {(auth === 0 ? "Sign Up" : "Log In")}&nbsp;
                            </legend>
                            <legend align="right">
                                <input type="button" formAction=""
                                    onClick={() => { navigate(`/${auth === 0 ? "login" : "register"}/${handle}`); setAuth(auth === 0 ? 1 : 0); }}
                                    className={s1} value={auth !== 0 ? "Sign Up" : "Log In"} />
                            </legend>
                            <p></p>
                            {auth === 0 ? <><fieldset className="border border-solid border-gray-300 px-7 py-5 pb-7">
                              

                                <div className="grid grid-cols-3 gap-4">
                                    <div className="col-span-2"><label className="font-semibold leading-8">{handle === "bank" && "Blood Bank "}Name:<font color="red">*</font></label>
                                        <input
                                            className="w-full p-3 text-md border border-silver rounded"
                                            type="text"
                                            placeholder={handle !== "Enter your full name"}
                                            required
                                            onChange={(e) => setName(e.target.value)}
                                        /></div>
                                    
                                 
                                    
                                        <><div><label className="font-semibold  leading-8">Age:<font color="red">*</font></label>
                                            <input
                                                className="w-full p-3 text-md border border-silver rounded"
                                                type="number"
                                                placeholder="Enter your age"
                                                required
                                                onChange={(e) => setAge(e.target.value)}
                                            /></div>
                                            <div><label for="gender" className="font-semibold  leading-8">Gender:<font color="red">*</font></label>
                                                <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)} className="w-full p-3 text-md border border-silver rounded" >
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select></div>
                                            <div>
                                                <label for="blood" className="font-semibold  leading-8">Blood Group:<font color="red">*</font></label>
                                                <select name="blood" id="address" onChange={(e) => setBlood(e.target.value)} className="w-full p-3 text-md border border-silver rounded">
                                                    {
                                                        bloodGroups.map((e, i) => <option value={i}>{e}</option>)
                                                    }
                                                </select>
                                            </div>
                                            <div> <label className="font-semibold  leading-8">Email:</label>
                                                <input
                                                    className="w-full p-3 text-md border border-silver rounded"
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    onChange={(e) => setMail(e.target.value)}
                                                /></div></>
                                    
                                    <div><label className="font-semibold  leading-8">{auth === 0 ? "Mobile:" : "Username:"}<font color="red">*</font></label>
                                        <input
                                            className="w-full p-3 text-md border border-silver rounded"
                                            type="number"
                                            placeholder={handle !=="Enter your mobile"}
                                            required
                                            onChange={(e) => setPhone(e.target.value)}
                                        /></div>
   
                                    <div>
                                        <label className="font-semibold  leading-8">Password:</label><font color="red">*</font>
                                        <input
                                            className="w-full p-3 text-md border border-silver rounded"
                                            type="password"
                                            placeholder={handle !== "Enter your password"}
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                          

                                
                                          
                                        <div className="col-span-2"><label className="font-semibold  leading-8">Address:<font color="red">*</font></label>
                                            <input
                                                className="w-full p-3 text-md border border-silver rounded"
                                                type="text"
                                                placeholder="Enter your complete address"
                                                onChange={(e) => setAddress(e.target.value)}
                                                required
                                            /></div>
                                    

                                    {
                                        <>
                                            <br />
                                            <div>
                                                <label className="font-semibold leading-7">Location:<font color="red">*</font></label></div>
                                            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1rem" }}>
                                                <div className="w-full" style={{ gridColumn: "2/4", gridRow: "1/3" }}>
                                                    <div id="map" className="w-full h-[200px]"></div></div>
                                                <div style={{ gridColumn: "1", gridRow: "1/2" }}>
                                                    <input
                                                        className="w-full p-3 text-md border border-silver rounded"
                                                        type="number"
                                                        step="0.01"
                                                        placeholder="Latitude"
                                                        disabled
                                                        value={latitude}
                                                        onChange={(e) => setLatitude(e.target.value)}
                                                        required
                                                    /><br /><br />
                                                    <input
                                                        className="w-full p-3 text-md border border-silver rounded"
                                                        type="number"
                                                        step="0.01"
                                                        placeholder="Longitude"
                                                        disabled
                                                        value={longitude}
                                                        onChange={(e) => setLongitude(e.target.value)}
                                                        required
                                                    />
                                                    <button type="button" className="bg-purple text-center text-white-900 rounded-lg mt-4 px-4 py-2" onClick={() => fetchGeo()}>
                                                        Fetch Geocode
                                                    </button>

                                                </div>
                                            </div>
                                        </>
                                    }
                                </fieldset></>
                                :
                                <><div><label className="font-semibold  leading-8">Username:<font color="red">*</font></label>
                                    <input
                                        className="w-full p-3 text-md border border-silver rounded"
                                        type="number"
                                        placeholder="Enter your mobile"
                                        required
                                        onChange={(e) => setPhone(e.target.value)}
                                    /></div><br />
                                    <div>
                                        <label className="font-semibold  leading-8">Password:</label><font color="red">*</font>
                                        <input
                                            className="w-full p-3 text-md border border-silver rounded"
                                            type="password"
                                            placeholder="Enter your password"
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div></>}
                            <br />
                            <center><input
                                type="submit"
                                className={s1 + (auth === 0 && " w-4/12")}
                                disabled={auth === 0 && longitude === 0}
                                value={auth === 0 ? "Sign Up" : "Log In"}
                            /></center>
                        </fieldset>
                    </form>
                </div>
            </section>
            <br /><br /><br />
            <Outlet />
        </div>
    );
};

export default Auth;
