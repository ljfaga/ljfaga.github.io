// ThreeButtonNav.jsx
// React component with three clickable buttons leading to different pages using react-router-dom.
// Includes an example of how to wire up Routes for these pages.

import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

export default function ThreeButtonNav({ className = '' }) {
  return (
    <div>
      <nav className={`flex items-center justify-center gap-4 p-4 ${className}`}>
        <Link
          to="/page1"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl shadow-md border border-transparent hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
        >
          Page 1
        </Link>

        <Link
          to="/page2"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl shadow-md border border-transparent hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
        >
          Page 2
        </Link>

        <Link
          to="/page3"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl shadow-md border border-transparent hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
        >
          Page 3
        </Link>
      </nav>

      {/* Example Routes for the three pages */}
      //<Routes>
      //  <Route path="/page1" element={<div className="p-4">This is Page 1 content.</div>} />
      //  <Route path="/page2" element={<div className="p-4">This is Page 2 content.</div>} />
      //  <Route path="/page3" element={<div className="p-4">This is Page 3 content.</div>} />
      //</Routes>
    </div>
  );
}
