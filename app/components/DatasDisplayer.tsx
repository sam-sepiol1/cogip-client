"use client";

import { useState, useEffect } from "react";
import SearchBar from "../components/Search_bar";

interface Column<T> {
    key: keyof T;
    label: string;
    sortable?: boolean;
}

interface Props<T> {
    title: string;
    data: T[];
    columns: Column<T>[];
    searchPlaceholder?: string;
    limit?: number;
    isHome?: boolean;
    className?: string;
}

export default function DatasDisplayer<T extends { id: number }>({ title, data, columns, searchPlaceholder, limit, isHome }: Props<T>) {
    const [filteredData, setFilteredData] = useState<T[]>([]);

    useEffect(() => {
        if (data && data.length > 0) {
            setFilteredData(data);
        }
    }, [data]);

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

            {filteredData.length > 0 ? (
                <table className="table-auto w-full mt-10">
                    <thead className="titleTable">
                    <tr className="background-yellow">
                        {columns.map((col) => (
                            <th key={String(col.key)} className="p-4">{col.label}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="fontDataTable">
                    {filteredData.slice(0, limit || filteredData.length).map((item, index) => (
                        <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}>
                            {columns.map((col) => (
                                <td key={String(col.key)} className="p-4">{String(item[col.key])}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center mt-10">No data available</p>
            )}
        </main>
    );
}