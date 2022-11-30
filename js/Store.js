/* eslint-disable linebreak-style */

class Store {
  static #DATA_KEY;

  constructor(key, data) {
    this.#DATA_KEY = key;
    this.data = data;
  }

  static getResourceFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this.#DATA_KEY));
  }

  static saveResourceToLocalStorage() {
    localStorage.setItem(this.#DATA_KEY, JSON.stringify(this.data));
  }
}

export default Store;