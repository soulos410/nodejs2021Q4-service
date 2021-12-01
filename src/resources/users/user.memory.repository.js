const usersDatabase = [];

const getAll = () => usersDatabase.reduce((acc, user) => {
  const {password, ...restFields} = user;
  acc.push(restFields);

  return acc;
}, []);

const addUser = (user) => usersDatabase.push(user);

const getUserById = (id) => usersDatabase.find((user) => user.id === id);

const deleteUser = (id) => {
  const userIndex = usersDatabase.indexOf(id);

  usersDatabase.splice(userIndex, 1);
}

module.exports = {
  getAll,
  addUser,
  getUserById,
  deleteUser,
};
