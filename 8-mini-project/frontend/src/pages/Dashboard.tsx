import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, removeUser } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold mb-6">Welcome, {user.name}</h1>

        {/* Role-based actions */}
        <div className="space-y-4">
          {user.role === "admin" && (
            <button
              onClick={() => navigate("/admin/tasks")}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Go to Admin Panel
            </button>
          )}

          {user.role === "user" && (
            <button
              onClick={() => navigate("/user/tasks")}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Go to My Tasks
            </button>
          )}

          <button
            onClick={removeUser}
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
