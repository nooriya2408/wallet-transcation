import { useState } from "react";

export default function QRPage() {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div className="p-6 flex flex-col gap-6">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold">Manage QR/POS</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left QR Card */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Pay Logo"
            className="w-16 mb-4"
          />

          {/* QR Code */}
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://9876543210@qapay"
            alt="QR Code"
            className="w-48 h-48 mb-4"
          />

          {/* UPI Info */}
          <p className="text-sm">
            <span className="font-semibold">UPI ID:</span>{" "}
            9876543210@qapay
            <button className="ml-2 text-green-600">📋</button>
          </p>
          <p className="text-gray-500 mb-6">Ibrahim Mohammedali</p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-lg border shadow text-gray-700">
              ⬇️ Download
            </button>
            <button className="px-6 py-2 rounded-lg border shadow text-gray-700">
              🔗 Share
            </button>
          </div>
        </div>

        {/* Right QR List Card */}
        <div className="bg-white rounded-2xl shadow p-6">
          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b">
            <button
              className={`px-4 py-2 rounded-t-lg ${
                activeTab === "active"
                  ? "bg-green-100 text-green-700 font-medium"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("active")}
            >
              Active QR Codes
            </button>
            <button
              className={`px-4 py-2 rounded-t-lg ${
                activeTab === "requests"
                  ? "bg-green-100 text-green-700 font-medium"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("requests")}
            >
              QR Code Requests
            </button>
          </div>

          {/* QR List */}
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border rounded-lg p-3 hover:bg-gray-50"
              >
                <div className="flex gap-3 items-center">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=sample"
                    alt="QR"
                    className="w-12 h-12"
                  />
                  <div>
                    <p className="font-medium text-sm">Q201946579</p>
                    <p className="text-xs text-gray-500">
                      All Marketing Sales – Terminal {item}
                    </p>
                  </div>
                </div>
                <span className="text-gray-400">›</span>
              </div>
            ))}
          </div>

          {/* Request Button */}
          <button className="mt-6 w-full bg-[#42794A] text-white py-3 rounded-lg hover:bg-green-800">
            Request more QR Codes
          </button>
        </div>
      </div>
    </div>
  );
}
