import React from "react";

const QueryData = ({ results }) => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 mb-30 lg:grid-cols-2 gap-6">
      {results.map((item) => (
        <div
          key={item.link}
          className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
        >
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
          >
            {item.title}
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {item.snippet}
          </p>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 truncate">
            {item.link}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QueryData;
