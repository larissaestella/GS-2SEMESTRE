import users from '../Services/user.json';

export const getUserByUsername = (username) => {
  return users.find(user => user.username === username);
};

export const getUserById = (id) => {
  return users.find(user => user.id === id);
};
