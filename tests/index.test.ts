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

test('input with new lines should give correct output', () => {
  expect(add('1\n2,3')).toBe(6);
})

test('change delimeter input should give correct output', () => {
  expect(add('//;\n1;2')).toBe(3);
})

test('negative number in input should give error message', () => {
  try {
    expect(add('-1,2')).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(TypeError);
    expect(error).toHaveProperty('message', 'negative numbers not allowed -1');
  }
})

test('negative numbers in input should give error message', () => {
  try {
    expect(add('-1,2,-3,-4,5')).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(TypeError);
    expect(error).toHaveProperty('message', 'negative numbers not allowed -1,-3,-4');
  }
})

