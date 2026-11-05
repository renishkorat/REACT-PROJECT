import { Link, useNavigate } from "react-router-dom";
import { BookOpen, LogOut, PlusCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";
export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-indigo-600">
          <BookOpen />
          BlogSpace
        </Link>

        <div className="flex items-center gap-5">
          <Link to="/" className="text-gray-600 hover:text-indigo-600">
            Home
          </Link>

          {user && (
            <>
              <Link to="/dashboard" className="text-gray-600 hover:text-indigo-600">
                Dashboard
              </Link>

              <Link
                to="/create"
                className="hidden sm:flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                <PlusCircle size={18} />
                Write Blog
              </Link>

              <span className="hidden md:block font-medium">
                {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-red-500"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          )}

          {!user && (
            <>
              <Link to="/login" className="text-gray-600">
                Login
              </Link>
              <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}