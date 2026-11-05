import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Edit, Trash2, FileText } from "lucide-react";
import { deleteBlog, getBlogs } from "../services/api";
import { useAuth } from "../context/Authcontext";
export default function Dashboard() {
  const { user } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBlogs = async () => {
    try {
      const data = await getBlogs();
      setBlogs(data.filter((blog) => blog.authorId === user.id));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, [user.id]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) {
      return;
    }

    try {
      await deleteBlog(id);
      setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    } catch {
      alert("Unable to delete blog");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-12">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <p className="text-gray-500 mt-2">
            Welcome back, {user.name}
          </p>
        </div>

        <Link
          to="/create"
          className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg"
        >
          <Plus size={18} />
          Create Blog
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <FileText className="text-indigo-600 mb-3" />
          <p className="text-gray-500">My Total Blogs</p>
          <h2 className="text-3xl font-bold mt-2">{blogs.length}</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <FileText className="text-green-600 mb-3" />
          <p className="text-gray-500">Published Blogs</p>
          <h2 className="text-3xl font-bold mt-2">{blogs.length}</h2>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">My Blog Posts</h2>
        </div>

        {loading ? (
          <p className="p-8">Loading...</p>
        ) : blogs.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-gray-500 mb-4">You haven't published any blogs yet.</p>
            <Link to="/create" className="text-indigo-600 font-semibold">
              Create your first blog
            </Link>
          </div>
        ) : (
          <div className="divide-y">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="p-5 flex flex-wrap justify-between items-center gap-4"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{blog.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {blog.category}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to={`/edit/${blog.id}`}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                    title="Edit"
                  >
                    <Edit size={19} />
                  </Link>

                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    title="Delete"
                  >
                    <Trash2 size={19} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}