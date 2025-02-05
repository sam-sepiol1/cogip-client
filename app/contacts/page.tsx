'use client'

import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import DatasDisplayer from "../components/DatasDisplayer";

export default function ContactsPage() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/contact");
                setContacts(response.data);
            } catch  {}
        };

        fetchContacts();
    }, []);

    return (
        <main>
            <Header />

            <DatasDisplayer title="All Contacts" data={ contacts } columns={[
                    { key: "name", label: "Name" },
                    { key: "phone", label: "Phone" },
                    { key: "email", label: "Mail" },
                    { key: "company_id", label: "Company" },
                    { key: "created_at", label: "Created at" }
                ]} searchPlaceholder="Search contact" />

            <Footer />
        </main>
    );
}
