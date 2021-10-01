export default class Settings {
  static #listeners = [];
  static #translations = {};
  static #locale = "en";

  static subscribe(listener) {
    this.#listeners.push(listener);
    return () => this.unsubscribe(listener);
  }

  static unsubscribe(listener) {
    this.#listeners.splice(this.#listeners.indexOf(listener), 1);
  }

  static get translations() {
    return this.#translations;
  }

  static set translations(translations) {
    this.#translations = translations;
  }

  static set locale(locale) {
    const previousLocale = this.#locale;
    this.#locale = locale;

    if (locale !== previousLocale) {
      this.#listeners.forEach((listener) => {
        listener(locale);
      });
    }
  }

  static get locale() {
    return this.#locale;
  }
}
