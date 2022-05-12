import ErrorRepository from '../app';

test('create an instance of the ErrorRepository', () => {
  expect(new ErrorRepository()).toBeInstanceOf(ErrorRepository);
});

test('translate method if the error is in the list', () => {
  const result = new ErrorRepository();
  expect(result.translate(100)).toBe('Такой персонаж уже существует');
});

test('translate method if the error is not in the list', () => {
  const result = new ErrorRepository();
  expect(result.translate(200)).toBe('Unknown error');
});
