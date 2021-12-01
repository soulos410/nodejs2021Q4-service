const Board = require("./board.model");

const boardsDatabase = [];

const getAllBoards = () => boardsDatabase;

const createNewBoard = (boardFields) => {
  const newBoard = new Board({...boardFields});

  boardsDatabase.push(newBoard);

  return newBoard;
};

const findBoardById = (boardId) => boardsDatabase.find((board) => board.id === boardId);

const deleteBoardById = (boardId) => {
  const foundBoardIndex = boardsDatabase.indexOf(findBoardById(boardId));

  if (foundBoardIndex >= 0) {
    boardsDatabase.splice(foundBoardIndex, 1);
  } else {
    throw new Error("Board not found");
  }
};

const updateBoard = (boardId, fieldsToUpdate) => {
  const boardToUpdate = boardsDatabase.find((board) => board.id === boardId);

  boardToUpdate.update(fieldsToUpdate);

  return boardToUpdate;
}

module.exports = {
  boardsDatabase,
  getAllBoards,
  createNewBoard,
  findBoardById,
  deleteBoardById,
  updateBoard,
};
