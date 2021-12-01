const uuid = require("uuid");

class User {
  constructor({
    id = uuid.v4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}){
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  getCredentials () {
    return { id: this.id, name: this.name, login: this.login }
  }
  
  update(fieldsToUpdate) {
    const { name, password, login } = fieldsToUpdate;
    
    this.name = name || this.name;
    this.password = password || this.password;
    this.login = login || this.login;
  }
}

module.exports = {User};
