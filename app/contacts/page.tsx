"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { checkAuth } from "../utils/checkAuth";

import Header from "../components/Header";
import DatasDisplayer from "../components/DatasDisplayer";
import Footer from "../components/Footer";

interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
    company: string;
    created_at: string;
}

export default function ContactsPage() {
    checkAuth();
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                console.log("Retrieving contacts...");
                const response = await axios.get<Contact[]>(`http://localhost:3000/api/sortedAscContacts/10/0`);
                setContacts(response.data.data);
            } catch (error) {
                console.error("Error retrieving contacts :", error);
            }
        };

        fetchContacts();
    }, []);

    return (
        <main>
            <Header />

            <DatasDisplayer
                title="All Contacts"
                data={contacts}
                columns={[
                    { key: "name", label: "Name" },
                    { key: "phone", label: "Phone" },
                    { key: "email", label: "Mail" },
                    { key: "company", label: "Company" },
                    { key: "created_at", label: "Created at" }
                ]}
                searchPlaceholder="Search contact"
            />

            <Footer />
        </main>
    );
}