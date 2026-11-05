const API_URL = "http://localhost:5000";

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  return response.json();
}

// GET USERS
export const getUsers = () => {
  return request("/users");
};

// REGISTER USER
export const registerUser = (data) => {
  return request("/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

// GET BLOGS
export const getBlogs = () => {
  return request("/blogs");
};

// GET SINGLE BLOG
export const getBlog = (id) => {
  return request(`/blogs/${id}`);
};

// CREATE BLOG
export const createBlog = (data) => {
  return request("/blogs", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

// UPDATE BLOG
export const updateBlog = (id, data) => {
  return request(`/blogs/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
};

// DELETE BLOG
export const deleteBlog = (id) => {
  return request(`/blogs/${id}`, {
    method: "DELETE",
  });
};