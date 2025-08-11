// pages/Page1.js
import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to Page 1</h1>
      <p>This is some sample content for Page 1.</p>

      <div style={{ marginTop: "2rem" }}>
        <Link to="/">Go back to Home</Link>
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">This is Page 1 content</h1>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cq7neOyog7I"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
	</div>
  );
};

export default Page1;