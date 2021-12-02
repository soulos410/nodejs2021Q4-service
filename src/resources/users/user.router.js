const usersService = require("./user.service");
const tasksService = require("../tasks/task.service");

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
    "/users/:userId",
    async (req, res) => {
      const {userId} = req.params;
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
      const userWithoutPassword = usersService.getUserById(createdUser.id);

      res
        .status(201)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(userWithoutPassword);
    });

  fastify.delete(
    "/users/:userId",
    async (req, res) => {
      const {userId} = req.params;

      usersService.deleteUser(userId);
      tasksService.unassignUser(userId);

      res
        .status(200)
        .send()
    }
  );
  
  fastify.put(
    "/users/:userId",
    async (req, res) => {
      usersService.updateUser(req.body);

      res
        .status(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send();
    }
  );

  done();
};

module.exports = usersRouter;
