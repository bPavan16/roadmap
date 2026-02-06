import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getTasks, completeTask } from "../api/task.api";

export default function UserTasks() {
  const { token } = useAuth();
  const [tasks, setTasks] = useState<any[]>([]);

  const loadTasks = async () => {
    const res = await getTasks(token!);
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const markComplete = async (taskId: number) => {
    await completeTask(token!, taskId);
    loadTasks();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Tasks</h1>

      {tasks.length === 0 && (
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
