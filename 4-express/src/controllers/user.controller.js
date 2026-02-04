import users from "../data/users.js";

export const getAllUsers = (req, res) => {
  res.status(200).json({
    message: "All users fetched",
    data: users,
  });
};

export const getUserById = (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "No user found",
    });
  }

  res.status(200).json({
    message: `Fetched user with id = ${id}`,
    data: user,
  });
};

export const updateUserById = (req, res) => {
  const id = Number(req.params.id);
  const { name, email, role, active } = req.body;

  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  users[userIndex] = {
    ...users[userIndex],
    name: name ?? users[userIndex].name,
    email: email ?? users[userIndex].email,
    role: role ?? users[userIndex].role,
    active: active ?? users[userIndex].active,
  };

  res.status(200).json({
    message: `User with id ${id} updated successfully`,
    data: users[userIndex],
  });
};

export const deleteUserById = (req, res) => {
  const id = Number(req.params.id);

  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const deletedUser = users.splice(userIndex, 1);

  res.status(200).json({
    message: `User with id ${id} deleted successfully`,
    data: deletedUser[0],
  });
};
