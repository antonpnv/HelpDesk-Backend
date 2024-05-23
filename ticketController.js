const { v4: uuidv4 } = require('uuid');
const tickets = require('./ticketModel');

const getAllTickets = (req, res) => {
  res.json(tickets.map(ticket => ({
    id: ticket.id,
    name: ticket.name,
    status: ticket.status,
    created: ticket.created 
  })));
};

const getTicketById = (req, res, id) => {
  const ticket = tickets.find(t => t.id === id);

  if (ticket) {
    res.json(ticket);
  } else {
    res.status(404).send('Ticket not found');
  }
};

const createTicket = (req, res) => {
  const { name, description, status } = req.body;
  const newTicket = { id: uuidv4(), name, description, status: status || false, created: Date.now() };
  tickets.push(newTicket);
  res.status(201).json(newTicket);
};

const updateTicketById = (req, res, id) => {
  const { name, description, status } = req.body;
  const ticketIndex = tickets.findIndex(t => t.id === id);

  if (ticketIndex !== -1) {
    tickets[ticketIndex] = { ...tickets[ticketIndex], name, description, status };
    res.status(200).json(tickets[ticketIndex]);
  } else {
    res.status(404).send('Ticket not found');
  }
};

const deleteTicketById = (req, res, id) => {
  const index = tickets.findIndex(t => t.id === id);

  if (index !== -1) {
    tickets.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Ticket not found');
  }
};

module.exports = {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicketById,
  deleteTicketById
};
