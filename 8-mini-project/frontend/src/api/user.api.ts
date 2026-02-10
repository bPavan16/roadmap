import api from "./axios";

export const getAllUsers = (token: string) => {
    return api.get("/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
};

export const getUserById = (token: string, userId: number) => {
    return api.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
};

export const deleteUser = (token: string, userId: number) => {
    return api.delete(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
};
