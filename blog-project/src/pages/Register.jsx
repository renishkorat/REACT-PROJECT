import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { BookOpen } from "lucide-react";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await register(form.name, form.email, form.password);
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
          Create Account
        </h1>

        <p className="text-gray-500 text-center mb-7">
          Join our blogging community
        </p>

        {error && (
          <p className="bg-red-100 text-red-600 p-3 rounded-lg mb-4">
            {error}
          </p>
        )}

        <input
          required
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg mb-4 outline-indigo-500"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          required
          type="email"
          placeholder="Email Address"
          className="w-full border p-3 rounded-lg mb-4 outline-indigo-500"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          required
          minLength={6}
          type="password"
          placeholder="Password (minimum 6 characters)"
          className="w-full border p-3 rounded-lg mb-6 outline-indigo-500"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700">
          Register
        </button>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}