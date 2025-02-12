// src/Dashboard.jsx
import React, { useEffect, useState } from "react";

/*
This is just a super simple, copy pasted from a dear friend of ours for a quick use of the dashboard to verify that we are passing things correctly... i guess?
*/

const Dashboard = () => {
    const [email, setEmail] = useState(null);

    useEffect(() => {
        // Retrieve the stored email from localStorage
        const userEmail = localStorage.getItem("userEmail");
        if (userEmail) {
            setEmail(userEmail);
        } else {
            // If no email is found, redirect back to login
            window.location.href = "/sign-in"; // or navigate using useNavigate
        }
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold">Dashboard</h1>
                <p className="mt-4 text-lg text-gray-600">Hello, {email ? email : "User"}!</p>
            </div>
        </div>
    );
};

export default Dashboard;
