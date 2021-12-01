const usersService = require("./user.service");

const usersRouter = (fastify, options, done) => {
  fastify.get(
    "/users",
    async (req, res) => {
      const users = usersService.getAll();

      res
        .status(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(users);
    },
  );

  fastify.get(
    "/users/:id",
    async (req, res) => {
      const userId = req.query.id;
      const user = usersService.getUserById(userId);

      if (user) {
        res
          .status(200)
          .header("Content-Type", "application/json; charset=utf-8")
          .send(JSON.stringify(user));
      } else {
        res
          .status(200)
          .header("Content-Type", "application/json; charset=utf-8")
          .send({id: "undefined"});
      }
    },
  );

  fastify.post("/users",
    async (req, res) => {
      const createdUser = usersService.addUser(req.body);

      res
        .status(201)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(JSON.stringify(createdUser));
    });

  fastify.delete(
    "/users/:id",
    async (req, res) => {
      usersService.deleteUser(req.query.id);

      res
        .status(200)
        .send()
    }
  )

  done();
};

module.exports = usersRouter;
