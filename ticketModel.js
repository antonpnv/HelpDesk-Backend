const Ticket = require('./Ticket');

const tickets = [
  new Ticket('1', 'Поменять краску в принтере, ком. 404', false, 'В комнате 404 закончилась краска в принтере, новый картридж взять на складе.', new Date()),
  new Ticket('2', 'Переустановить Windows, ПК-Hall24', false, 'Необходимо переустановить Windows на компьютере ПК-Hall24: 1. ПК-Hall24 находится в комнате 400; ', new Date()),
  new Ticket('3', 'Установить обновление КВ-ХХХ', false, 'Вышло критическое обновление для Windows, нужно поставить обновления в следующем приоретете: 1. Сервера (не забыть сделать бэкап!) 2. Рабочие станции.', new Date())
];

module.exports = tickets;