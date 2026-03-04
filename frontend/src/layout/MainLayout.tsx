import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Sidebar from "./Sidebar";
import { Sun, Moon, User } from "lucide-react";

function MainLayout() {
  const { setToken, toggleTheme, theme } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = () => {
    setToken(null);
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-black via-[#0f172a] to-black text-white">

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN */}

      <div className="flex flex-col flex-1">

        {/* NAVBAR */}

        <header className="flex items-center justify-between px-8 py-5 border-b border-white/10 backdrop-blur-xl bg-black/30">

          <h2 className="text-xl font-semibold tracking-wide">
            AI Risk Command Center
          </h2>

          <div className="flex items-center gap-6">

            {/* THEME BUTTON */}

            <button
              aria-label="Toggle Theme"
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* PROFILE */}

            <div className="relative">

              <button
                aria-label="Open Profile Menu"
                onClick={() => setOpen(!open)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 transition"
              >
                <User size={18} />
              </button>

              {open && (
                <div className="absolute right-0 mt-3 w-44 bg-[#0b1220] border border-white/10 rounded-xl shadow-xl p-3">

                  <button
                    aria-label="Logout"
                    onClick={logout}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-red-500/20 text-red-400 transition"
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>

          </div>

        </header>

        {/* PAGE CONTENT */}

        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default MainLayout;