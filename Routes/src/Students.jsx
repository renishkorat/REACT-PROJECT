
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Students() {
  const navigate = useNavigate();

  const [arr, setArr] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("students") || "[]");
    } catch {
      return [];
    }
  });

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [editId, setEditId] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const [obj, setObj] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  // Save data
  const save = (data) => {
    localStorage.setItem("students", JSON.stringify(data));
    setArr(data);
  };

  // Edit student
  const handleEdit = (student) => {
    setEditId(student.id);
    setShowPassword(false);

    setObj({
      name: student.name,
      email: student.email,
      password: student.password,
      phone: student.phone,
    });
  };

  // Input changes
  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
  };

  // Validation
  const isValid = () =>
    obj.name.trim().length >= 3 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj.email) &&
    obj.password.length >= 6 &&
    /^[6-9]\d{9}$/.test(obj.phone);

  // Update student
  const updateStudent = (id) => {
    if (!isValid()) {
      alert("Please enter valid details.");
      return;
    }

    const updated = arr.map((student) =>
      student.id === id
        ? { ...obj, name: obj.name.trim(), id: student.id }
        : student
    );

    save(updated);
    setEditId(null);
    setShowPassword(false);

    setObj({
      name: "",
      email: "",
      password: "",
      phone: "",
    });

    alert("Student updated successfully!");
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditId(null);
    setShowPassword(false);

    setObj({
      name: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  // Search students
  const filtered = arr.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filtered.length / 5);
  const visible = filtered.slice((page - 1) * 5, page * 5);

  useEffect(() => {
    if (page > Math.max(totalPages, 1)) {
      setPage(Math.max(totalPages, 1));
    }
  }, [page, totalPages]);

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";

  const buttonClass =
    "rounded-lg px-3 py-2 text-sm font-medium transition";

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Management System
            </p>

            <h1 className="text-3xl font-bold text-gray-900">
              Students
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage, search and update student records.
            </p>
          </div>

          <button
            onClick={() => navigate("/add")}
            className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            + Add Student
          </button>
        </div>

        {/* Statistics */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Students</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {arr.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Search Results</p>
            <h2 className="mt-2 text-3xl font-bold text-indigo-600">
              {filtered.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Current Page</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {page} / {Math.max(totalPages, 1)}
            </h2>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

          {/* Search */}
          <div className="flex flex-col gap-4 border-b border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Students List
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                View and manage registered students.
              </p>
            </div>

            <input
              type="text"
              placeholder="Search by student name..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className={`${inputClass} sm:max-w-xs`}
            />
          </div>

          {/* Table Data */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
                <tr>
                  <th className="px-5 py-4">ID</th>
                  <th className="px-5 py-4">Student Name</th>
                  <th className="px-5 py-4">Email</th>
                  <th className="px-5 py-4">Phone</th>
                  <th className="px-5 py-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {visible.map((student) => (
                  <tr
                    key={student.id}
                    className="transition hover:bg-indigo-50/40"
                  >
                    {editId === student.id ? (
                      <>
                        <td className="px-5 py-4 font-medium text-gray-500">
                          {student.id}
                        </td>

                        <td className="px-5 py-4">
                          <input
                            name="name"
                            value={obj.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className={inputClass}
                          />
                        </td>

                        <td className="px-5 py-4">
                          <input
                            name="email"
                            type="email"
                            value={obj.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className={inputClass}
                          />
                        </td>

                        <td className="px-5 py-4">
                          <input
                            name="phone"
                            type="tel"
                            value={obj.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className={inputClass}
                          />

                          {/* Password with Eye Icon */}
                          {/* <div className="relative mt-2">
                            <input
                              name="password"
                              type={showPassword ? "text" : "password"}
                              value={obj.password}
                              onChange={handleChange}
                              placeholder="Password"
                              className={`${inputClass} pr-10`}
                            />

                            <button
                              type="button"
                              onClick={() =>
                                setShowPassword(!showPassword)
                              }
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600"
                              aria-label={
                                showPassword
                                  ? "Hide password"
                                  : "Show password"
                              }
                            >
                              {showPassword ? (
                                <EyeOff size={20} />
                              ) : (
                                <Eye size={20} />
                              )}
                            </button>
                          </div> */}
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => updateStudent(student.id)}
                              className={`${buttonClass} bg-green-100 text-green-700 hover:bg-green-200`}
                            >
                              Save
                            </button>

                            <button
                              onClick={cancelEdit}
                              className={`${buttonClass} bg-gray-100 text-gray-700 hover:bg-gray-200`}
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-5 py-4 font-medium text-gray-500">
                          {student.id}
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                              {student.name.charAt(0).toUpperCase()}
                            </div>

                            <span className="font-semibold text-gray-800">
                              {student.name}
                            </span>
                          </div>
                        </td>

                        <td className="px-5 py-4 text-gray-600">
                          {student.email}
                        </td>

                        <td className="px-5 py-4 text-gray-600">
                          {student.phone}
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => handleEdit(student)}
                              className={`${buttonClass} bg-indigo-50 text-indigo-700 hover:bg-indigo-100`}
                            >
                              Edit
                            </button>

                            <button
                              onClick={() => {
                                if (
                                  window.confirm(
                                    `Delete ${student.name}?`
                                  )
                                ) {
                                  navigate(`/delete/${student.id}`);
                                }
                              }}
                              className={`${buttonClass} bg-red-50 text-red-600 hover:bg-red-100`}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))}

                {visible.length === 0 && (
                  <tr>
                    <td colSpan="5" className="px-5 py-16 text-center">
                      <div className="text-4xl">📋</div>

                      <h3 className="mt-3 font-semibold text-gray-800">
                        No students found
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Try another search or add a new student.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col gap-4 border-t border-gray-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">
              Showing{" "}
              {filtered.length === 0 ? 0 : (page - 1) * 5 + 1}
              {" - "}
              {Math.min(page * 5, filtered.length)}
              {" of "}
              {filtered.length} students
            </p>

            <div className="flex items-center gap-3">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>

              <span className="text-sm font-semibold text-gray-700">
                {page} / {Math.max(totalPages, 1)}
              </span>

              <button
                disabled={page >= totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
