"use client";

import { useState } from "react";

const AboutLayout = ({ children }) => {
  const [state, setState] = useState(0);
  return (
    <>
      <nav className="fixed right-0 top-10 z-10 h-screen w-60 bg-gray-500">
        <ul className="text-white p-5">
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </nav>
{/* 
      <h1>ini layout {state}</h1>
      <button onClick={() => setState(state + 1)}>click me</button> */}
      {children}
    </>
  );
};

export default AboutLayout;
