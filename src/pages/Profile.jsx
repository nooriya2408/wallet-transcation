import { CreditCard, Briefcase, ShieldCheck, QrCode, Settings, Users, Languages, Smartphone, Monitor } from "lucide-react";

export default function Profile() {
  return (
    <div className="p-6 space-y-6">
      {/* Banner */}
      <div className="bg-[#E8F5E9] border border-[#42794A] rounded-xl p-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#1B4332]">
            Pay ₹1/month* for the QPay POS Device
          </h2>
          <p className="text-sm text-gray-600">
            One device for accepting all modes of payments
          </p>
          <button className="mt-3 bg-[#42794A] text-white px-4 py-2 rounded-lg shadow">
            Download App Now!
          </button>
        </div>
        <img
          src="https://via.placeholder.com/150"
          alt="POS Device"
          className="w-40"
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-green-50 rounded-lg border">
          <CreditCard className="text-[#42794A]" />
          <p className="font-semibold mt-2">XXXX 9820</p>
          <p className="text-xs text-gray-500">ICICI Bank | Chennai Egmore</p>
        </div>

        <div className="p-4 bg-green-50 rounded-lg border">
          <Briefcase className="text-[#42794A]" />
          <p className="font-semibold mt-2">Business Profile</p>
          <p className="text-xs text-gray-500">View and edit details</p>
        </div>

        <div className="p-4 bg-green-50 rounded-lg border">
          <ShieldCheck className="text-[#42794A]" />
          <p className="font-semibold mt-2">KYC Verification</p>
          <p className="text-xs text-gray-500">Unlock exclusive benefits</p>
        </div>

        <div className="p-4 bg-green-50 rounded-lg border">
          <QrCode className="text-[#42794A]" />
          <p className="font-semibold mt-2">Order QR</p>
          <p className="text-xs text-gray-500">Manage & order QRs</p>
        </div>
      </div>

      {/* Business Services & Manage Business */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Business Services */}
        <div className="p-4 bg-white rounded-lg shadow border">
          <h3 className="font-semibold mb-4 text-[#1B4332]">Business Services</h3>
          <div className="flex gap-4">
            <div className="p-4 bg-green-50 rounded-lg flex flex-col items-center">
              <Smartphone className="text-[#42794A]" />
              <span className="text-sm mt-2">Smart Speaker</span>
            </div>
            <div className="p-4 bg-green-50 rounded-lg flex flex-col items-center">
              <Monitor className="text-[#42794A]" />
              <span className="text-sm mt-2">POS Machine</span>
            </div>
          </div>
        </div>

        {/* Manage Business */}
        <div className="p-4 bg-white rounded-lg shadow border">
          <h3 className="font-semibold mb-4 text-[#1B4332]">Manage Business</h3>
          <div className="flex gap-4">
            <div className="p-4 bg-green-50 rounded-lg flex flex-col items-center">
              <Settings className="text-[#42794A]" />
              <span className="text-sm mt-2">Payment Settings</span>
            </div>
            <div className="p-4 bg-green-50 rounded-lg flex flex-col items-center">
              <Users className="text-[#42794A]" />
              <span className="text-sm mt-2">Manage Staff</span>
            </div>
            <div className="p-4 bg-green-50 rounded-lg flex flex-col items-center">
              <Languages className="text-[#42794A]" />
              <span className="text-sm mt-2">Change Language</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
