const boardsService = require("./board.service");

const boardsRouter = (fastify, options, done) => {
  fastify.get(
    "/boards",
    async (req, res) => {
      const boards = boardsService.getAllBoards();

      if (boards.length > 0) {
        res
          .status(200)
          .header("Content-Type", "application/json; charset=utf-8")
          .send(boards);
      } else {
        res
          .status(404)
          .header("Content-Type", "application/json; charset=utf-8")
          .send(boards);
      }
    },
  );

  fastify.get(
    "/boards/:boardId",
    async (req, res) => {
      const board = boardsService.getBoardById(req.params.boardId);

      if (board) {
        res
          .status(200)
          .header("Content-Type", "application/json; charset=utf-8")
          .send(board);
      } else {
        res
          .status(404)
          .header("Content-Type", "application/json; charset=utf-8")
          .send();
      }
    },
  );

  fastify.post(
    "/boards",
    async (req, res) => {
      const createdBoard = boardsService.createNewBoard(req.body);

      res
        .status(201)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(createdBoard);
    },
  );

  fastify.put(
    "/boards/:boardId",
    async (req, res) => {
      const {boardId} = req.params;
      const updatedBoard = boardsService.updateBoard(boardId, req.body);

      res
        .status(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(updatedBoard);
    }
  )

  fastify.delete(
    "/boards/:boardId",
    async (req, res) => {
      try {
        boardsService.deleteBoardById(req.params.boardId);

        res
          .status(200)
          .header("Content-Type", "application/json; charset=utf-8")
          .send();
      } catch(e) {
        res
          .status(404)
          .header("Content-Type", "application/json; charset=utf-8")
          .send();
      }
    }
  )

  done();
};

module.exports = boardsRouter;
