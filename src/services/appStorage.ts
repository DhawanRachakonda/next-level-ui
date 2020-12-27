export default class AppStorage {
  static setItem(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  static isItemPresent(key: string): boolean {
    return !!localStorage[key];
  }

  static getItem(key: string) {
    return localStorage[key];
  }
}
