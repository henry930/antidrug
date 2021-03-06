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

  button_purple: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#E93580",
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





  about_text_header: {
    textAlign: 'left',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 25,
    paddingBottom: 25,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '200',
    color: "#000000",
  },
  about_text_desc: {
    paddingLeft: 15,
    paddingRight: 15,
    lineHeight: 20,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '200',
    color: "#1A1A1A"
  },





  qacard: {
    backgroundColor: "#ffffff",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#ffffff",
    overflow: 'hidden',
  },
  qacard_shadow: {
    marginLeft: 8,
    marginRight: 8,
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.35,
    shadowRadius: 4,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },


  qacard_text_header: {
    textAlign: 'left',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 18,
    lineHeight: 25,
    fontWeight: '200',
    color: "#E93580",
  },
  qacard_text_desc: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
    lineHeight: 20,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '200',
    color: "#1A1A1A"
  },

  qacard_text_button: {
    textAlign: 'center',
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: '200',
  },




});

module.exports = styles;