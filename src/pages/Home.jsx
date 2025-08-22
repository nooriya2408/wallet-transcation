import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [progress, setProgress] = useState(30);
  const navigate = useNavigate()

  return (
    <div className="p-6 space-y-6">
      {/* Top Banner */}
     
 <div className="space-y-4">
      {/* Banner Section */}
     <div className="relative bg-white rounded-xl overflow-hidden shadow flex items-center h-52">
        {/* Left gradient side */}
        <div className="relative w-1/2 bg-gradient-to-r from-qgreen to-green-700 text-white p-6">
          {/* Cross diagonal lines (pattern) */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="diagonalLines"
                  patternUnits="userSpaceOnUse"
                  width="30"
                  height="30"
                  patternTransform="rotate(45)"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="30"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diagonalLines)" />
            </svg>
          </div>

          {/* Text Content */}
          <div className="relative z-10">
            <h1 className="text-2xl md:text-3xl font-bold leading-snug">
              Pay <span className="text-white">₹1 / month</span> <br />
              for QR Pay POS Device
            </h1>
            <p className="mt-2 text-white/80 text-sm">
              one device for accepting all mode of payments.
            </p>
            <button
              onClick={() => navigate("/qr")}
              className="mt-3 px-4 py-2 bg-white text-qgreen rounded-lg shadow hover:bg-gray-100 text-sm font-medium"
            >
              Download App
            </button>
          </div>
        </div>

        {/* Right image side */}
        <div className="w-1/2 flex justify-center items-center p-4 bg-white">
          <img
            src="/banner-illustration.png"
            alt="banner illustration"
            className="w-32 h-32 object-contain"
          />
        </div>
      </div>
    </div>
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white shadow rounded-xl p-4 text-center">
          <p className="text-xl font-bold text-qgreen">1.5k</p>
          <p className="text-gray-500">Account Holders</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4 text-center">
          <p className="text-xl font-bold text-qgreen">2.1k</p>
          <p className="text-gray-500">Transactions</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4 text-center">
          <p className="text-xl font-bold text-qgreen">2.3k</p>
          <p className="text-gray-500">Settlement</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4 text-center">
          <p className="text-xl font-bold text-qgreen">45k</p>
          <p className="text-gray-500">QR Orders</p>
        </div>
      </div>

      {/* Profile & QR Section */}
     {/* Profile & QR Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Profile Progress */}
  <div className="bg-white shadow rounded-xl p-6">
    <h3 className="font-semibold mb-4">Profile</h3>
    <div className="flex items-center gap-6">
      {/* Progress Circle */}
      <div className="relative w-28 h-28">
        <svg className="w-full h-full">
          <circle
            cx="56"
            cy="56"
            r="48"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="56"
            cy="56"
            r="48"
            stroke="#16a34a"
            strokeWidth="8"
            fill="none"
            strokeDasharray="300"
            strokeDashoffset={300 - (300 * progress) / 100}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-base font-bold">
          {progress}%
        </span>
      </div>

      {/* Profile List */}
      <div>
        <p className="text-gray-700 font-medium mb-2">
          Complete your profile
        </p>
        <ul className="space-y-2 text-sm text-gray-600">
          {["Personal KYC", "Company KYC", "Onboarding details"].map(
            (item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-qgreen rounded-full"></span>
                {item}
              </li>
            )
          )}
        </ul>
        <button className="mt-3 px-4 py-2 bg-qgreen text-white rounded-lg hover:bg-green-700">
          Next
        </button>
      </div>
    </div>
  </div>

  {/* QR Code */}
  <div className="bg-white shadow rounded-xl p-6">
    <h3 className="font-semibold mb-4">Order QR</h3>

    <div className="flex items-center gap-4">
      {/* QR Image */}
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=QPay"
        alt="QR"
        className="w-32 h-32 object-contain"
      />

      {/* QR Features List */}
      <div>
        <ul className="space-y-2 text-sm text-gray-600">
          {["Receive Payment", "Order new QRs", "Download QR"].map(
            (item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-qgreen rounded-full"></span>
                {item}
              </li>
            )
          )}
        </ul>

        <button  onClick={()=>navigate("/qr")}className="mt-3 px-4 py-2 bg-qgreen text-white rounded-lg hover:bg-green-700">
          View more
        </button>
      </div>
    </div>
  </div>
</div>

     

      {/* Transactions Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="font-semibold mb-4">Settlement</h3>
          <p className="text-xl font-bold">₹1,23,816.19</p>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li>Ibrahim – 23 Oct, 09:15 AM – <span className="text-green-600">+₹90</span></li>
            <li>Ibrahim – 23 Oct, 09:15 AM – <span className="text-green-600">+₹90</span></li>
            <li>Ibrahim – 23 Oct, 09:15 AM – <span className="text-green-600">+₹90</span></li>
          </ul>
          <button  onClick={()=>navigate("/history")}className="mt-4 w-full py-2 bg-qgreen text-white rounded-lg hover:bg-green-700">
            Settle Now
          </button>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="font-semibold mb-4">Total Transactions</h3>
          <p className="text-xl font-bold">₹1,23,816.19</p>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li>Ibrahim – 23 Oct, 09:15 AM – <span className="text-green-600">+₹90</span></li>
            <li>Ibrahim – 23 Oct, 09:15 AM – <span className="text-green-600">+₹90</span></li>
            <li>Ibrahim – 23 Oct, 09:15 AM – <span className="text-green-600">+₹90</span></li>
          </ul>
          <button className="mt-4 w-full py-2 bg-qgreen text-white rounded-lg hover:bg-green-700">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
