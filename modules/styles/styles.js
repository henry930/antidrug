var React = require('react-native');

var StyleSheet = require('react-native').StyleSheet;

// TODO: Font Face: Lantinghei TC
// TODO: text Weight: ExtraLight

var SP = function(sp) {
  return PixelRatio.getFontScale() * sp;
}

var styles = StyleSheet.create({
  text_header: {
    textAlign: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 25,
    paddingBottom: 25,
    fontSize: 30,
    fontWeight: '200',
    color: "#000000",
  },
  text_desc: {
    lineHeight: 26,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '200',
    color: "#1A1A1A"
  },
  text_quiz_option: {
    fontSize: 20,
    fontWeight: '200',
    color: "#1A1A1A",
  },
  btn_quiz_option: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  card: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffffff",
    overflow: 'hidden',
  },
  card_shadow: {
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      height: 6,
      width: 5
    }
  },

  card_text_header: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 25,
    paddingBottom: 25,
    fontSize: 30,
    fontWeight: '200',
    color: "#000000"
  },

  card_text_desc: {
    fontSize: 16,
    fontWeight: '200',
    color: "#1A1A1A"
  },

  button_blue: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent",
    overflow: 'hidden',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#24B0CC",
  },

  button_orange: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#EEAB1F",
  },
  button_shadow: {
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      height: 6,
      width: 5
    }
  },

  text_button: {
    textAlign: 'center',
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: '200',
  },


});

module.exports = styles;