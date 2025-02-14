'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { checkAuth } from "./utils/checkAuth";

import Home_header from "./components/Home_header";
import DatasDisplayer from "./components/DatasDisplayer";
import Home_slogan from "./components/Home_slogan";
import Footer from "@/app/components/Footer";

interface Invoice {
    id: number;
    ref: string;
    due_date: string;
    company: string;
    created_at: string;
}

interface Contact {
    id: number;
    name: string;
    phone: string;
    email: string;
    company: string;
    created_at: string;
}

interface Company {
    id: number;
    name: string;
    tva: string;
    country: string;
    type: string;
    created_at: string;
}

interface ApiResponse<T> {
    data: T;
}

export default function HomePage() {
    checkAuth();
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [companies, setCompanies] = useState<Company[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const invoicesRes = await axios.get<ApiResponse<Invoice[]>>(`http://localhost:3000/api/paginatedInvoices/5/0`);
                const contactsRes = await axios.get<ApiResponse<Contact[]>>(`http://localhost:3000/api/sortedAscContacts/5/0`);
                const companiesRes = await axios.get<ApiResponse<Company[]>>(`http://localhost:3000/api/ascSortedCompanies/5/0`);

                setInvoices(invoicesRes.data.data);
                setContacts(contactsRes.data.data);
                setCompanies(companiesRes.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const formattedInvoices = invoices.map(invoice => {
        const company = companies.find(c => c.name === invoice.company);

        if (!company) {
            console.warn(`No companies found for company=${invoice.company}`);
        }

        return {
            ...invoice,
            company: company ? company.name : "Unknown"
        };
    });

    const formattedContacts = contacts.map(contact => {
        const company = companies.find(c => c.name === contact.company);

        if (!company) {
            console.warn(`No companies found for company=${contact.company}`);
        }

        return {
            ...contact,
            company: company ? company.name : "Unknown"
        };
    });

    return (
        <main>
            <Home_header />

            <div className="relative">
                <DatasDisplayer
                    className="titlePage"
                    title="Last invoices"
                    data={formattedInvoices.map(invoice => ({ ...invoice, key: invoice.ref }))}
                    columns={[
                        { key: "ref", label: "Invoice number" },
                        { key: "due_date", label: "Due Dates" },
                        { key: "company", label: "Company" },
                        { key: "created_at", label: "Created at" }
                    ]}
                    limit={5}
                    isHome={true} />

                <div className="absolute right-0 mt-[-30px]">
                    <Image src="/Home/Home-decoration_book.svg" alt="Book decoration"
                           width={177} height={138} />
                </div>
            </div>

            <div className="relative mt-[80px]">
                <DatasDisplayer
                    className="titlePage"
                    title="Last contacts"
                    data={formattedContacts}
                    columns={[
                        { key: "name", label: "Name" },
                        { key: "phone", label: "Phone" },
                        { key: "email", label: "Mail" },
                        { key: "company", label: "Company" },
                        { key: "created_at", label: "Created at" }
                    ]} limit={5} isHome={true} />

                <div className="absolute left-[-55px] top-full mt-[-30px] transform rotate-[30deg]">
                    <Image src="/Home/e8f22fa8e9926850f515778113c009c2-2.png" alt="Lightbulb decoration"
                           width={181} height={141.25} />
                </div>
            </div>

            <div className="mt-[80px]">
                <DatasDisplayer
                    className="titlePage"
                    title="Last companies"
                    data={companies}
                    columns={[
                        { key: "name", label: "Name" },
                        { key: "tva", label: "TVA" },
                        { key: "country", label: "Country" },
                        { key: "type", label: "Type" },
                        { key: "created_at", label: "Created at" }
                    ]}
                    limit={5}
                    isHome={true} />
            </div>

            <Home_slogan />
            <Footer />
        </main>
    );
}
