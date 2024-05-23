const express = require('express');
const {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicketById,
  deleteTicketById 
} = require('./ticketController');

const router = express.Router();

router.get('/', (req, res) => {
  const method = req.query.method;
  const id = req.query.id;

  switch (method) {
    case 'allTickets':
      getAllTickets(req, res);
      break;
    case 'ticketById':
      getTicketById(req, res, id);
      break;
    case 'deleteById':
      deleteTicketById(req, res, id);
      break;
    default:
      res.status(400).send('Unknown method');
      break;
  }
});

router.post('/', (req, res) => {
  const method = req.query.method;
  const id = req.query.id;

  switch (method) {
    case 'createTicket':
      createTicket(req, res);
      break;
    case 'updateById':
      updateTicketById(req, res, id);
      break;
    default:
      res.status(400).send('Unknown method');
      break;
  }
});

module.exports = router;
