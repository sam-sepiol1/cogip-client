'use client'

import Login_register_header from "@/app/components/Login_register_header";
import React, {useState} from "react";
import axios from "axios";
import New_entry_form from "@/app/components/New_entry_form";
import {redirect} from "next/navigation";

export default function Register() {
    const [dto, setDto] = useState({
        first_name: '',
        last_name: '',
        role_id: 3, // Temporairement ajouté comme "membre"
        email: '',
        password: ''
    });

    const [error, setError] = useState("");

    const handleChange = (name: string, value: string) => {
        setDto((prevDto) => ({
            ...prevDto,
            [name]: value
        }));
    };

    const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/auth/register', dto);
            console.log(response);

            redirect('http:localhost:3001/dashboard');


        } catch (error) {
            console.log("IL N'Y A PAS D'ERREUR !!")
            setError(`${error.response.data.message}, please try again.`);
            console.error('Error while registering:', error.response.data.message);
        }
    };

    return (
        <main>
            <Login_register_header/>
            <New_entry_form
                title="Welcome ! Let's start by creating your account"
                fields={["first_name", "last_name", "email", "password"]}
                placeholders={["John", "Doe", "Email", "Password"]}
                onChange={handleChange}
                onSubmit={handleSubmitForm}
                submitText="C'est parti"
                errorMessage={error}
            />
            )
        </main>
    )
}
