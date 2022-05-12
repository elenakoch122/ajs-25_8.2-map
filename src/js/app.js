export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(100, 'Такой персонаж уже существует');
    this.errors.set(101, 'Имя персонажа должно включать буквы');
    this.errors.set(102, 'Количество символов в имени персонажа должно быть от 2 до 10');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
