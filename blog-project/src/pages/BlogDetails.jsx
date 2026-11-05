import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { getBlog } from "../services/api";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlog(id)
      .then(setBlog)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="text-center py-20">Loading blog...</p>;
  }

  if (!blog) {
    return <p className="text-center py-20">Blog not found.</p>;
  }

  return (
    <article className="max-w-4xl mx-auto px-5 py-12">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-indigo-600 mb-8"
      >
        <ArrowLeft size={18} />
        Back to Blogs
      </Link>

      <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">
        {blog.category}
      </span>

      <h1 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
        {blog.title}
      </h1>

      <p className="text-gray-500 text-lg mt-5">
        {blog.description}
      </p>

      <div className="flex flex-wrap gap-6 text-sm text-gray-500 mt-6 mb-8">
        <span className="flex items-center gap-2">
          <User size={17} />
          {blog.authorName}
        </span>

        <span className="flex items-center gap-2">
          <Calendar size={17} />
          {new Date(blog.createdAt).toLocaleDateString()}
        </span>
      </div>

      <img
        src={blog.image || "https://placehold.co/1200x600?text=Blog"}
        alt={blog.title}
        className="w-full h-64 md:h-[450px] object-cover rounded-2xl"
      />

      <div className="py-10">
        <p className="text-gray-700 text-lg leading-9 whitespace-pre-wrap">
          {blog.content}
        </p>
      </div>
    </article>
  );
}