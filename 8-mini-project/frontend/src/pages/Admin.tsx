import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getTasks, createTask, deleteTask, updateTask } from "../api/task.api";
import { getAllUsers } from "../api/user.api";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function AdminTasks() {
  const { token } = useAuth();
  const [tasks, setTasks] = useState<any[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    userId: "",
  });
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const loadTasks = async () => {
    try {
      const res = await getTasks(token!);
      setTasks(res.data);
    } catch (error: any) {
      console.error("Failed to load tasks:", error);
      alert(error.response?.data?.message || "Failed to load tasks");
    }
  };

  const loadUsers = async () => {
    try {
      const res = await getAllUsers(token!);
      setUsers(res.data);
    } catch (error: any) {
      console.error("Failed to load users:", error);
      alert(error.response?.data?.message || "Failed to load users");
    }
  };

  useEffect(() => {
    loadTasks();
    loadUsers();
  }, []);

  const submitTask = async () => {
    try {
      if (!form.title || !form.userId) {
        alert("Title and user are required");
        return;
      }

      setLoading(true);
      if (editingTaskId) {
        await updateTask(token!, editingTaskId, {
          title: form.title,
          description: form.description,
          userId: Number(form.userId),
        });
        setEditingTaskId(null);
      } else {
        await createTask(token!, {
          title: form.title,
          description: form.description,
          userId: Number(form.userId),
        });
      }

      setForm({ title: "", description: "", userId: "" });
      loadTasks();
    } catch (error: any) {
      console.error("Failed to save task:", error);
      alert(error.response?.data?.message || "Failed to save task");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (task: any) => {
    setForm({
      title: task.title,
      description: task.description,
      userId: task.assignedToId.toString(),
    });
    setEditingTaskId(task.id);
  };

  const handleDelete = async (taskId: number) => {
    if (!confirm("Are you sure you want to delete this task?")) {
      return;
    }

    try {
      await deleteTask(token!, taskId);
      loadTasks();
    } catch (error: any) {
      console.error("Failed to delete task:", error);
      alert(error.response?.data?.message || "Failed to delete task");
    }
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
    setForm({ title: "", description: "", userId: "" });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin – Task Management</h1>

      {/* Create Task */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="font-semibold mb-3">
          {editingTaskId ? "Edit Task" : "Create Task"}
        </h2>

        <input
          className="border p-2 w-full mb-2"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          className="border p-2 w-full mb-2"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <select
          className="border p-2 w-full mb-2"
          value={form.userId}
          onChange={(e) => setForm({ ...form, userId: e.target.value })}
        >
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name} ({user.email})
            </option>
          ))}
        </select>

        <div className="flex gap-2">
          <button
            onClick={submitTask}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Saving..." : editingTaskId ? "Update Task" : "Create & Assign"}
          </button>
          {editingTaskId && (
            <button
              onClick={cancelEdit}
              disabled={loading}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Task List */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-3">All Tasks</h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Title</th>
              <th className="border p-2">Assigned To</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t) => (
              <tr key={t.id}>
                <td className="border p-2">{t.title}</td>
                <td className="border p-2">{t.assignedTo?.name ?? "—"}</td>
                <td className="border p-2">
                  {t.isCompleted ? "✅ Completed" : "⏳ Pending"}
                </td>
                <td className="border p-2">
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => handleEdit(t)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
