import api from "./axios";

export const getAllUsers = (token: string) => {
  api.get("/users", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getUserById = (token: string, userId: number) => {
  api.get(`/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteUser = (token: string, userId: number) => {
  api.delete(`/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
