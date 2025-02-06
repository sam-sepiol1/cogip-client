'use client';

import Login_register_header from "@/app/components/Login_register_header";
import New_entry_form from "@/app/components/New_entry_form";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
    const [error, setError] = useState("");
    const router = useRouter();

    const [dto, setDto] = useState({
        email: '',
        password: ''
    });

    const handleChange = (name: string, value: string) => {
        setDto((prevDto) => ({
            ...prevDto,
            [name]: value
        }));
    };

    const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");

        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', dto);

            console.log("Login success:", response.data);
            router.push('/dashboard');

        } catch (error: any) {
            console.error("Error while login:", error);
            if (error.response) {
                setError(error.response.data.message || "Login failed, please try again.");
            } else {
                setError("An unexpected error occurred. Please check your connection.");
            }
        }
    };

    return (
        <main>
            <Login_register_header />
            <New_entry_form
                title="Please, Login to continue."
                fields={['email', 'password']}
                onChange={handleChange}
                onSubmit={handleSubmitForm}
                submitText="Login"
                placeholders={['Email', 'Password']}
                errorMessage={error}
            />
        </main>
    );
}