class AppUtil {
  static getLogoURL() {
    return `${process.env.PUBLIC_URL}/assets/images/logo.png`;
  }
  static getLoaderGIF() {
    return `${process.env.PUBLIC_URL}/assets/images/pulse.gif`;
  }
  static getNextLevelSmallImage() {
    return `${process.env.PUBLIC_URL}/assets/images/Nextlevel_small.png`;
  }
}

export default AppUtil;
