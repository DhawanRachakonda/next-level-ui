class AppUtil {
  static getLogoURL() {
    return `${process.env.PUBLIC_URL}/assets/images/logo.png`;
  }
  static getLoaderGIF() {
    return `${process.env.PUBLIC_URL}/assets/images/pulse.gif`;
  }
  static getRelatedCourseImageURL() {
    return `${process.env.PUBLIC_URL}/assets/images/medical-abortion-2x_dw.png`;
  }
}

export default AppUtil;
