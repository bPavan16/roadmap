import api from "./axios";

export const loginUser = async (email: string, password: string) => {
  const res = await api.post("/auth/login", {
    email,
    password,
  });
  return res.data;
};

export const registerUser = (
  name: string,
  email: string,
  password: string,
  isAdmin: boolean,
) => {
  return api.post(`/auth/register`, {
    name,
    email,
    password,
    role: isAdmin ? "admin" : "user",
  });
};
