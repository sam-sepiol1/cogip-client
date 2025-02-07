'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

import Home_header from "./components/Home_header";
import DatasDisplayer from "./components/DatasDisplayer";
import Home_slogan from "./components/Home_slogan";
import Footer from "@/app/components/Footer";


interface Invoice {
    id: number;
    ref: string;
    due_date: string;
    id_company: number;
    created_at: string;
}

interface Contact {
    id: number;
    name: string;
    phone: string;
    email: string;
    company_id: number;
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

export default function HomePage() {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [companies, setCompanies] = useState<Company[]>([]);
    const limit = 10;
    const offset = 0;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const invoicesRes = await axios.get<Invoice[]>(`http://localhost:3000/api/paginatedInvoices/${limit}/${offset}`);
                const contactsRes = await axios.get<Contact[]>(`http://localhost:3000/api/sortedAscContacts/${limit}/${offset}`);
                const companiesRes = await axios.get<Company[]>(`http://localhost:3000/api/ascSortedCompanies/${limit}/${offset}`);

                setInvoices(invoicesRes.data);
                setContacts(contactsRes.data);
                setCompanies(companiesRes.data);

                console.log("Invoices:", invoicesRes.data);
                console.log("Contacts:", contactsRes.data);
                console.log("Companies:", companiesRes.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [limit, offset]);

    console.log("Companies available :", companies);

    const formattedInvoices = invoices.map(invoice => {
        console.log(`Looking a company for id_company=${invoice.id_company}`);
        const company = companies.find(c => c.id === invoice.id_company);

        if (!company) {
            console.warn(`No companies found for id_company=${invoice.id_company}`);
        }

        return {
            ...invoice,
            company: company ? company.name : "Unknown"
        };
    });

    const formattedContacts = contacts.map(contact => {
        console.log(`Looking a company for company_id=${contact.company_id}`);
        const company = companies.find(c => c.id === contact.company_id);

        if (!company) {
            console.warn(`No companies found for company_id=${contact.company_id}`);
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
                    data={formattedInvoices.map(invoice => ({ ...invoice, key: invoice.id }))}
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