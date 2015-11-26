class Constants {

  Make(device, os, env) {

    if (device == "sim")
    {
      if (os == "ios")
      {
        GLOBAL.APPCONSTANTS =
        {
          BASEURL: "http://localhost:8000"
        }
      }
      else if (os == "aos")
      {
        GLOBAL.APPCONSTANTS =
        {
          BASEURL: "http://192.168.1.101:8000"
        }
      }
    }
  }
}

module.exports = Constants;