import { useState, useEffect } from "react";
import { SearchContainer, SearchInput } from "../search/search.elements";

const Search = () => {
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState([]);
    const [data, setData] = useState([
        "aaa",
        "eee",
        "iii",
        "ooo",
        "uuu",
        "bbb",
        "ccc",
        "mmm",
        "eee",
        "ma",
        "me",
        "mi",
        "mo",
        "mu",
    ]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        const filt = !query
            ? []
            : data.filter((f) => {
                  return f.includes(query);
              });
        setFilter(filt);
    }, [query]);

    return (
        <SearchContainer>
            <SearchInput
                onChange={(e) => handleChange(e)}
                value={query}
                type="text"
                list="test"
            />
            <datalist id="test">
                {filter.map((f) => {
                    return <option key={f} value={f} />;
                })}
            </datalist>
        </SearchContainer>
    );
};

export default Search;
