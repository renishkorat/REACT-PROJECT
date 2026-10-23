'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const initialObj = {
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: ""
  };

  const [obj, setObj] = useState(initialObj);
  const [arrOfObj, setArrOfObj] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const userPerPage = 4;

  // Load data from LocalStorage
  useEffect(() => {
    try {

      const user1 = [
        {
          name: "Renish Korat",
          email: "koratrenish350@gmail.com",
          password: "Renish@123",
          phone: "7984048969",
          gender: "Male"
        },
        {
          name: "KAVY PATEL",
          email: "kavy@gmail.com",
          password: "Kavy@1234",
          phone: "8487927223",
          gender: "Male"
        },
        {
          name: "meet korat",
          email: "meet@gmail.com",
          password: "Meet@123",
          phone: "8487927223",
          gender: "Male"
        },
        {
          name: "Rahul Patel",
          email: "rahul@gmail.com",
          password: "Rahul@123",
          phone: "9876543210",
          gender: "Male"
        },
        {
          name: "Priya Sharma",
          email: "priya@gmail.com",
          password: "Priya@123",
          phone: "9876543211",
          gender: "Female"
        },
        {
          name: "Meet Shah",
          email: "meetshah@gmail.com",
          password: "Meet@123",
          phone: "9876543212",
          gender: "Male"
        },
        {
          name: "Krisha Desai",
          email: "krisha@gmail.com",
          password: "Krisha@123",
          phone: "9876543213",
          gender: "Female"
        },
        {
          name: "Yash Joshi",
          email: "yash@gmail.com",
          password: "Yash@123",
          phone: "9876543214",
          gender: "Male"
        },
        {
          name: "Neha Verma",
          email: "neha@gmail.com",
          password: "Neha@123",
          phone: "9876543215",
          gender: "Female"
        },
        {
          name: "Dhruv Korat",
          email: "dhruv@gmail.com",
          password: "Dhruv@123",
          phone: "9876543216",
          gender: "Male"
        },
        {
          name: "Harsh Patel",
          email: "harsh@gmail.com",
          password: "Harsh@123",
          phone: "9876543217",
          gender: "Male"
        },
        {
          name: "Pooja Shah",
          email: "pooja@gmail.com",
          password: "Pooja@123",
          phone: "9876543218",
          gender: "Female"
        }
      ];

      localStorage.setItem("userDetail", JSON.stringify(user1));
      const localStorageArr = JSON.parse(
        localStorage.getItem("userDetail") || "[]"
      );

      if (Array.isArray(localStorageArr)) {
        setArrOfObj(localStorageArr);
      }
    } catch {
      setArrOfObj([]);
    }
  }, []);

  // Handle input changes
  const handlechange = (e) => {
    const { name, value } = e.target;

    setObj({
      ...obj,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!obj.name.trim()) {
      newErrors.name = "Name is required";
    } else if (obj.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (!/^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(obj.name.trim())) {
      newErrors.name = "Enter a valid name using letters only";
    }

    // Email validation
    if (!obj.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj.email.trim())
    ) {
      newErrors.email = "Enter a valid email address";
    }

    // Password validation
    if (!obj.password) {
      newErrors.password = "Password is required";
    } else if (obj.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters";
    } else if (!/[A-Z]/.test(obj.password)) {
      newErrors.password = "Include at least one uppercase letter";
    } else if (!/[a-z]/.test(obj.password)) {
      newErrors.password = "Include at least one lowercase letter";
    } else if (!/[0-9]/.test(obj.password)) {
      newErrors.password = "Include at least one number";
    } else if (!/[^A-Za-z0-9]/.test(obj.password)) {
      newErrors.password = "Include at least one special character";
    }

    // Phone validation
    if (!obj.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9][0-9]{9}$/.test(obj.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }

    // Gender validation
    if (!obj.gender) {
      newErrors.gender = "Please select your gender";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let updateArr;

    if (editIndex !== null) {
      updateArr = arrOfObj.map((ele, index) =>
        index === editIndex
          ? {
            ...obj,
            name: obj.name.trim(),
            email: obj.email.trim(),
            phone: obj.phone.trim()
          }
          : ele
      );
    } else {
      updateArr = [
        ...arrOfObj,
        {
          ...obj,
          name: obj.name.trim(),
          email: obj.email.trim(),
          phone: obj.phone.trim()
        }
      ];
    }

    localStorage.setItem("userDetail", JSON.stringify(updateArr));
    setArrOfObj(updateArr);
    setEditIndex(null);
    setObj(initialObj);
    setErrors({});
    setShowPassword(false);
  };

  // Edit user
  const handleEdit = (index) => {
    setObj({ ...arrOfObj[index] });
    setEditIndex(index);
    setErrors({});
    setShowPassword(false);
  };

  // Delete user
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const updateArr = arrOfObj.filter(
        (ele, i) => i !== index
      );

      localStorage.setItem("userDetail", JSON.stringify(updateArr));
      setArrOfObj(updateArr);

      if (editIndex === index) {
        setEditIndex(null);
        setObj(initialObj);
        setErrors({});
      } else if (editIndex !== null && editIndex > index) {
        setEditIndex(editIndex - 1);
      }
    }
  };

  const filteredUsers = arrOfObj
    .filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    )

    .sort((a, b) => {
      if (sortOrder === "name-asc") {
        return a.name.localeCompare(b.name);
      }

      if (sortOrder === "name-desc") {
        return b.name.localeCompare(a.name);
      }

      if (sortOrder === "email-asc") {
        return a.email.localeCompare(b.email);
      }

      return 0;
    });

  const totalPages = Math.ceil(filteredUsers.length / userPerPage);

  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;

  const currentUser = filteredUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  return (
    <div className="container mt-3">
      <div className="w-50 mx-auto">
        <h3 className="text-primary mb-3">
          User Registration Form
        </h3>

        <form
          onSubmit={handleSubmit}
          className="card p-3 shadow-sm mb-4"
          noValidate
        >
          {/* Name */}
          <div className="mb-3">
            <label className="form-label mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={obj.name}
              placeholder="Enter your name"
              onChange={handlechange}
              className={`form-control form-control-sm ${errors.name ? "is-invalid" : ""
                }`}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={obj.email}
              placeholder="Enter your email"
              onChange={handlechange}
              className={`form-control form-control-sm ${errors.email ? "is-invalid" : ""
                }`}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label mb-1">Password</label>
            <div className="input-group input-group-sm">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={obj.password}
                placeholder="Enter your password"
                onChange={handlechange}
                autoComplete="new-password"
                className={`form-control ${errors.password ? "is-invalid" : ""
                  }`}
              />

              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {errors.password && (
              <div className="text-danger small mt-1">
                {errors.password}
              </div>
            )}

            <small className="text-muted">
              Minimum 8 characters with uppercase, lowercase,
              number and special character.
            </small>
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={obj.phone}
              placeholder="Enter your phone number"
              onChange={handlechange}
              maxLength={10}
              className={`form-control form-control-sm ${errors.phone ? "is-invalid" : ""
                }`}
            />
            {errors.phone && (
              <div className="invalid-feedback">{errors.phone}</div>
            )}
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label className="form-label mb-1">Gender</label>
            <select
              name="gender"
              value={obj.gender}
              onChange={handlechange}
              className={`form-select form-select-sm ${errors.gender ? "is-invalid" : ""
                }`}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            {errors.gender && (
              <div className="invalid-feedback">{errors.gender}</div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-sm w-100"
          >
            {editIndex !== null ? "Update User" : "Submit"}
          </button>
        </form>
      </div>

      {/* Registered Users Table */}
      <h4 className="mb-3">Registered Users</h4>

      <div className="row mb-3">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Default Order</option>
            <option value="name-asc">Name (A to Z)</option>
            <option value="name-desc">Name (Z to A)</option>
            <option value="email-asc">Email (A to Z)</option>

          </select>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover table-sm">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {currentUser.map((ele) => {
              const index = arrOfObj.indexOf(ele);

              return (
                <tr key={index}>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{"•".repeat((ele.password || "").length)}</td>
                  <td>{ele.gender}</td>
                  <td>{ele.phone}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning btn-sm me-2 mb-1"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger btn-sm mb-1"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}

            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {filteredUsers.length > 0 && (
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 my-3">
            <span>
              Showing {indexOfFirstUser + 1} to{" "}
              {Math.min(indexOfLastUser, filteredUsers.length)} of{" "}
              {filteredUsers.length} users
            </span>

            <div className="btn-group">
              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`btn btn-sm ${currentPage === i + 1
                    ? "btn-primary"
                    : "btn-outline-primary"
                    }`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
