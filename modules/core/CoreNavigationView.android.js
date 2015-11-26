var _CoreNavigationView = require('./CoreNavigationView.js')

class CoreNavigationView extends _CoreNavigationView {

  navbarPaddingTop() {
    if (this.state.navbarType === 'hide') {
      return 0;
    }
    return 40;
  }

}

module.exports = CoreNavigationView;