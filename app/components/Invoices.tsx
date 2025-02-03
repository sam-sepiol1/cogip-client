"use client";

import {useState} from "react";
import SearchBar from "../components/Search_bar";
import "../globals.css";

interface SortConfig {
    key: string;
    direction: "ascending" | "descending";
}

interface Invoice {
    id: number;
    invoiceNumber: number;
    dueDates: string;
    company: string;
    created: string;
}

export default function Invoices() {
    // Mock data for the table
    // TODO : Delete this when backend is ready and connected
    const testData = [
        {
            id: 1,
            invoiceNumber: 123456789,
            dueDates: "30/12/2023",
            company: "fSociety",
            created: "15/10/2023"
        },
        {
            id: 2,
            invoiceNumber: 987654321,
            dueDates: "08/04/2024",
            company: "Heisenberg",
            created: "27/07/2024"
        },        
        {
            id: 3,
            invoiceNumber: 555123456,
            company: "Dunder Mifflin",
            dueDates: "29/01/2025",
            created: "31/03/2025"
        }
    ]

    const [filteredData, setFilteredData] = useState<Invoice[]>(testData);
    const [sortConfig, setSortConfig] = useState<SortConfig>({key: "",direction: "ascending",});

    const handleSearch = (query: string) => {
        if (!query) {
            setFilteredData(testData);
            return;
        }

        const filtered = testData.filter((invoice) =>
            invoice.dueDates.includes(query)
        );

        setFilteredData(filtered);
    };

    const handleSort = (key: keyof Invoice) => {
        let direction: "ascending" | "descending" = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }

        const sortedData = [...filteredData].sort((a, b) => {
            if (key === "dueDates") {
                if (!a[key] || !b[key]) return 0;

                const dateA = new Date(a[key].split("/").reverse().join("-"));
                const dateB = new Date(b[key].split("/").reverse().join("-"));

                return direction === "ascending" ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
            } else {

                return direction === "ascending"
                    ? String(a[key]).localeCompare(String(b[key]))
                    : String(b[key]).localeCompare(String(a[key]));
            }
        });

        setFilteredData(sortedData);
        setSortConfig({ key, direction });
    };

    const renderSortIcon = (key: keyof Invoice) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === "ascending" ? "▲" : "▼";
        }
        return "▼";
    };

	return (
        <main className="px-[136px]">
            <div className="px-5 mt-5 grid grid-cols-2 items-center">
                <h3 className="titlePage title">All invoices</h3>
                <div className="justify-self-end mt-[90px]">
                    <SearchBar placeholder="Search contact" onSearch={handleSearch}/>
                </div>
            </div>

            <table className="table-auto w-full mt-10">
                <thead className="titleTable">
                <tr className='background-yellow'>
                        <th className="p-4">Invoice Number</th>
                        <th className="p-4 cursor-pointer" onClick={() => handleSort("dueDates")}>
                            Due Dates {renderSortIcon("dueDates")}</th>
                        <th className="p-4">Company</th>
                        <th className="p-4">Created</th>
                    </tr>
                    </thead>
                    <tbody className="fontDataTable">
                    {filteredData.length > 0 ? (
                        filteredData.map((invoice, index) => (
                            <tr key={invoice.id} className={index % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"}>
                            <td className="p-4">{invoice.invoiceNumber}</td>
                            <td className="p-4">{invoice.dueDates}</td>
                            <td className="p-4">{invoice.company}</td>
                            <td className="p-4">{invoice.created}</td>
                        </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5} className="p-4 text-center text-gray-500">
                                No invoices found.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
        </main>
);
}