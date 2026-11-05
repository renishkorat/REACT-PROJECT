import { Link } from "react-router-dom";
import { CalendarDays, User } from "lucide-react";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group">
      <Link to={`/blog/${blog.id}`}>
        <div className="overflow-hidden h-52">
          <img
            src={blog.image || "https://placehold.co/600x400?text=Blog"}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
      </Link>

      <div className="p-5">
        <span className="text-xs font-bold bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
          {blog.category}
        </span>

        <Link to={`/blog/${blog.id}`}>
          <h2 className="text-xl font-bold mt-4 mb-2 hover:text-indigo-600 line-clamp-2">
            {blog.title}
          </h2>
        </Link>

        <p className="text-gray-500 text-sm line-clamp-3 mb-5">
          {blog.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-4">
          <span className="flex items-center gap-1">
            <User size={14} />
            {blog.authorName}
          </span>

          <span className="flex items-center gap-1">
            <CalendarDays size={14} />
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}