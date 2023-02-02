import http from './http-common';

const login = async (email, password) => {
  const data = { email, password };
  const loginResponse = await http.post('/login', { data });
  return loginResponse;
};

const getAll = async () => {
  const users = await http.get('/user');
  return users;
};

const getUserById = async (id) => {
  const user = await http.get(`user/${id}`);
  return user;
};

const updateUser = async (id, data) => {
  const updatedUser = await http.patch(`user/${id}`, { data });
  return updatedUser
};

const userService = {
  login,
  getAll,
  getUserById,
  updateUser,
};

export default userService;
