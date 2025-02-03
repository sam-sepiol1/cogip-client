"use client";

import { useState } from "react";
import SearchBar from "../components/Search_bar";

interface Column {
    key: string;
    label: string;
    sortable?: boolean;
}

interface Props {
    title: string;
    data: T[];
    columns: Column<T>[];
    searchPlaceholder?: string;
    limit?: number;
    isHome?: boolean;
}

export default function DatasDisplayer({ title, data, columns, searchPlaceholder, limit, isHome }: Props) {
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (query: string) => {
        if (!query) {
            setFilteredData(data);
            return;
        }
        const lowerCaseQuery = query.toLowerCase();
        const filtered = data.filter((item) =>
            columns.some((col) => item[col.key]?.toString().toLowerCase().includes(lowerCaseQuery))
        );
        setFilteredData(filtered);
    };

    return (
        <main className="px-[136px]">
            <div className="px-5 mt-5 grid grid-cols-2 items-center">
                <h3 className={isHome ? "titlePage" : "titlePage title"}>{title}</h3>
                {!isHome && (
                    <div className="justify-self-end mt-[90px]">
                        <SearchBar placeholder={searchPlaceholder || "Search..."} onSearch={handleSearch} />
                    </div>
                )}
            </div>

            <table className="table-auto w-full mt-10">
                <thead className="titleTable">
                <tr className="background-yellow">
                    {columns.map((col) => (
                        <th key={col.key} className="p-4">{col.label}</th>
                    ))}
                </tr>
                </thead>
                <tbody className="fontDataTable">
                {filteredData.slice(0, limit || filteredData.length).map((item) => (
                    <tr key={item.id} className="bg-white">
                        {columns.map((col) => (
                            <td key={col.key} className="p-4">{item[col.key]}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </main>
    );
}