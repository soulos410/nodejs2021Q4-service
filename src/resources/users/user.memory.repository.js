const usersDatabase = [];

const findUserById = (userId) => usersDatabase.find((user) => user.id === userId);

const getAll = () => usersDatabase.reduce((acc, user) => {
  const {password, ...restFields} = user;
  acc.push(restFields);

  return acc;
}, []);

const addUser = (user) => usersDatabase.push(user);

const getUserById = (id) => findUserById(id).getCredentials();

const deleteUser = (id) => {
  const userIndex = usersDatabase.indexOf(id);

  usersDatabase.splice(userIndex, 1);
};

const updateUser = (newFields) => {
  const userToUpdate = findUserById(newFields.id);

  userToUpdate.update(newFields);
}

module.exports = {
  getAll,
  addUser,
  getUserById,
  deleteUser,
  updateUser,
};
