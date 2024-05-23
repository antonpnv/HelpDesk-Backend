class Ticket {
  constructor(id, name, status, description, created) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.description = description;
    this.created = created;
  }
}

module.exports = Ticket;
