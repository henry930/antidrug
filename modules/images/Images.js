class Images {

  Make(device, os, env) {

    GLOBAL.IMAGE = {
      finger : require('./img/finger.png'),
      icon : require('./img/icon.png'),
      icon1 : require('./img/icon1.png'),
      icon2 : require('./img/icon2.png'),
      icon3 : require('./img/icon3.png'),
      icon4 : require('./img/icon4.png'),
      icon6 : require('./img/icon6.png'),
      icon_back : require('./img/icon_back.png'),
      icon_menu : require('./img/icon_menu.png'),
      like : require('./img/like.png'),
      map : require('./img/map.png'),
      pencil : require('./img/pencil.png'),
      phoneout : require('./img/phoneout.png'),
      phoneoutlight : require('./img/phoneoutlight.png'),
    }
  }
}

module.exports = Images;