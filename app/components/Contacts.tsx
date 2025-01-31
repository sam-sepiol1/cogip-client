"use client";

import { useState } from "react";
import SearchBar from "../components/Search_bar";
import "../globals.css";

export default function Contacts() {
    // Mock data for the table
    // TODO : Delete this when backend is ready and connected

    const testData = [
        {
            id: 1,
            name: "Sam Sepiol",
            phone: "123-456-7890",
            mail: "samespiol@example.com",
            company: "fSociety",
            created: "14/02/2022"
        },
        {
            id: 2,
            name: "Walter White",
            phone: "987-654-3210",
            mail: "walterwhite@example.com",
            company: "Heisenberg",
            created: "25/09/2020"
        },
        {
            id: 3,
            name: "Michael Scott",
            phone: "555-123-4567",
            mail: "michaelscott@example.com",
            company: "Dunder Mifflin",
            created: "02/12/2024"
        }
    ];

    const [filteredData, setFilteredData] = useState(testData);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

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

    const handleSort = (key) => {
        let direction = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }

        const sortedData = [...filteredData].sort((a, b) => {
            if (key === "created") {
                const dateA = new Date(a[key].split("/").reverse().join("-"));
                const dateB = new Date(b[key].split("/").reverse().join("-"));

                return direction === "ascending" ? dateA - dateB : dateB - dateA;
            } else {
                return direction === "ascending"
                    ? a[key].localeCompare(b[key])
                    : b[key].localeCompare(a[key]);
            }
        });

        setFilteredData(sortedData);
        setSortConfig({ key, direction });
    };

    const renderSortIcon = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === "ascending" ? "▲" : "▼";
        }
        return "▼";
    };

    return (
        <main className="px-20 mt-20">
            <div className="px-5 mt-20 grid grid-cols-2 items-center">
                <h3 className="titlePage title">
                    All contacts
                </h3>
                <div className="justify-self-end mt-[20px]">
                    <SearchBar placeholder="Search contact" onSearch={handleSearch}/>
                </div>
            </div>

            <table className="table-auto w-full mt-20">
                <thead className="titleTable">
                <tr className="background-yellow">
                    <th className="p-4 cursor-pointer" onClick={() => handleSort("name")}>
                        Name {renderSortIcon("name")}
                    </th>
                    <th className="p-4">Phone</th>
                    <th className="p-4">Mail</th>
                    <th className="p-4">Company</th>
                    <th className="p-4 cursor-pointer" onClick={() => handleSort("created")}>
                        Created {renderSortIcon("created")}
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