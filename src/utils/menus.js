module.exports = {
  welcome: () => {
    return `CON Welcome / Murakaza neza\n1. English\n2. Kinyarwanda`;
  },

  mainMenu: (lang) => {
    if (lang === 'en') {
      return `CON Main Menu\n1. Option 1\n2. Option 2\n0. Back`;
    } else {
      return `CON Menyu Nyamukuru\n1. Ihitamo 1\n2. Ihitamo 2\n0. Subira inyuma`;
    }
  }
};
