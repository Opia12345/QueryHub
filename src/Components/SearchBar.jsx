// Import the search icon and React essentials
import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";

// Component to display search results (assumes it's a separate component)
import QueryData from "./QueryData";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  // Google API key and Search Engine ID from environment variables
  const API_KEY = import.meta.env.VITE_API_KEY;
  const CX = import.meta.env.VITE_CX;

  // Handles the search form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Set loading state and clear previous results/errors
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      // Make a request to Google Custom Search API
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${encodeURIComponent(query)}`
      );
      const data = await response.json();

      // If results are returned, update state
      if (data.items) {
        setResults(data.items);
      } else {
        setError("No results found.");
      }
    } catch (err) {
      // Handle fetch errors
      setError("Failed to fetch search results.");
    } finally {
      // Turn off loading state
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-6 py-10">
      <form
        onSubmit={handleSearch}
        className="flex items-center max-w-3xl mx-auto gap-2 pl-2 pr-1 py-1 shadow-md border border-slate-200 focus-within:border-pink-500 rounded-full"
      >
        <MagnifyingGlass size={20} />

        {/* Search input field */}
        <input
          type="search"
          placeholder="Search Google..."
          className="flex-grow px-4 py-2 text-sm rounded-md bg-transparent focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 border-s font-medium cursor-pointer bg-pink-500 text-white hover:bg-pink-600 rounded-tr-full rounded-br-full transition-colors disabled:opacity-50"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Display error message if there’s an error */}
      {error && (
        <p className="text-red-600 dark:text-red-400 mt-4 text-center">
          {error}
        </p>
      )}

      {/* Component that displays the search results */}
      <QueryData results={results} />
    </div>
  );
};

export default SearchBar;
