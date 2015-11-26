var _NavBar = require('./NavBar.js')

class NavBar extends _NavBar {

  navbarPaddingTop() {
    return 20;
  }

  navbarHeight() {
    if (this.state.navbarType === 'hide') {
      return 20;
    }
    return 80;
  }

}

module.exports = NavBar;