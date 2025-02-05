'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import DatasDisplayer from "../components/DatasDisplayer";
import Footer from "../components/Footer";

export default function InvoicePage() {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/invoice");
                console.log("Données reçues depuis l'API:", response.data);
                setInvoices(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des factures:", error);
            }
        };

        fetchInvoices();
    }, []);

    return (
        <main>
            <Header />

            <DatasDisplayer
                title="All Invoices"
                data={invoices}
                columns={[
                    { key: "ref", label: "Invoice Number" },
                    { key: "due_date", label: "Due Date" },
                    { key: "id_company", label: "Company" },
                    { key: "created_at", label: "Created at" }
                ]}
                searchPlaceholder="Search invoice"
            />

            <Footer />
        </main>
    );
}