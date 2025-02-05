'use client'

import { useEffect, useState } from "react";
import axios from "axios";

import Footer from "@/app/components/Footer";
import Home_header from "./components/Home_header";
import DatasDisplayer from "./components/DatasDisplayer";
import contactsData from "./components/Contacts";
import Home_slogan from "./components/Home_slogan";

import Image from "next/image";

export default function HomePage() {
    const [invoices, setInvoices] = useState([]);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/invoice");
                setInvoices(response.data);
            } catch {
            }
        };

        const fetchCompanies = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/company");
                setCompanies(response.data);
            } catch {
            }
        };

        fetchInvoices();
        fetchCompanies();
    }, []);

    return (
        <main>
            <Home_header />

            <div className="relative">
                <DatasDisplayer className="titlePage" title="Last invoices" data={ invoices } columns={[
                    { key: "ref", label: "Invoice number" },
                    { key: "due_date", label: "Due Dates" },
                    { key: "id_company", label: "Company" },
                    { key: "created_at", label: "Created at" }
                ]} limit={5} isHome={true} />

                <div className="absolute right-0 mt-[-30px]">
                    <Image src="/Home/Home-decoration_book.svg" alt="Book decoration" width={177} height={138} />
                </div>
            </div>

            <div className="relative mt-[80px]">
                <DatasDisplayer className="titlePage" title="Last contacts" data={ contactsData } columns={[
                        { key: "name", label: "Name" },
                        { key: "phone", label: "Phone" },
                        { key: "mail", label: "Mail" },
                        { key: "company", label: "Company" },
                        { key: "created", label: "Created at" }
                    ]} limit={5} isHome={true} />

                <div className="absolute left-[-55px] top-full mt-[-30px] transform rotate-[30deg]">
                    <Image src="/Home/e8f22fa8e9926850f515778113c009c2-2.png" alt="Lightbulb decoration" width={181} height={141.25} />
                </div>
            </div>

            <div className="mt-[80px]">
            <DatasDisplayer className="titlePage" title="Last companies" data={ companies } columns={[
                    { key: "name", label: "Name" },
                    { key: "tva", label: "TVA" },
                    { key: "country", label: "Country" },
                    { key: "type", label: "Type" },
                    { key: "created_at", label: "Created at" }
                ]} limit={5} isHome={true} />
            </div>

            <Home_slogan />
            <Footer />
        </main>
    );
}