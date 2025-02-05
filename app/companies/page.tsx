'use client'

import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import DatasDisplayer from "../components/DatasDisplayer";

export default function CompaniesPage() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/company");
                setCompanies(response.data);
            } catch  {}
        };

        fetchCompanies();
    }, []);

    return (
        <main>
            <Header />

            <DatasDisplayer title="All Companies" data={ companies } columns={[
                    { key: "name", label: "Name" },
                    { key: "tva", label: "TVA" },
                    { key: "country", label: "Country" },
                    { key: "type", label: "Type" },
                    { key: "created_at", label: "Created at" }
                ]} searchPlaceholder="Search company" />

            <Footer />
        </main>
    );
}