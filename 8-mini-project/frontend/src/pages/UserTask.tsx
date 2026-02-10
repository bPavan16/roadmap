import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getTasks, completeTask } from "../api/task.api";

export default function UserTasks() {
  const { token } = useAuth();
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const res = await getTasks(token!);
      setTasks(res.data);
    } catch (error: any) {
      console.error("Failed to load tasks:", error);
      alert(error.response?.data?.message || "Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const markComplete = async (taskId: number) => {
    try {
      await completeTask(token!, taskId);
      loadTasks();
    } catch (error: any) {
      console.error("Failed to complete task:", error);
      alert(error.response?.data?.message || "Failed to complete task");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Tasks</h1>

      {loading && <p className="text-gray-500">Loading tasks...</p>}

      {!loading && tasks.length === 0 && (
        <p className="text-gray-500">No tasks assigned.</p>
      )}

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{task.title}</h2>
              <p className="text-gray-600 text-sm">{task.description}</p>
            </div>

            {task.isCompleted ? (
              <span className="text-green-600 font-semibold">Completed</span>
            ) : (
              <button
                onClick={() => markComplete(task.id)}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Mark Complete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
