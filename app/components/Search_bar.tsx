import { useState } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder={placeholder || "Search..."}
            className="border border-[#636363] rounded-lg w-[245] h-[53] shadow-sm"
        />
    );
};

export default SearchBar;