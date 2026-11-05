import { Link } from "react-router-dom";
import {
  BookOpen,
  Mail,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-5 pt-14 pb-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo and Description */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-white"
            >
              <BookOpen className="text-indigo-400" size={30} />
              BlogSpace
            </Link>

            <p className="text-gray-400 mt-5 leading-7 text-sm">
              Discover amazing stories, share your thoughts,
              and connect with a community of passionate writers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
              <li><Link to="/dashboard" className="hover:text-indigo-400">Dashboard</Link></li>
              <li><Link to="/create" className="hover:text-indigo-400">Write Blog</Link></li>
              <li><Link to="/register" className="hover:text-indigo-400">Register</Link></li>
              <li><Link to="/login" className="hover:text-indigo-400">Login</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Categories
            </h3>

            <ul className="space-y-3 text-sm">
              <li>Technology</li>
              <li>Programming</li>
              <li>Lifestyle</li>
              <li>Education</li>
              <li>Travel</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact Us
            </h3>

            <p className="text-sm text-gray-400 leading-6">
              Have questions or suggestions?
              We'd love to hear from you.
            </p>

            <div className="flex items-center gap-3 mt-5 text-sm">
              <Mail className="text-indigo-400" size={20} />
              <span>hello@blogspace.com</span>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} BlogSpace. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm hover:text-indigo-400 transition"
          >
            Back to Top
            <ArrowUp size={17} />
          </button>

        </div>
      </div>
    </footer>
  );
}