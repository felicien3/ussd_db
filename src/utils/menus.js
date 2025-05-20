module.exports = {
  welcome: () => {
    return `CON Welcome
1. English
2. Kinyarwanda`;
  },

  mainMenu: (language) => {
    if (language === '1') {
      return `CON Main Menu:
1. Check Balance
2. Buy Airtime
0. Back`;
    } else {
      return `CON Menu Nyamukuru:
1. Reba Konti
2. Gura Amavuta
0. Subira inyuma`;
    }
  },

  otherOperations: (language) => {
    if (language === '1') {
      return `CON Other Operations:
1. Transaction History
2. Update Info`;
    } else {
      return `CON Ibindi:
1. Amakuru y'ubucuruzi
2. Hindura Amakuru`;
    }
  }
};
