import React, { ChangeEvent } from "react";

type SearchBarProps = {
  onSearchChange: (searchText: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value.toLowerCase();
    onSearchChange(text);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Введите текст для поиска"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
