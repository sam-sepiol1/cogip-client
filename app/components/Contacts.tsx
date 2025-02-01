"use client";

import { useState } from "react";
import SearchBar from "../components/Search_bar";
import "../globals.css";

interface SortConfig {
    key: string;
    direction: "ascending" | "descending";
}

interface Contact {
    id: number;
    name: string;
    phone: string;
    mail: string;
    company: string;
    created: string;
}

export default function Contacts() {
    // Mock data for the table
    // TODO : Delete this when backend is ready and connected

    const testData = [
        {
            id: 1,
            name: "Sam Sepiol",
            phone: "555-7890",
            mail: "samespiol@example.com",
            company: "fSociety",
            created: "14/02/2022"
        },
        {
            id: 2,
            name: "Walter White",
            phone: "555-3210",
            mail: "walterwhite@example.com",
            company: "Heisenberg",
            created: "25/09/2020"
        },
        {
            id: 3,
            name: "Michael Scott",
            phone: "555-5567",
            mail: "michaelscott@example.com",
            company: "Dunder Mifflin",
            created: "02/12/2024"
        }
    ];

    const [filteredData, setFilteredData] = useState<Contact[]>(testData);
    const [sortConfig, setSortConfig] = useState<SortConfig>({key: "",direction: "ascending",});

    const handleSearch = (query: string) => {
        if (!query) {
            setFilteredData(testData);
            return;
        }

        const lowerCaseQuery = query.toLowerCase();

        const filtered = testData.filter((contact) =>
            contact.name.toLowerCase().includes(lowerCaseQuery) ||
            contact.phone.includes(query) ||
            contact.mail.toLowerCase().includes(lowerCaseQuery) ||
            contact.company.toLowerCase().includes(lowerCaseQuery)
        );

        setFilteredData(filtered);
    };

    const handleSort = (key: keyof Contact) => {
        let direction: "ascending" | "descending" = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }

        const sortedData = [...filteredData].sort((a, b) => {
            if (key === "created") {
                if (!a[key] || !b[key]) return 0;
                const dateA = new Date(String(a[key]).split("/").reverse().join("-"));
                const dateB = new Date(String(b[key]).split("/").reverse().join("-"));

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

    const renderSortIcon = (key: keyof Contact) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === "ascending" ? "▲" : "▼";
        }
        return "▼";
    };

    return (
        <main className="px-[136px]">
            <div className="px-5 mt-5 grid grid-cols-2 items-center">
                <h3 className="titlePage title">
                    All contacts
                </h3>
                <div className="justify-self-end mt-[90px]">
                    <SearchBar placeholder="Search contact" onSearch={handleSearch}/>
                </div>
            </div>

            <table className="table-auto w-full mt-10">
                <thead className="titleTable">
                <tr className="background-yellow">
                    <th className="p-4 cursor-pointer" onClick={() => handleSort("name")}>
                        Name {renderSortIcon("name")}
                    </th>
                    <th className="p-4">Phone</th>
                    <th className="p-4">Mail</th>
                    <th className="p-4">Company</th>
                    <th className="p-4 cursor-pointer" onClick={() => handleSort("created")}>
                        Created at {renderSortIcon("created")}
                    </th>
                </tr>
                </thead>
                <tbody className="fontDataTable">
                {filteredData.length > 0 ? (
                    filteredData.map((contact, index) => (
                        <tr key={contact.id} className={index % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"}>
                            <td className="p-4">{contact.name}</td>
                            <td className="p-4">{contact.phone}</td>
                            <td className="p-4">{contact.mail}</td>
                            <td className="p-4">{contact.company}</td>
                            <td className="p-4">{contact.created}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5} className="p-4 text-center text-gray-500">
                            No contact found.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </main>
    );
}