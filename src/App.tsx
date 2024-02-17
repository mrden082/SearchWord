import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import ListData, { ListType } from "./components/ListData";

const App: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedList, setSelectedList] = useState<ListType>("fruit");

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const handleListChange = (list: ListType) => {
    setSelectedList(list);
  };

  const getList = () => {
    if (selectedList in ListData) {
      return ListData[selectedList as keyof typeof ListData];
    } else {
      return [];
    }
  };

  const filteredList = searchText
    ? getList().filter((item) => item.includes(searchText))
    : getList();

  return (
    <div className="container">
      <SearchBar onSearchChange={handleSearchChange} />
      <List items={filteredList} />
      <div>
        Выберите список:{" "}
        <select onChange={(e) => handleListChange(e.target.value as ListType)}>
          {Object.keys(ListData).map((list) => (
            <option key={list} value={list}>
              {list}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default App;
