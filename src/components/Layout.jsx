import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, QrCode, Clock, User } from "lucide-react";

export default function Layout() {
  const location = useLocation();

  const menu = [
    { name: "Home", path: "/", icon: Home },
    { name: "QR", path: "/qr", icon: QrCode },
    { name: "History", path: "/history", icon: Clock },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#42794A] text-white flex flex-col justify-between">
        <div className="p-6">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white mb-8">QPay</h1>

          {/* Navigation */}
          <nav className="flex flex-col gap-3">
            {menu.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-white text-[#42794A]"
                        : "text-green-100 hover:bg-white hover:text-[#42794A]"
                    }`}
                >
                  <Icon
                    className={`w-5 h-5 transition ${
                      isActive
                        ? "text-[#42794A]"
                        : "text-green-100 group-hover:text-[#42794A]"
                    }`}
                  />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Logo */}
        <div className="p-4 border-t border-green-700">
          <img
            src="/bharat-connect.png"
            alt="Bharat Connect"
            className="h-10 mx-auto"
          />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          {/* Left - Page title */}
          <h2 className="text-lg font-semibold text-gray-700 capitalize">
           
          </h2>

          {/* Right - User Profile */}
          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">Thomas Shelby</span>
            <img
              src="/profile.jpg"
              alt="avatar"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
