import calculate from '../calculate';

describe('AC button', () => {
  test('Should return null', () => {
    const obj = {
      total: 1,
      next: 2,
      operation: '+',
    };
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});

describe('Number button', () => {
  test('When next is 0, should return empty object', () => {
    const obj = {
      total: 10,
      next: '0',
      operation: '+',
    };
    expect(calculate(obj, '0')).toEqual({});
  });
  test('When there is an operation, should return next', () => {
    const obj = {
      total: 10,
      next: 5,
      operation: '+',
    };
    expect(calculate(obj, '5')).toEqual({
      total: 10,
      next: '55',
      operation: '+',
    });
  });
  test("When isn't an operation, should return next and clear the total value", () => {
    const obj = {
      total: 10,
      next: 5,
      operation: null,
    };
    expect(calculate(obj, '5')).toEqual({
      next: '55',
      total: null,
    });
  });
});

describe('. button', () => {
  test('When next is not null, should return next', () => {
    const obj = {
      total: 10,
      next: '5.',
      operation: '+',
    };
    expect(calculate(obj, '.')).toEqual({
      total: 10,
      next: '5.',
      operation: '+',
    });
  });
  test('When operation is not null, should return next', () => {
    const obj = {
      total: 10,
      next: null,
      operation: '+',
    };
    expect(calculate(obj, '.')).toEqual({
      total: 10,
      next: '0.',
      operation: '+',
    });
  });
  test('When total is not null, should return next', () => {
    const obj = {
      total: '10.',
      next: null,
      operation: null,
    };
    expect(calculate(obj, '.')).toEqual({});
  });
});

describe('= button', () => {
  test('Should return total', () => {
    const obj = {
      total: 10,
      next: 5,
      operation: '+',
    };
    expect(calculate(obj, '=')).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });
  test('When operation is null, should return empty object', () => {
    const obj = {
      total: 10,
      next: null,
      operation: null,
    };
    expect(calculate(obj, '=')).toEqual({});
  });
});

describe('+/- button', () => {
  test('When total is positive, should return negative', () => {
    const obj = {
      total: 10,
      next: null,
      operation: null,
    };
    expect(calculate(obj, '+/-')).toEqual({
      total: '-10',
      next: null,
      operation: null,
    });
  });
  test('When next is positive, should return negative', () => {
    const obj = {
      total: 10,
      next: 5,
      operation: null,
    };
    expect(calculate(obj, '+/-')).toEqual({
      total: 10,
      next: '-5',
      operation: null,
    });
  });
  test('Else, should return empty object', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, '+/-')).toEqual({});
  });
});
