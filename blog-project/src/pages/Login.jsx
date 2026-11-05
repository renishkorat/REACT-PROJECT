import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { BookOpen } from "lucide-react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg"
      >
        <div className="flex justify-center mb-5">
          <BookOpen size={40} className="text-indigo-600" />
        </div>

        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-500 text-center mb-7">
          Login to your blog account
        </p>

        {error && (
          <p className="bg-red-100 text-red-600 p-3 rounded-lg mb-4">
            {error}
          </p>
        )}

        <input
          required
          type="email"
          placeholder="Email Address"
          className="w-full border p-3 rounded-lg mb-4 outline-indigo-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          required
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6 outline-indigo-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700">
          Login
        </button>
        <div className="mt-4 text-center">
  <p className="text-xs text-gray-500 mb-2">Demo Login</p>

  <button
    type="button"
    onClick={() => {
      setEmail("demo@gmail.com");
      setPassword("demo@123");
    }}
    className="text-xs text-indigo-600 font-semibold hover:underline"
  >
    Fill Demo Credentials
  </button>
</div>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 font-semibold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}