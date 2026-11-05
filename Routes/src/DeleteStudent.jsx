
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const arr = JSON.parse(
        localStorage.getItem("students") || "[]"
      );

      const updated = arr.filter(
        (student) => String(student.id) !== id
      );

      localStorage.setItem("students", JSON.stringify(updated));
    } catch {
      // Invalid LocalStorage data
    }

    navigate("/students", { replace: true });
  }, [id, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <p className="text-lg font-medium text-gray-600">
        Deleting student...
      </p>
    </div>
  );
}
