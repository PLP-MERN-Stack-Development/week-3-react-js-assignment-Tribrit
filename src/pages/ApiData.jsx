import React, { useState, useEffect } from "react";
import Card from "../components/Card";

export default function ApiData() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 10;

  // Track which posts are expanded to show full body
  const [expandedPosts, setExpandedPosts] = useState({});

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
        setExpandedPosts({}); // Reset expanded posts on page change
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page]);

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpand = (id) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Helper to show truncated or full text
  const renderBody = (body, id) => {
    const isExpanded = expandedPosts[id];
    if (isExpanded || body.length <= 150) {
      return (
        <>
          {body}{" "}
          {body.length > 150 && (
            <button
              onClick={() => toggleExpand(id)}
              className="text-blue-600 hover:underline ml-1"
            >
              Show less
            </button>
          )}
        </>
      );
    }
    return (
      <>
        {body.substring(0, 150)}...{" "}
        <button
          onClick={() => toggleExpand(id)}
          className="text-blue-600 hover:underline ml-1"
        >
          Read more
        </button>
      </>
    );
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">Posts from API</h2>

      <input
        type="text"
        className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search posts by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <p className="text-gray-500">Loading posts...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {!loading && !error && (
        <>
          {filtered.length === 0 ? (
            <p className="text-gray-500">No posts match your search.</p>
          ) : (
            <ul>
              {filtered.map(({ id, title, body }) => (
                <li
                  key={id}
                  className="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-gray-700">{renderBody(body, id)}</p>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50 hover:bg-blue-700 disabled:cursor-not-allowed transition"
            >
              Previous
            </button>

            <span className="font-medium text-gray-700">Page {page}</span>

            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Next
            </button>
          </div>
        </>
      )}
    </Card>
  );
}
