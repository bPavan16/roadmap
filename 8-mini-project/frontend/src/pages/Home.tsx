import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to Task assigner app</h1>
      <p>
        This is a simple task management application where admins can create
        tasks and assign them to users. Users can view their assigned tasks and
        mark them as complete.
      </p>

      <button
        onClick={() => navigate("/login")}
        className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
      >
        Login
      </button>
      <button
        onClick={() => navigate("/register")}
        className="bg-green-600 text-white p-3 rounded hover:bg-green-700 ml-4"
      >
        Register
      </button>
    </div>
  );
};

export default Home;
