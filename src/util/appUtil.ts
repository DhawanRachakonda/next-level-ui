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
  static getRelatedCourseImageURL() {
    return `${process.env.PUBLIC_URL}/assets/images/medical-abortion-2x_dw.png`;
  }
  static getUserImageURL() {
    return `${process.env.PUBLIC_URL}/assets/images/Ellipse_131.png`;
  }
}

export default AppUtil;
