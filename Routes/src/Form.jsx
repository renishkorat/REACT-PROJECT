
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Form() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [obj, setObj] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      obj.name.trim().length < 3 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj.email) ||
      obj.password.length < 6 ||
      !/^[6-9]\d{9}$/.test(obj.phone)
    ) {
      alert("Please enter valid details.");
      return;
    }

    let arr = [];

    try {
      arr = JSON.parse(localStorage.getItem("students") || "[]");

      if (!Array.isArray(arr)) {
        arr = [];
      }
    } catch {
      arr = [];
    }

    arr.push({
      ...obj,
      name: obj.name.trim(),
      id: Date.now(),
    });

    localStorage.setItem("students", JSON.stringify(arr));

    alert("Student added successfully!");

    navigate("/students");
  };

  const inputClass =
    "w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-9">

        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate("/students")}
          className="mb-6 text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
        >
          ← Back to Students
        </button>

        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Student Management
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Add Student
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Fill in the details to register a new student.
          </p>
        </div>

        {/* Student Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Full Name
            </label>

            <input
              name="name"
              type="text"
              placeholder="Enter full name"
              value={obj.name}
              onChange={handleChange}
              className={inputClass}
              minLength={3}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <input
              name="email"
              type="email"
              placeholder="student@example.com"
              value={obj.email}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* Password with Eye Icon */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Password
            </label>

            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Minimum 6 characters"
                value={obj.password}
                onChange={handleChange}
                className={inputClass}
                minLength={6}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-indigo-600"
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Phone Number
            </label>

            <input
              name="phone"
              type="tel"
              placeholder="10-digit mobile number"
              value={obj.phone}
              onChange={handleChange}
              className={inputClass}
              pattern="[6-9][0-9]{9}"
              maxLength={10}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}
