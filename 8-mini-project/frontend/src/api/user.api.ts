import api from "./axios";

export const getAllUsers = (token: string) =>
  api.get("/users", {
    headers: { Authorization: `Bearer ${token}` },
  });
