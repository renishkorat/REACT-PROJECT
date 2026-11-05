import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../services/api";
import { useAuth } from "../context/Authcontext";
export default function CreateBlog() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    category: "Technology",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await createBlog({
        ...form,
        authorId: user.id,
        authorName: user.name,
        createdAt: new Date().toISOString(),
      });

      navigate("/dashboard");
    } catch {
      setError("Unable to create blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-3xl mx-auto px-5 py-12">
      <h1 className="text-3xl font-bold mb-2">Create New Blog</h1>
      <p className="text-gray-500 mb-8">
        Share your thoughts with the world.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 md:p-8 rounded-2xl shadow-sm space-y-5"
      >
        {error && <p className="text-red-500">{error}</p>}

        <div>
          <label className="block font-medium mb-2">Blog Title</label>
          <input
            required
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            className="w-full border rounded-lg p-3 outline-indigo-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Description</label>
          <textarea
            required
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Short description"
            rows="3"
            className="w-full border rounded-lg p-3 outline-indigo-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Blog Content</label>
          <textarea
            required
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Write your blog content..."
            rows="10"
            className="w-full border rounded-lg p-3 outline-indigo-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Image URL</label>
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="w-full border rounded-lg p-3 outline-indigo-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 bg-white"
          >
            <option>Technology</option>
            <option>Programming</option>
            <option>Lifestyle</option>
            <option>Education</option>
            <option>Travel</option>
          </select>
        </div>

        <button
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Publishing..." : "Publish Blog"}
        </button>
      </form>
    </div>
  );
}