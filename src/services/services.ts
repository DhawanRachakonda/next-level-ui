export default class Services {
  static getUserLoginURL(): string {
    return process.env.REACT_APP_LOGIN_URL!;
  }

  static getPrivilegesURL(): string {
    return process.env.REACT_APP_GET_PRIVILEGES_URL!;
  }
}
