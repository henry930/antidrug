var _NavBar = require('./NavBar.js')

class NavBar extends _NavBar {

  navbarPaddingTop() {
    return 0;
  }

  navbarHeight() {
    if (this.state.navbarType === 'hide') {
      return 0;
    }
    return 40;
  }

}

module.exports = NavBar;