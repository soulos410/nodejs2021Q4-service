const uuid = require("uuid");

class Task {
  constructor(
    {
      id = uuid.v4(),
      title = 'task',
      order = 0,
      description = "description",
      userId = null,
      boardId = null,
      columnId = null,
    } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  update(newTaskValues) {
    this.title = newTaskValues.title || this.title;
    this.order = newTaskValues.order || this.order;
    this.description = newTaskValues.description || this.description;
    this.boardId = newTaskValues.boardId || this.boardId;
    this.columnId = newTaskValues.columnId || this.columnId;
  }

  unassignUser() {
    this.userId = null;
  }
}

module.exports = Task;
