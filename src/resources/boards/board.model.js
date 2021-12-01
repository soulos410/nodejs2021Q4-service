const uuid = require("uuid");

class Board {
  constructor({
      id = uuid.v4(),
      title = 'BOARD',
      columns = [],
    } = {}){
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  update(fieldsToUpdate) {
    this.id = fieldsToUpdate.id || this.id;
    this.title = fieldsToUpdate.title || this.title;
    this.columns = fieldsToUpdate.columns || this.columns;
  }
}

module.exports = Board;