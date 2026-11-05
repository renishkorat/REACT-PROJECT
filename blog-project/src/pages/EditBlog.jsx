import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBlog, updateBlog } from "../services/api";
import { useAuth } from "../context/Authcontext";
export default function EditBlog() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    category: "Technology",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlog(id)
      .then((blog) => {
        if (blog.authorId !== user.id) {
          navigate("/dashboard");
          return;
        }

        setForm({
          title: blog.title,
          description: blog.description,
          content: blog.content,
          image: blog.image || "",
          category: blog.category,
        });
      })
      .catch(() => navigate("/dashboard"))
      .finally(() => setLoading(false));
  }, [id, user.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateBlog(id, form);
      navigate("/dashboard");
    } catch {
      alert("Unable to update blog");
    }
  };

  if (loading) return <p className="text-center py-20">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto px-5 py-12">
      <h1 className="text-3xl font-bold mb-8">Edit Blog</h1>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm space-y-5">
        <div>
          <label className="block font-medium mb-2">Title</label>
          <input
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Description</label>
          <textarea
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Content</label>
          <textarea
            required
            rows="10"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Image URL</label>
          <input
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="w-full border p-3 rounded-lg bg-white"
        >
          <option>Technology</option>
          <option>Programming</option>
          <option>Lifestyle</option>
          <option>Education</option>
          <option>Travel</option>
        </select>

        <button className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold">
          Update Blog
        </button>
      </form>
    </div>
  );
}