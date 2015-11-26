var _CoreNavigationView = require('./CoreNavigationView.js')

class CoreNavigationView extends _CoreNavigationView {

  navbarPaddingTop() {
    if (this.state.navbarType === 'hide') {
      return 20;
    }
    return 60;
  }

}

module.exports = CoreNavigationView;