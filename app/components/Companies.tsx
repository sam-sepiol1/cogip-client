"use client";

import { useState } from "react";
import SearchBar from "../components/Search_bar";

interface SortConfig {
    key: string;
    direction: "ascending" | "descending";
}

interface Company {
    id: number;
    name: string;
    tva: string;
    country: string;
    type: string;
    created: string;
}

export default function Companies() {
    // Mock data for the table
    // TODO : Delete this when backend is ready and connected
    const testData = [
        {
            id: 1,
            name: "fSociety",
            tva: "US456 654 321",
            country: "United States",
            type: "Private",
            created: "02/12/2024"
        },
        {
            id: 2,
            name: "Heisenberg",
            tva: "BE0987 876 787",
            country: "Belgium",
            type: "Client",
            created: "28/01/2025"
        },
        {
            id: 3,
            name: "Dunder Mifflin",
            tva: "FR 676 676 676",
            country: "France",
            type: "Client",
            created: "16/05/2023"
        }
    ]

    const [filteredData, setFilteredData] = useState<Company[]>(testData);
    const [sortConfig, setSortConfig] = useState<SortConfig>({key: "",direction: "ascending",});

    const handleSearch = (query: string) => {
        if (!query) {
            setFilteredData(testData);
            return;
        }

        const lowerCaseQuery = query.toLowerCase();

        const filtered = testData.filter((company) =>
            company.name.toLowerCase().includes(lowerCaseQuery) ||
            company.created.includes(query)
        );

        setFilteredData(filtered);
    };

    const handleSort = (key: keyof Company) => {
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

    const renderSortIcon = (key: keyof Company) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === "ascending" ? "▲" : "▼";
        }
        return "▼";
    };

	return (
        <main className="px-[136px]">
            <div className="px-5 mt-5 grid grid-cols-2 items-center">
                <h3 className="titlePage title">All companies</h3>
                <div className="justify-self-end mt-[90px]">
                    <SearchBar placeholder="Search contact" onSearch={handleSearch}/>
                </div>
            </div>

            <table className="table-auto w-full mt-10">
                <thead className="titleTable">
                <tr className='background-yellow'>
                    <th className="p-4 cursor-pointer" onClick={() => handleSort("name")}>
                        Name {renderSortIcon("name")}
                    </th>
                    <th className="p-4">TVA</th>
                    <th className="p-4">Country</th>
                    <th className="p-4">Type</th>
                    <th className="p-4 cursor-pointer" onClick={() => handleSort("created")}>
                        Created at {renderSortIcon("created")}
                    </th>
                </tr>
                </thead>
                <tbody className="fontDataTable">
                {filteredData.length > 0 ? (
                    filteredData.map((company, index) => (
                        <tr key={company.id} className={index % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"}>
                    <td className="p-4">{company.name}</td>
                            <td className="p-4">{company.tva}</td>
                            <td className="p-4">{company.country}</td>
                            <td className="p-4">{company.type}</td>
                            <td className="p-4">{company.created}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5} className="p-4 text-center text-gray-500">
                            No companies found.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </main>
    );
}