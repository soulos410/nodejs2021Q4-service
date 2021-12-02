const boardsRepo = require('./board.memory.repository');

const getAllBoards = () => boardsRepo.getAllBoards();

const createNewBoard = (boardFields) => boardsRepo.createNewBoard(boardFields);

const getBoardById = (boardId) => boardsRepo.findBoardById(boardId);

const deleteBoardById = (boardId) => boardsRepo.deleteBoardById(boardId);

const updateBoard = (boardId, fieldsToUpdate) => boardsRepo.updateBoard(boardId, fieldsToUpdate);

module.exports = {
  getAllBoards,
  createNewBoard,
  getBoardById,
  deleteBoardById,
  updateBoard,
}