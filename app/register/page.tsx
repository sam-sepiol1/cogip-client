'use client'

import Login_register_header from "@/app/components/Login_register_header";
import React, { useState } from "react";
import axios from "axios";
import New_entry_form from "@/app/components/New_entry_form";

export default function Register() {
    const [dto, setDto] = useState({
        first_name: '',
        last_name: '',
        role_id: 1,
        email: '',
        password: ''
    });

    const [ error, setError ] = useState("");

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
            console.log(response.data);
            console.log("Compte créé avec succès");
        } catch (error) {
            setError(error.response.data.message);
            console.error('Error while registering:', error.response.data.message);
        }
    };

    return (
        <main>
            <Login_register_header/>
            <New_entry_form
                title="Commençons par créer votre compte"
                fields={["first_name", "last_name", "email", "password"]}
                placeholders={["John", "Doe", "Email", "Password"]}
                onChange={handleChange}
                onSubmit={handleSubmitForm}
                submitText="C'est parti"
                errorMessage={error}
            />
        </main>
    )
}
