'use client';

import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import DatasDisplayer from "../components/DatasDisplayer";
import Footer from "../components/Footer";

interface Invoice {
    id: number;
    ref: string;
    due_date: string;
    id_company: number;
    created_at: string;
    company: string;
}

export default function InvoicePage() {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const limit = 10;
    const offset = 0;

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                console.log("Retrieving invoices...");
                const response = await axios.get<Invoice[]>(`http://localhost:3000/api/paginatedInvoices/${limit}/${offset}`);
                console.log("Invoices recovered :", response.data);
                setInvoices(response.data);
            } catch (error) {
                console.error("Error retrieving invoices :", error);
            }
        };

        fetchInvoices();
    }, [limit, offset]);

    return (
        <main>
            <Header />

            <DatasDisplayer
                title="All Invoices"
                data={invoices}
                columns={[
                    { key: "ref", label: "Invoice Number" },
                    { key: "due_date", label: "Due Date" },
                    { key: "company", label: "Company" },
                    { key: "created_at", label: "Created at" }
                ]}
                searchPlaceholder="Search invoice"
            />

            <Footer />
        </main>
    );
}