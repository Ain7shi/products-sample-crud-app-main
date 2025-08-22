"use client";

// import { Search } from "lucide-react";
import Link from "next/link";

export default function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center ">
        <h1 className="text-xl font-bold text-blue-600">Trial1 Group Activity</h1>
        <Link href="../" className="text-m text-blue-600 ml-auto p-4">
          Home
        </Link>
        <Link href="/about" className="text-m text-blue-600 ml-auto p-4">
          About Us
        </Link>

        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 w-40 md:w-64 outline-none text-gray-700"
          />
          {/* <div className="bg-blue-600 text-white px-3 flex items-center justify-center">
            <Search size={18} />
          </div> */}
        </div>
      </div>
    </nav>
  );
}
