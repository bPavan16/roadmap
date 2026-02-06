import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getTasks, createTask } from "../api/task.api";
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

  const loadTasks = async () => {
    const res = await getTasks(token!);
    setTasks(res.data);
  };

  const loadUsers = async () => {
    const res = await getAllUsers(token!);
    setUsers(res.data);
  };

  useEffect(() => {
    loadTasks();
    loadUsers();
  }, []);

  const submitTask = async () => {
    await createTask(token!, {
      title: form.title,
      description: form.description,
      userId: Number(form.userId),
    });

    setForm({ title: "", description: "", userId: "" });
    loadTasks();
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin – Task Management</h1>

      {/* Create Task */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="font-semibold mb-3">Create Task</h2>

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

        <button
          onClick={submitTask}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create & Assign
        </button>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
