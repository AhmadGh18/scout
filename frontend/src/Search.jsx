import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const apiKey = "AIzaSyDxC50I69WCfAwPwu8rdVDY4B5OiPvT5dc";
  const cx = "631307c3e20a241bf"; // Your Custom Search Engine ID

  const handleChange = async (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value) {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?q=${value}&key=${apiKey}&cx=${cx}`
      );
      const data = await response.json();
      setResults(data.items || []); // Store search results
    } else {
      setResults([]);
    }
  };

  return (
    <div className="flex flex-col items-center mt-5 font-Aljazeera">
      <input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="border-2 border-gray-300 rounded-lg p-2 w-full max-w-md focus:outline-none focus:border-primary transition-all"
      />
      <div className="mt-5 w-full max-w-md">
        {results.length > 0 && (
          <ul className="bg-white border rounded-lg shadow-lg">
            {results.map((item) => (
              <li key={item.link} className="p-3 border-b last:border-b-0">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {item.title}
                </a>
                <p className="text-gray-700">{item.snippet}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
