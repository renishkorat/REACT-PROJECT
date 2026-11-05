import { useEffect, useState } from "react";
import { getBlogs } from "../services/api";
import BlogCard from "../components/BlogCard";
import { Search } from "lucide-react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs()
      .then(setBlogs)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const categories = [
    "All",
    "Technology",
    "Programming",
    "Lifestyle",
    "Education",
    "Travel",
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || blog.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section className="bg-indigo-700 text-white py-24 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-indigo-200 uppercase tracking-widest text-sm">
            Welcome to BlogSpace
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
            Stories That Inspire.
            <br />
            Ideas That Matter.
          </h1>

          <p className="text-indigo-100 mt-6 text-lg">
            Discover amazing stories, learn something new and share your ideas.
          </p>

          <div className="max-w-xl mx-auto mt-9 relative">
            <Search className="absolute left-4 top-4 text-gray-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search blogs..."
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 bg-white outline-none"
            />
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-5 py-16">
        <div className="flex flex-wrap items-center justify-between gap-5 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <p className="text-gray-500 mt-2">
              Explore the latest stories from our community.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  category === item
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-600 border hover:border-indigo-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <p className="text-center py-20">Loading blogs...</p>
        ) : filteredBlogs.length === 0 ? (
          <p className="text-center py-20 text-gray-500">
            No blogs found.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}