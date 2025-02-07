"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import DatasDisplayer from "../components/DatasDisplayer";
import Footer from "../components/Footer";

interface Company {
    id: number;
    name: string;
    tva: string;
    country: string;
    created_at: string;
    type: string;
}

export default function CompaniesPage() {
    const [companies, setCompanies] = useState<Company[]>([]);
    const limit = 10;
    const offset = 0;

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/ascSortedCompanies/${limit}/${offset}`);
                setCompanies(response.data);
            } catch (error) {
                console.error("Error fetching companies:", error);
            }
        };

        fetchCompanies();
    }, [limit, offset]);

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