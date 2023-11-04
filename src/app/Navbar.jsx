import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-10">
      <div className="px-10 flex justify-between mx-auto py-3 bg-gray-500">
        <div>
          <h1 className="font-bold">Navbar</h1>
        </div>
        <ul className="flex ">
          <Link href="/" className="pr-3"><li>Home</li></Link>
          <Link href="/about" className="pr-3"><li>about</li></Link>
          <Link href="/about/profile" className="pr-3"><li>profile</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
