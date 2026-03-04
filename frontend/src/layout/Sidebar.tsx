import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

import {
  LayoutDashboard,
  Brain,
  FileText,
  BarChart3,
  ShieldCheck,
  LogOut,
  Menu,
} from "lucide-react";

function Sidebar() {
  const { setToken } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const logout = () => {
    setToken(null);
  };

  const navItem =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-purple-600/20";

  return (
    <aside
      className={`h-screen bg-[#0b1220] border-r border-white/10 flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >

      {/* HEADER */}

      <div className="flex items-center justify-between p-5">

        {!collapsed && (
          <h1 className="text-xl font-bold text-purple-400">
            CreditAI
          </h1>
        )}

        <button
          aria-label="Toggle Sidebar"
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white"
        >
          <Menu size={22} />
        </button>

      </div>

      {/* NAV */}

      <nav className="flex flex-col gap-2 px-3">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${navItem} ${isActive ? "bg-purple-600/30" : ""}`
          }
        >
          <LayoutDashboard size={20} />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>

        <NavLink
          to="/assessment"
          className={({ isActive }) =>
            `${navItem} ${isActive ? "bg-purple-600/30" : ""}`
          }
        >
          <Brain size={20} />
          {!collapsed && <span>Loan Assessment</span>}
        </NavLink>

        <NavLink
          to="/applications"
          className={({ isActive }) =>
            `${navItem} ${isActive ? "bg-purple-600/30" : ""}`
          }
        >
          <FileText size={20} />
          {!collapsed && <span>Applications</span>}
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `${navItem} ${isActive ? "bg-purple-600/30" : ""}`
          }
        >
          <BarChart3 size={20} />
          {!collapsed && <span>Risk Analytics</span>}
        </NavLink>

        <NavLink
          to="/audit"
          className={({ isActive }) =>
            `${navItem} ${isActive ? "bg-purple-600/30" : ""}`
          }
        >
          <ShieldCheck size={20} />
          {!collapsed && <span>Audit Logs</span>}
        </NavLink>

      </nav>

      {/* LOGOUT */}

      <div className="mt-auto p-4">

        <button
          aria-label="Logout"
          onClick={logout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-red-500/20 hover:bg-red-500/40 transition"
        >
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;