const db = require('./db');
const menus = require('./utils/menus');

module.exports = (req, res) => {
  let { sessionId, phoneNumber, text } = req.body;

  let textValue = text.split('*');
  let level = textValue.length;

  let response = '';

  if (text === '') {
    response = menus.welcome();
  } else if (text === '1') {
    response = menus.mainMenu('en');
    db.createSession(sessionId, phoneNumber, 'English');
  } else if (text === '2') {
    response = menus.mainMenu('rw');
    db.createSession(sessionId, phoneNumber, 'Kinyarwanda');
  } else {
    response = 'END Invalid choice';
  }

  res.set('Content-Type: text/plain');
  res.send(response);
};
