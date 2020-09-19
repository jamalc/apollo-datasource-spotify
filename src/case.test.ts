import { camelCase } from './case';

describe('camelCase', () => {
  test('string', () => {
    expect(camelCase('hello, world!')).toEqual('hello, world!');
  });

  test('number', () => {
    expect(camelCase(42)).toEqual(42);
  });

  test('boolean', () => {
    expect(camelCase(true)).toEqual(true);
  });

  test('empty array', () => {
    expect(camelCase([])).toEqual([]);
  });

  test('empty object', () => {
    expect(camelCase({})).toMatchObject({});
  });

  test('array', () => {
    expect(camelCase(['hello, world!', 42, true, [], {}])).toMatchObject([
      'hello, world!',
      42,
      true,
      [],
      {},
    ]);
  });

  test('object', () => {
    expect(
      camelCase({
        hello_world: 'hello, world!',
        forty_two: 42,
        true: true,
        empty_array: [],
        empty_object: {},
        array: ['hello, world!', 42, true, [], {}],
      })
    ).toMatchObject({
      helloWorld: 'hello, world!',
      fortyTwo: 42,
      true: true,
      emptyArray: [],
      emptyObject: {},
      array: ['hello, world!', 42, true, [], {}],
    });
  });

  test('nested', () => {
    expect(
      camelCase({
        hello_world: 'hello, world!',
        forty_two: 42,
        true: true,
        empty_array: [],
        empty_object: {},
        array: ['hello, world!', 42, true, [], {}],
        object: {
          hello_world: 'hello, world!',
          forty_two: 42,
          true: true,
          empty_array: [],
          empty_object: {},
          array: ['hello, world!', 42, true, [], {}],
        },
      })
    ).toMatchObject({
      helloWorld: 'hello, world!',
      fortyTwo: 42,
      true: true,
      emptyArray: [],
      emptyObject: {},
      array: ['hello, world!', 42, true, [], {}],
      object: {
        helloWorld: 'hello, world!',
        fortyTwo: 42,
        true: true,
        emptyArray: [],
        emptyObject: {},
        array: ['hello, world!', 42, true, [], {}],
      },
    });
  });
});
