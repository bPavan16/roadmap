import api from "./axios";

export const getTasks = (token: string) =>
  api.get("/tasks", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const createTask = (
  token: string,
  data: { title: string; description: string; userId: number },
) =>
  api.post("/tasks", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const completeTask = (token: string, taskId: number) =>
  api.patch(
    `/tasks/${taskId}/complete`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
