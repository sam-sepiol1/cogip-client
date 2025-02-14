"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import DatasDisplayer from "../components/DatasDisplayer";
import Footer from "../components/Footer";
import { checkAuth } from "../utils/checkAuth";

interface Company {
    id: number;
    name: string;
    tva: string;
    country: string;
    created_at: string;
    type: string;
}

export default function CompaniesPage() {
    checkAuth();
    const [companies, setCompanies] = useState<Company[]>([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/ascSortedCompanies/10/0`);
                setCompanies(response.data.data);
            } catch (error) {
                console.error("Error fetching companies:", error);
            }
        };

        fetchCompanies();
    }, []);

    return (
        <main>
            <Header />

            <DatasDisplayer
                title="All Companies"
                data={ companies }
                columns={[
                    { key: "name", label: "Name" },
                    { key: "tva", label: "TVA" },
                    { key: "country", label: "Country" },
                    { key: "type", label: "Type" },
                    { key: "created_at", label: "Created at" }
                ]}
                searchPlaceholder="Search company"
            />
            <Footer />
        </main>
    );
}