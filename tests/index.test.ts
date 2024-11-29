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

test('simple input should give correct result', () => {
  expect(add('1,2')).toBe(3);
})

test('input with new lines should give correct outout', () => {
  expect(add('1\n2,3')).toBe(6);
})
