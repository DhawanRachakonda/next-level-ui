class AppUtil {
  static getLogoURL() {
    return `${process.env.PUBLIC_URL}/assets/images/logo.png`;
  }
  static getLoaderGIF() {
    return `${process.env.PUBLIC_URL}/assets/images/pulse.gif`;
  }
}

export default AppUtil;
