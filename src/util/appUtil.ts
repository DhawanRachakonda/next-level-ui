import { AxiosResponse } from 'axios';

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
  static getCourseURL() {
    return `${process.env.PUBLIC_URL}/assets/images/image-4.png`;
  }
  static getFbURL() {
    return `${process.env.PUBLIC_URL}/assets/images/fb-layer-2.png`;
  }
  static getGoogleURL() {
    return `${process.env.PUBLIC_URL}/assets/images/google-layer-2.png`;
  }
  static getLinkedInURL() {
    return `${process.env.PUBLIC_URL}/assets/images/linkedin-layer-2.png`;
  }
  static getTwitterURL() {
    return `${process.env.PUBLIC_URL}/assets/images/twitter-layer-2.png`;
  }
  static isResponseSuccessSeries(response: AxiosResponse<any>): boolean {
    return response.status === 200 || response.status === 201;
  }
}

export default AppUtil;
