"use client";

import { useState } from "react";
import SearchBar from "../components/Search_bar";

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
            created: "2023-12-30"
        },
        {
            id: 2,
            name: "Walter White",
            phone: "987-654-3210",
            mail: "walterwhite@example.com",
            company: "Heisenberg",
            created: "2023-12-30"
        },
        {
            id: 3,
            name: "Michael Scott",
            phone: "555-123-4567",
            mail: "michaelscott@example.com",
            company: "Dunder Mifflin",
            created: "2023-12-30"
        }
    ];

    const [filteredData, setFilteredData] = useState(testData);

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

    return (
        <main className="px-20 mt-20">
            <h3 className="relative text-6xl font-bold mb-6 before:block before:bg-[#F9DE4E] before:w-[281] h-[27] before:h-full before:absolute before:top-[30] before:left-0 before:-z-10">
                All contacts
            </h3>
            <SearchBar placeholder="Search contact..." onSearch={handleSearch}/>

            <table className="table-auto w-full mt-6">
                <thead className="text-2xl font-bold text-left">
                <tr className='background-yellow'>
                    <th className="p-4">Name</th>
                    <th className="p-4">Phone</th>
                    <th className="p-4">Mail</th>
                    <th className="p-4">Company</th>
                    <th className="p-4">Created</th>
                </tr>
                </thead>
                <tbody>
                {filteredData.length > 0 ? (
                    filteredData.map((contact) => (
                        <tr key={contact.id}>
                            <td className="p-4">{contact.name}</td>
                            <td className="p-4">{contact.phone}</td>
                            <td className="p-4">{contact.mail}</td>
                            <td className="p-4">{contact.company}</td>
                            <td className="p-4">{contact.created}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" className="p-4 text-center text-gray-500">
                            Aucun contact trouvé.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </main>
    );
}