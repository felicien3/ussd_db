const db = require('./db');
const menus = require('./utils/menus');

module.exports = (req, res) => {
  let { sessionId, phoneNumber, text } = req.body;
  const inputs = text.split("*");

  // Level 0 - Welcome
  if (text === "") {
    res.send(menus.welcome());
  }

  // Level 1 - Language selection
  else if (inputs.length === 1) {
    res.send(menus.mainMenu(inputs[0]));
  }

  // Level 2 - Main Menu or Other Operations
  else if (inputs.length === 2) {
    res.send(menus.otherOperations(inputs[0]));
  }

  // Invalid input
  else {
    res.send("END Invalid choice");
  }
};
