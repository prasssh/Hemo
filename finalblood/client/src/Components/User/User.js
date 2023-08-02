import React from 'react'
import UserNav from './UserNav'
import { useParams } from "react-router-dom";
import UserForm from './UserForm';
import Event from './Event';

const User = () => {
    const { handle } = useParams();
    const nav = [{ to: "/user/profile", icon: "fa-user", title: "My Profile" },
    { to: "/user/donate", icon: "fa-hand-holding-medical", title: "Donate Blood" },
    { to: "/user/donations", icon: "fa-clock-rotate-left", title: "Donation History" },
    { to: "/user/camps", icon: "fa-location-dot", title: "Blood Donation Camps" },
    { to: "/user/request", icon: "fa-rotate", title: "Blood Request" },
    { to: "/user/requests", icon: "fa-clock-rotate-left", title: "Request History" }];
    return (
        <div className='flex w-full h-96'>
            <UserNav data={nav} />
            <div className='ml-96 w-full flex justify-center pr-24'>
                {handle === "donate" && <UserForm />}
                {handle === "request" && <UserForm />}
                {handle === "events" && <Event />}
            </div>
        </div>
    )
}

export default User
