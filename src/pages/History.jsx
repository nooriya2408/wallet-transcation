import React, { useState, useEffect } from "react";
import { Search, Filter,Clock,Timer } from "lucide-react";
import mockApiResponse from "../data"; // mock data file

const History = () => {
  const [transactions, setTransactions] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false); 
  const itemsPerPage = 5; // number of rows per page

  // Status badge styles
  // put these in your component file
const getStatusStyle = (status) => {
  const s = String(status).toLowerCase();

  if (s === "pending" || s === "initiated" || s === "processing") {
    return "text-yellow-600 border border-yellow-600 bg-yellow-50 px-3 py-1 rounded-full text-xs font-medium";
  }
  if (s === "failed" || s === "declined" || s === "rejected" || s === "cancelled") {
    return "text-red-600 border border-red-600 bg-red-50 px-3 py-1 rounded-full text-xs font-medium";
  }
  if (s === "success" || s === "succeeded" || s === "completed" || s === "settled") {
    return "text-green-600 border border-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-medium";
  }
  return "px-3 py-1 rounded-full text-xs font-medium";
};

const formatStatus = (status) => {
  const s = String(status).toLowerCase();
  if (["pending", "initiated", "processing"].includes(s)) return "Pending";
  if (["failed", "declined", "rejected", "cancelled"].includes(s)) return "Failed";
  if (["success", "succeeded", "completed", "settled"].includes(s)) return "Success";
  return String(status);
};


  // Simulate API fetch
  useEffect(() => {
    setLoading(true);
    setError(null);

    setTimeout(() => {
      try {
        if (!mockApiResponse?.data) {
          throw new Error("No data found");
        }
        setTransactions(mockApiResponse.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }, 800);
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = transactions.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Settlement History</h2>
        <button className="border border-green-700 text-green-700 px-4 py-2 rounded hover:bg-green-50">
          Download statement
        </button>
      </div>
      <div className="w-full bg-green-50 border border-green-200 rounded-xl p-4 flex items-center justify-between mt-4 shadow-sm">
      {/* Left Section (Icon + Text) */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center rounded-full border border-green-500 text-green-600">
          <Clock size={20} />
        </div>
        <p className="text-gray-700 text-sm">
          Today’s total collection will be auto-settled by{" "}
          <span className="font-semibold text-black">08:00AM, 23rd Oct’22</span>{" "}
          Tomorrow.
        </p>
      </div>

      {/* Right Section (Button) */}
      <button onClick={()=>setOpen(true)}className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow transition">
        <Timer size={18} />
        Settle Now!
      </button>
    </div>
    {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          {/* Modal */}
          <div className="bg-white w-full max-w-md rounded-2xl shadow-xl relative p-6">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900">Manage QR/POS</h2>

            {/* Section */}
            <div className="flex justify-between items-center mt-4">
              <p className="flex items-center gap-2 font-medium text-gray-800">
                🏦 Today’s Total Collection
              </p>
              <p className="text-xl font-bold">₹1,023</p>
            </div>

            {/* Status */}
            <p className="flex items-center gap-2 text-green-600 font-medium mt-2">
              🏦 Already Settled
            </p>

            {/* Divider */}
            <hr className="my-4" />

            {/* Settlement calculation */}
            <h3 className="uppercase text-xs tracking-widest text-gray-400 font-medium">
              Settlement Calculation
            </h3>
            <div className="space-y-2 mt-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Amount yet to be settled</span>
                <span className="font-medium">IBRAHIM MOHAMMEDALI</span>
              </div>
              <div className="flex justify-between">
                <span>Past pending amount</span>
                <span className="font-medium">092141241127</span>
              </div>
              <div className="flex justify-between">
                <span>Charges</span>
                <span className="font-medium">07, Aug 2024</span>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-4" />

            {/* Total again */}
            <div className="flex justify-between items-center">
              <p className="flex items-center gap-2 font-medium text-gray-800">
                🏦 Today’s Total Collection
              </p>
              <p className="text-xl font-bold">₹1,023</p>
            </div>

            {/* Info box */}
            <div className="mt-4 p-3 rounded-lg bg-green-50 text-sm">
              <p className="text-gray-700">
                Tap <span className="font-medium">‘Settle Now’</span> to instantly get settlements in your bank account.
              </p>
              <p className="text-green-600 font-medium mt-1">
                Settle Now is Chargeable
              </p>
            </div>

            {/* Action Button */}
            <div className="mt-5 flex justify-end">
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-lg shadow-md">
                Settle Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search & Filter */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center border rounded px-3 py-2 w-1/3">
          <Search size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full"
          />
        </div>
        <button className="p-2 border rounded text-gray-600 hover:bg-gray-100">
          <Filter size={18} />
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center text-gray-500 py-6">Loading data...</div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center text-red-500 py-6">
          ❌ Error: {error}
        </div>
      )}

      {/* Table */}
      {!loading && !error && (
        <div className="bg-white border rounded-lg shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Date & Time</th>
                <th className="px-4 py-3">Account</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Details</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{row.user_id || "—"}</td>
                  <td className="px-4 py-3">{new Date(row.created_date).toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
})}
</td>
                  <td className="px-4 py-3">{row.account || "—"}</td>
                  <td className="px-4 py-3 font-semibold">{row.amount}</td>
                  <td className="px-4 py-3">
                    <span className={getStatusStyle(row.status)}>
    {formatStatus(row.status)}
  </span>
                  </td>
                  <td className="px-4 py-3 text-green-600 cursor-pointer hover:underline">
                    View
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {/* Pagination */}
{!loading && !error && totalPages > 1 && (
  <div className="flex justify-center items-center space-x-2 mt-6">
    <button
      disabled={currentPage === 1}
      onClick={() => setCurrentPage((p) => p - 1)}
      className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100 disabled:opacity-40"
    >
      {"<"}
    </button>

    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
      <button
        key={num}
        onClick={() => setCurrentPage(num)}
        className={`w-8 h-8 flex items-center justify-center rounded-full border ${
          num === currentPage
            ? "bg-green-700 text-white"
            : "hover:bg-gray-100 text-gray-700"
        }`}
      >
        {num}
      </button>
    ))}

    <button
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage((p) => p + 1)}
      className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100 disabled:opacity-40"
    >
      {">"}
    </button>
  </div>
)}


    </div>
  );
};

export default History;
