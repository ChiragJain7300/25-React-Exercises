import React, { useEffect, useState } from "react";

function SearchAuto() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const updateSearchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      if (data.users && data.users.length > 0) {
        const search = data.users.filter(
          (item) =>
            item.firstName.includes(searchValue) === true ||
            item.lastName.includes(searchValue) === true
        );
        setSearchResult(search);
      }
    } catch (error) {
      alert(error);
      return;
    }
  };
  useEffect(() => {
    if (searchValue.length > 0) updateSearchData();
  }, [searchValue]);
  console.log(searchResult);

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        style={{
          padding: "10px 20px",
          width: "250px",
          fontSize: "20px",
          borderRadius: "7px",
          marginBottom: "15px",
        }}
      />
      {searchResult && searchResult.length > 0
        ? searchResult.map((item) => (
            <div key={item.id}>
              {item.firstName} {item.lastName}{" "}
            </div>
          ))
        : null}
    </>
  );
}

export default SearchAuto;
