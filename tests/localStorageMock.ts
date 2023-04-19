export class LocalStorageMock {
  store: { [key: string]: any; };
  length: number;
  key: any;
  constructor() {
    this.store = {};
    this.length = 0;
  }

  clear() {
    this.store = {};
  }

  getItem(key:string) {
    return this.store[key] || null;
  }

  setItem(key:string, value:string) {
    this.store[key] = String(value);
  }

  removeItem(key:string) {
    delete this.store[key];
  }
}
module.exports = { LocalStorageMock };