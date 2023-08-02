import React from 'react'
import UserNav from './UserNav'
import { useParams } from "react-router-dom";
import UserForm from './UserForm';


const User = () => {
    const { handle } = useParams();
    const nav = [{ to: "/user/profile", icon: "fa-user", title: "My Profile" },
    { to: "/user/donate", icon: "fa-hand-holding-medical", title: "Donate Blood" },
    { to: "/user/request", icon: "fa-rotate", title: "Blood Request" },
    ];
    return (
        <div className='flex w-full h-96'>
            <UserNav data={nav} />
            <div className='ml-96 w-full flex justify-center pr-24'>
                {handle === "donate" && <UserForm />}
                {handle === "request" && <UserForm />}
            </div>
        </div>
    )
}

export default User