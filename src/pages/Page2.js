// pages/Page2.js
import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to Page 1</h1>
      <p>This is a new type of shit for Page 22222222.</p>

      <div style={{ marginTop: "2rem" }}>
        <Link to="/">Go back to heellll</Link>
      </div>
    </div>
  );
};

export default Page1;