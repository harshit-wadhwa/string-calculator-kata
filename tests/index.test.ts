import add from '../index'

test('add calculator method exists', () => {
  expect(add).toBeDefined();
});

test('empty string input should throw type error', () => {
  try {
    add('');
  } catch (error) {
    expect(error).toBeInstanceOf(TypeError);
  }
});
